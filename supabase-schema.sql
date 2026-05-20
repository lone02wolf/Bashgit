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
