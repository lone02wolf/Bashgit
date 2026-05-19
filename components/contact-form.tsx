"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type React from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  workType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  workType: "Architecture review",
  budget: "Not sure yet",
  timeline: "This month",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`BashGit Labs inquiry from ${form.company || form.name || "new lead"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Work email: ${form.email}`,
        `Company: ${form.company}`,
        `Need: ${form.workType}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
        "",
        "System challenge:",
        form.message
      ].join("\n")
    );

    return `mailto:hello@bashgit.com?subject=${subject}&body=${body}`;
  }, [form]);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-[8px] border border-line bg-white p-6 shadow-soft sm:p-8">
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
        <span className="form-label">What system problem should we help with?</span>
        <textarea
          className="form-field min-h-[170px] resize-y py-3"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Share the product, platform, backend or reliability challenge. Useful details: current stack, users, production pain, timeline and what success would look like."
          required
        />
      </label>

      <div className="rounded-[6px] border border-line bg-panel p-4 text-sm leading-6 text-ink-700">
        <strong className="text-ink-950">First step:</strong> a focused technical review. We will respond with the highest-risk questions, a suggested path and whether BashGit Labs is the right fit.
      </div>

      <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-ink-950 px-5 text-sm font-semibold text-white transition hover:bg-ink-800">
        Send inquiry <ArrowUpRight className="size-4" />
      </button>

      {submitted ? (
        <p className="flex items-center gap-2 text-sm font-semibold text-ink-950">
          <CheckCircle2 className="size-4 text-signal-600" />
          Opening your email client with the inquiry prepared.
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
