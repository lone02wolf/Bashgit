import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { sendInquiryNotification } from "@/lib/contact-email";
import { getSpamReason, toInquiry, validateContactSubmission } from "@/lib/contact";
import { saveInquiry } from "@/lib/inquiry-store";

export const runtime = "nodejs";

const windowMs = 1000 * 60 * 60;
const maxSubmissionsPerWindow = 5;

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = globalThis as typeof globalThis & {
  __bashgitContactRateLimit?: Map<string, RateEntry>;
};

function getRateLimitStore() {
  if (!rateLimitStore.__bashgitContactRateLimit) {
    rateLimitStore.__bashgitContactRateLimit = new Map();
  }

  return rateLimitStore.__bashgitContactRateLimit;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please complete the form before sending." }, { status: 400 });
  }

  const validation = validateContactSubmission(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.errors[0], errors: validation.errors }, { status: 400 });
  }

  const ip = getClientIp(request);
  const ipHash = hashValue(ip || "unknown");
  const rateLimit = checkRateLimit(ipHash);

  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many messages were sent recently. Please try again later." }, { status: 429 });
  }

  const spamReason = getSpamReason(validation.data);
  if (spamReason) {
    return NextResponse.json({ error: spamReason }, { status: 400 });
  }

  const inquiry = toInquiry(validation.data, {
    source: request.headers.get("referer") || "Website contact form",
    userAgent: request.headers.get("user-agent") || "Unknown",
    ipHash
  });

  try {
    const storage = await saveInquiry(inquiry);

    try {
      await sendInquiryNotification(inquiry);
    } catch (error) {
      console.error(error);
    }

    return NextResponse.json({ ok: true, id: inquiry.id, storage: storage.provider });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "We could not save your inquiry. Please try again." }, { status: 500 });
  }
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const store = getRateLimitStore();
  const current = store.get(key);

  for (const [entryKey, entry] of store) {
    if (entry.resetAt <= now) {
      store.delete(entryKey);
    }
  }

  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (current.count >= maxSubmissionsPerWindow) {
    return { allowed: false };
  }

  current.count += 1;
  return { allowed: true };
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function hashValue(value: string) {
  const salt = process.env.CONTACT_HASH_SALT || "bashgit-contact";
  return createHash("sha256").update(`${salt}:${value}`).digest("hex");
}
