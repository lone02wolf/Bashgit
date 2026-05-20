"use client";

import { useRef, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type React from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  workType: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  workType: "Architecture review",
  budget: "Not sure yet",
  timeline: "This month",
  message: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const startedAtRef = useRef(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update(field: keyof FormState, value: string) {
    if (!startedAtRef.current) {
      startedAtRef.current = Date.now();
    }

    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...form, startedAt: startedAtRef.current || Date.now() })
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your inquiry. Please try again.");
      }

      setStatus("sent");
      setFeedback("Thanks. Your message was sent and stored. We will reply within one business day.");
      setForm(initialState);
      startedAtRef.current = Date.now();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your inquiry. Please try again.");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-[8px] border border-line bg-white p-6 shadow-soft sm:p-8">
      <label className="hidden" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => update("name", value)} placeholder="Your name" required />
        <Field label="Work email" value={form.email} onChange={(value) => update("email", value)} placeholder="you@company.com" type="email" required />
      </div>

      <Field label="Company" value={form.company} onChange={(value) => update("company", value)} placeholder="Company name" required />

      <div className="grid gap-5 sm:grid-cols-3">
        <Select
          label="Need"
          value={form.workType}
          onChange={(value) => update("workType", value)}
          options={["Architecture review", "Product build", "Backend/API work", "Cloud/DevOps", "Reliability retainer", "Other"]}
        />
        <Select
          label="Budget"
          value={form.budget}
          onChange={(value) => update("budget", value)}
          options={["Not sure yet", "$2k-$5k", "$5k-$15k", "$15k+", "Retainer"]}
        />
        <Select
          label="Timeline"
          value={form.timeline}
          onChange={(value) => update("timeline", value)}
          options={["This month", "Next 30-60 days", "This quarter", "Exploring"]}
        />
      </div>

      <label className="block">
        <span className="form-label">What should we help you move forward?</span>
        <textarea
          className="form-field min-h-[170px] resize-y py-3"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          minLength={30}
          maxLength={2400}
          placeholder="Share what you are building, what is not working as well as it should and what a good outcome would look like."
          required
        />
      </label>

      <div className="rounded-[6px] border border-line bg-panel p-4 text-sm leading-6 text-ink-700">
        <strong className="text-ink-950">No attachments here:</strong> to keep submissions safe, we do not accept files through this form. If a document is useful, we will request it through a secure link.
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-ink-950 px-5 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:bg-ink-500"
      >
        {status === "sending" ? "Sending..." : "Send inquiry"} <ArrowUpRight className="size-4" />
      </button>

      {feedback ? (
        <p className={`flex items-center gap-2 text-sm font-semibold ${status === "error" ? "text-red-700" : "text-ink-950"}`} role="status">
          {status === "error" ? <AlertCircle className="size-4" /> : <CheckCircle2 className="size-4 text-signal-600" />}
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input className="form-field" type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} required={required} />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <select className="form-field" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
