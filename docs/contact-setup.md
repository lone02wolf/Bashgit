# Contact Form Setup

The contact form posts to `/api/contact`.

Submissions are validated on the server, protected with a honeypot field, a minimum completion time, a small link filter and per-IP rate limiting. Attachments are intentionally not accepted.

## Database

For Vercel, the simplest setup is a small Supabase project. It gives you a real Postgres database, a dashboard to see messages and a REST API this app can call without extra packages.

Create a Supabase table with this SQL and add the environment variables below.

```sql
create table if not exists public.contact_inquiries (
  id uuid primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  work_type text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  source text not null,
  user_agent text not null,
  ip_hash text not null
);

alter table public.contact_inquiries enable row level security;
```

The app writes with the service role key from the server only, so no public insert policy is required.

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
CONTACT_HASH_SALT=
CONTACT_ALLOWED_ORIGINS=https://bashgit.com,https://www.bashgit.com
```

Without Supabase variables, development submissions are appended to `data/inquiries.jsonl`.

On Vercel, Supabase variables are required. The local JSONL store is only for testing on your machine because Vercel serverless files are not durable.

## Email Notification

Email notifications use Resend. The recipient can be a Gmail address.

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=bashgitlabs@gmail.com
CONTACT_FROM_EMAIL="BashGit Labs <hello@your-verified-domain.com>"
```

If email variables are missing, the inquiry is still stored and the server logs that email is not configured.

## Local Test

Start the app, submit the contact form and inspect:

```bash
data/inquiries.jsonl
```

Each line is one stored inquiry. When you later add Supabase env vars locally, the same form will write to Supabase instead.
