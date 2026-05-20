import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import type { ContactInquiry } from "@/lib/contact";

const localStorePath = path.join(process.cwd(), "data", "inquiries.jsonl");

export async function saveInquiry(inquiry: ContactInquiry) {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    await saveToSupabase(inquiry);
    return { provider: "supabase" as const };
  }

  if (process.env.VERCEL) {
    throw new Error("Production database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  await saveToLocalStore(inquiry);
  return { provider: "local" as const };
}

async function saveToSupabase(inquiry: ContactInquiry) {
  const baseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const response = await fetch(`${baseUrl}/rest/v1/contact_inquiries`, {
    method: "POST",
    headers: {
      apikey: serviceKey || "",
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      id: inquiry.id,
      created_at: inquiry.createdAt,
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      work_type: inquiry.workType,
      budget: inquiry.budget,
      timeline: inquiry.timeline,
      message: inquiry.message,
      source: inquiry.source,
      user_agent: inquiry.userAgent,
      ip_hash: inquiry.ipHash
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase inquiry insert failed: ${response.status} ${message}`);
  }
}

async function saveToLocalStore(inquiry: ContactInquiry) {
  await mkdir(path.dirname(localStorePath), { recursive: true });
  await appendFile(localStorePath, `${JSON.stringify(inquiry)}\n`, "utf8");
}
