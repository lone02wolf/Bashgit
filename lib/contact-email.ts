import type { ContactInquiry } from "@/lib/contact";

export async function sendInquiryNotification(inquiry: ContactInquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return { sent: false, reason: "Email notification is not configured." };
  }

  const from = process.env.CONTACT_FROM_EMAIL || "BashGit Labs <onboarding@resend.dev>";
  const subject = `New BashGit inquiry: ${inquiry.company}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text: buildTextEmail(inquiry),
      html: buildHtmlEmail(inquiry)
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend notification failed: ${response.status} ${message}`);
  }

  return { sent: true };
}

function buildTextEmail(inquiry: ContactInquiry) {
  return [
    "New BashGit Labs inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company}`,
    `Need: ${inquiry.workType}`,
    `Budget: ${inquiry.budget}`,
    `Timeline: ${inquiry.timeline}`,
    `Source: ${inquiry.source}`,
    "",
    "Message:",
    inquiry.message
  ].join("\n");
}

function buildHtmlEmail(inquiry: ContactInquiry) {
  const rows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Company", inquiry.company],
    ["Need", inquiry.workType],
    ["Budget", inquiry.budget],
    ["Timeline", inquiry.timeline],
    ["Source", inquiry.source]
  ];

  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#061229;line-height:1.6">
      <h2 style="margin:0 0 16px">New BashGit Labs inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:8px 12px;border:1px solid #e5eaf1;font-weight:700;width:140px">${escapeHtml(label)}</td>
                <td style="padding:8px 12px;border:1px solid #e5eaf1">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0;padding:16px;border:1px solid #e5eaf1;border-radius:8px;background:#f8fafc">${escapeHtml(inquiry.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
