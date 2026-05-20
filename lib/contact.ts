import { randomUUID } from "node:crypto";

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  workType: string;
  budget: string;
  timeline: string;
  message: string;
  website?: string;
  startedAt?: number;
};

export type ContactInquiry = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  workType: string;
  budget: string;
  timeline: string;
  message: string;
  source: string;
  userAgent: string;
  ipHash: string;
};

type ValidationResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; errors: string[] };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const limits = {
  name: 120,
  email: 180,
  company: 160,
  workType: 80,
  budget: 80,
  timeline: 80,
  message: 2400
};

export function validateContactSubmission(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: ["Please complete the required fields."] };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactSubmission = {
    name: normalize(raw.name),
    email: normalize(raw.email).toLowerCase(),
    company: normalize(raw.company),
    workType: normalize(raw.workType),
    budget: normalize(raw.budget || "Not sure yet"),
    timeline: normalize(raw.timeline),
    message: normalize(raw.message),
    website: normalize(raw.website),
    startedAt: typeof raw.startedAt === "number" ? raw.startedAt : Number(raw.startedAt)
  };

  const errors: string[] = [];

  if (!data.name) errors.push("Name is required.");
  if (!data.email || !emailPattern.test(data.email)) errors.push("A valid work email is required.");
  if (!data.company) errors.push("Company is required.");
  if (!data.workType) errors.push("Please choose what you need help with.");
  if (!data.timeline) errors.push("Please choose a timeline.");
  if (data.message.length < 30) errors.push("Please add a little more detail about the project.");

  for (const [field, maxLength] of Object.entries(limits)) {
    const value = data[field as keyof typeof limits];
    if (typeof value === "string" && value.length > maxLength) {
      errors.push(`${label(field)} is too long.`);
    }
  }

  return errors.length ? { ok: false, errors } : { ok: true, data };
}

export function getSpamReason(data: ContactSubmission, now = Date.now()) {
  if (data.website) {
    return "Automated submission detected.";
  }

  if (!data.startedAt || Number.isNaN(data.startedAt)) {
    return "The form session was invalid.";
  }

  const elapsed = now - data.startedAt;
  if (elapsed < 4000) {
    return "Please take a moment to complete the form before sending.";
  }

  if (elapsed > 1000 * 60 * 60 * 2) {
    return "This form session expired. Please refresh and try again.";
  }

  const linkCount = (data.message.match(/https?:\/\/|www\./gi) || []).length;
  if (linkCount > 2) {
    return "Please remove extra links and send a short project summary.";
  }

  if (/(casino|crypto giveaway|loan offer|viagra|telegram|whatsapp only)/i.test(data.message)) {
    return "This message looks automated.";
  }

  return null;
}

export function toInquiry(data: ContactSubmission, meta: { source: string; userAgent: string; ipHash: string }): ContactInquiry {
  return {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: data.name,
    email: data.email,
    company: data.company,
    workType: data.workType,
    budget: data.budget,
    timeline: data.timeline,
    message: data.message,
    source: meta.source,
    userAgent: meta.userAgent,
    ipHash: meta.ipHash
  };
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function label(field: string) {
  return field.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}
