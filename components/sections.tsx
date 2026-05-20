import Link from "next/link";
import { ArrowRight, GitBranch, Mail, MessageSquare, Network, Star } from "lucide-react";
import type React from "react";
import { ArchitectureDiagram, LifecycleMap } from "@/components/architecture-diagram";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Logo } from "@/components/logo";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { TechIcon } from "@/components/tech-icon";
import {
  insights,
  operatingLayers,
  philosophy,
  principles,
  processSteps,
  results,
  services,
  techStack,
  trustItems
} from "@/data/site";

export function Hero() {
  return (
    <section className="hero-stage relative overflow-hidden border-b border-line/70 bg-white">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="mx-auto grid max-w-[1480px] gap-10 px-5 pb-14 pt-14 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:pb-20 lg:pt-20">
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <Reveal>
            <p className="eyebrow">
              Founder-led Software & Cloud Engineering <span />
            </p>
            <h1 className="mt-5 max-w-[680px] text-[2.6rem] font-semibold leading-[1.02] text-ink-950 sm:text-[3.75rem] sm:leading-[1] lg:text-[4.25rem] xl:text-[4.7rem]">
              Reliable software platforms for teams that cannot afford failure.
            </h1>
            <p className="mt-7 max-w-[540px] text-base leading-8 text-ink-700 sm:text-lg">
              BashGit Labs helps B2B SaaS founders, product teams and infrastructure-heavy businesses design, build and operate scalable applications, backend systems and cloud delivery foundations.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/expertise" variant="ghost" arrow="down">
                See technical capabilities
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative z-10 min-w-0">
          <ArchitectureDiagram />
        </Reveal>

        <Stagger className="relative z-10 grid gap-0 overflow-hidden rounded-[8px] border border-line bg-white/78 shadow-[0_18px_56px_rgba(6,18,41,0.07)] backdrop-blur sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.label} className="flex items-center gap-4 border-b border-r border-line/80 p-5 lg:border-b-0">
                <Icon className="size-7 shrink-0 text-ink-900" strokeWidth={1.6} />
                <span className="max-w-[210px] text-sm font-semibold leading-5 text-ink-800">{item.label}</span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function OperatingLayer() {
  return (
    <section className="section-shell" id="operating-layer">
      <div className="grid gap-8 lg:grid-cols-[330px_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-signal-600">The BashGit Operating Layer</p>
          <h2 className="section-title mt-4">We build the operating layer that keeps your product <span>alive.</span></h2>
          <p className="section-copy mt-5">
            Features come and go. The operating layer is what keeps your product reliable, secure and ready for growth.
          </p>
          <Link href="/process" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal-600">
            How we think about systems <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Stagger className="relative lg:pr-28">
          <div className="hidden border-t border-dashed border-signal-500/70 lg:absolute lg:left-16 lg:right-28 lg:top-[58%] lg:block" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {operatingLayers.map((layer, index) => {
              return (
                <StaggerItem key={layer.title} className="relative rounded-[8px] border border-line bg-white p-6 shadow-[0_10px_30px_rgba(6,18,41,0.04)]">
                  {index < operatingLayers.length - 1 ? <span className="absolute -right-3 top-[58%] hidden size-1.5 rounded-full bg-signal-500 lg:block" /> : null}
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-signal-600">Layer 0{index + 1}</span>
                  <h3 className="mt-3 text-sm font-extrabold text-ink-950">{layer.title}</h3>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink-500">{layer.signal}</p>
                  <ul className="mt-4 space-y-1 text-sm text-ink-700">
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-7 grid h-24 place-items-center rounded-[6px] border border-line bg-panel/70">
                    <OperatingLayerVisual title={layer.title} />
                  </div>
                  <p className="mt-4 border-t border-line pt-3 text-xs font-semibold leading-5 text-ink-700">{layer.output}</p>
                </StaggerItem>
              );
            })}
          </div>
          <div className="absolute right-0 top-[58%] hidden translate-x-2 items-center gap-2 text-sm font-extrabold text-signal-600 xl:flex">
            <span className="block w-7 border-t border-dashed border-signal-500" />
            Business<br />Outcomes
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 rounded-[6px] border border-line bg-panel px-5 py-4 text-sm font-medium text-ink-700 lg:mr-0">
            <span>Security</span>
            <span className="text-signal-600">/</span>
            <span>Automation</span>
            <span className="text-signal-600">/</span>
            <span>Observability</span>
            <span className="text-signal-600">/</span>
            <span>Continuous Delivery</span>
          </div>
        </Stagger>
      </div>
    </section>
  );
}

function OperatingLayerVisual({ title }: { title: string }) {
  if (title === "Product Layer") {
    return (
      <svg viewBox="0 0 96 72" className="h-16 w-20 text-ink-800" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="18" y="15" width="46" height="38" rx="3" fill="white" />
        <rect x="24" y="10" width="46" height="38" rx="3" fill="white" opacity="0.72" />
        <rect x="30" y="20" width="46" height="38" rx="3" fill="white" />
        <path d="M38 31h8M38 40h25M38 49h16" opacity="0.45" />
        <rect x="55" y="30" width="10" height="8" rx="1.5" className="text-signal-500" stroke="currentColor" />
        <circle cx="41" cy="31" r="1.5" className="text-signal-500" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (title === "Application Layer") {
    return (
      <svg viewBox="0 0 96 72" className="h-16 w-20 text-ink-800" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="48" cy="36" r="5" />
        <circle cx="26" cy="50" r="4" />
        <circle cx="28" cy="20" r="4" />
        <circle cx="70" cy="22" r="4" />
        <circle cx="72" cy="50" r="4" />
        <path d="M44 33 31 23M52 33 67 24M44 39 30 48M52 39 68 48" />
        <circle cx="48" cy="36" r="12" className="text-signal-500" strokeDasharray="3 4" />
      </svg>
    );
  }

  if (title === "Data Layer") {
    return (
      <svg viewBox="0 0 96 72" className="h-16 w-20 text-ink-800" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="40" cy="18" rx="18" ry="7" />
        <path d="M22 18v28c0 4 8 7 18 7s18-3 18-7V18" />
        <path d="M22 32c0 4 8 7 18 7s18-3 18-7" />
        <ellipse cx="66" cy="46" rx="11" ry="5" />
        <path d="M55 46v10c0 3 5 5 11 5s11-2 11-5V46" />
      </svg>
    );
  }

  if (title === "Infrastructure Layer") {
    return (
      <svg viewBox="0 0 96 72" className="h-16 w-20 text-ink-800" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 49h43a14 14 0 0 0 0-28 20 20 0 0 0-38-2A15 15 0 0 0 28 49Z" />
        <path d="M49 57V35" className="text-signal-500" stroke="currentColor" />
        <path d="m42 42 7-7 7 7" className="text-signal-500" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 72" className="h-16 w-20 text-ink-800" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="14" width="58" height="39" rx="3" fill="white" />
      <path d="M29 43h36M35 38v-9M46 38V25M57 38v-5" />
      <path d="m31 29 11 6 9-12 14 7" className="text-signal-500" stroke="currentColor" />
      <path d="M42 53v8M54 53v8M34 61h28" />
      <circle cx="67" cy="24" r="2" className="text-signal-500" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhilosophyBand() {
  return (
    <section className="section-shell py-0">
      <Reveal className="overflow-hidden rounded-[8px] bg-ink-950 text-white shadow-soft">
        <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[330px_1fr] lg:p-12">
          <div className="topology-lines absolute inset-0 opacity-35" />
          <div className="relative z-10">
            <p className="eyebrow text-white/80">Our Philosophy</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
              We don&apos;t just ship features. We build systems that can <span className="text-signal-400">survive production.</span>
            </h2>
          </div>
          <div className="relative z-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {philosophy.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-white/25 sm:border-l sm:pl-8">
                  <Icon className="mb-5 size-8 text-white" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/76">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ServicesPreview({ intro = true }: { intro?: boolean }) {
  return (
    <section className="section-shell" id="expertise">
      <div className={intro ? "grid gap-10 lg:grid-cols-[390px_1fr]" : "grid gap-8"}>
        {intro ? (
          <Reveal>
            <p className="eyebrow text-signal-600">What We Do</p>
            <h2 className="section-title mt-4">End-to-end engineering capabilities built around <span>real product infrastructure.</span></h2>
            <p className="mt-6 max-w-[340px] text-base leading-8 text-ink-700">
              The offer is intentionally narrow: product surfaces, backend foundations, cloud delivery and reliability treated as one system.
            </p>
            <p className="mt-8 flex items-start gap-3 text-sm font-semibold leading-6 text-ink-700">
              <Star className="mt-1 size-4 fill-ink-950 text-ink-950" />
              Senior engineering attention on every engagement.
            </p>
          </Reveal>
        ) : null}

        <Stagger className={intro ? "capability-rail grid gap-0 overflow-hidden rounded-[8px] border border-line bg-white shadow-[0_18px_70px_rgba(6,18,41,0.06)]" : "capability-rail grid gap-0 overflow-hidden rounded-[8px] border border-line bg-white shadow-[0_18px_70px_rgba(6,18,41,0.06)]"}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="group grid gap-5 border-b border-line bg-white p-6 transition duration-300 hover:bg-panel/70 sm:grid-cols-[72px_1fr_190px] sm:items-center sm:p-7"
              >
                <span className="grid size-14 place-items-center rounded-[7px] border border-line bg-white text-ink-900 shadow-[0_10px_28px_rgba(6,18,41,0.05)] transition group-hover:border-signal-400 group-hover:text-signal-600">
                  <Icon className="size-7" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink-950">{service.title}</h3>
                  <p className="mt-3 max-w-[720px] text-sm leading-7 text-ink-700">{service.copy}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {service.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-[4px] border border-line bg-panel px-2.5 py-1 text-[11px] font-bold text-ink-700">
                      <TechIcon tech={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-shell" id="process">
      <div className="grid gap-10 lg:grid-cols-[330px_1fr_420px]">
        <Reveal>
          <p className="eyebrow text-signal-600">Our Approach</p>
          <h2 className="section-title mt-4">We reduce risk before we write code.</h2>
          <p className="section-copy mt-5">A proven operating model that brings clarity early, builds the right thing and ships with confidence.</p>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-8 left-6 top-3 hidden w-px bg-signal-500/40 sm:block" />
          <Stagger className="space-y-7">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title} className="relative grid gap-4 sm:grid-cols-[52px_1fr]">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border border-line bg-white text-ink-800">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-ink-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-700">{step.copy}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.12}>
          <ProcessFlowDiagram />
        </Reveal>
      </div>
    </section>
  );
}

function ProcessFlowDiagram() {
  const points = [
    { label: "Clarity", detail: "shared problem map", x: 82, y: 86, labelX: 112, labelY: 74 },
    { label: "Confidence", detail: "architecture decisions", x: 178, y: 158, labelX: 208, labelY: 146 },
    { label: "Control", detail: "safe delivery path", x: 286, y: 242, labelX: 316, labelY: 230 },
    { label: "Continuous Value", detail: "operating backlog", x: 232, y: 346, labelX: 72, labelY: 342 }
  ];

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-line bg-panel p-6">
      <div className="contour-lines absolute inset-0 opacity-70" />
      <svg className="relative z-10 h-[430px] w-full" viewBox="0 0 420 430" fill="none" role="img" aria-label="Risk reduction path from clarity to continuous value">
        <path
          className="flow-line bright"
          d="M82 86 C104 126 132 142 178 158 S262 198 286 242 S282 312 232 346"
          stroke="#1878ff"
          strokeWidth="2.4"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="18" fill="rgba(24,120,255,0.10)" />
            <circle cx={point.x} cy={point.y} r="7" fill="#1878ff" />
            <text x={point.labelX} y={point.labelY} fill={point.label === "Clarity" || point.label === "Continuous Value" ? "#0c70ff" : "#061229"} fontSize="18" fontWeight="800">
              {point.label}
            </text>
            <text x={point.labelX} y={point.labelY + 22} fill="#60708a" fontSize="11" fontWeight="700">
              {point.detail}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function PrinciplesSection() {
  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-signal-600">Engineering Principles</p>
          <h2 className="section-title mt-4">Controlled delivery for systems that have to keep working.</h2>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <StaggerItem key={principle} className="rounded-[8px] border border-line bg-white p-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">0{index + 1}</span>
              <p className="mt-4 text-lg font-semibold leading-7 text-ink-950">{principle}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="section-shell py-0">
      <Reveal className="rounded-[8px] border border-line bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="eyebrow text-signal-600">Proof Before Logos</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink-950">Concrete technical assets you can judge before you commit.</h2>
            <p className="mt-5 text-sm leading-7 text-ink-700">
              BashGit Labs is young. Instead of borrowing credibility, we make the engineering process visible through practical outputs, review artifacts and reusable system patterns.
            </p>
            <Link href="/process" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal-600">
              Review the operating model <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {results.map((result) => {
              const Icon = result.icon;
              return (
                <article key={result.title} className="border-line md:border-l md:pl-8">
                  <Icon className="mb-5 size-12 text-ink-950" strokeWidth={1.4} />
                  <h3 className="font-extrabold text-ink-950">{result.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{result.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section-shell pb-8">
      <Reveal className="overflow-hidden rounded-[8px] bg-ink-950 text-white shadow-soft">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.95fr_300px_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-white/80">Start With The System</p>
            <h2 className="mt-4 max-w-[680px] text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
              Bring the product, platform or reliability problem you need to <span className="text-signal-400">solve properly.</span>
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-7 text-white/78">
              We will map the architecture, delivery path, risks and first useful increment before writing code or selling you a long engagement.
            </p>
          </div>
          <div className="space-y-5 lg:text-center">
            <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
              Start a conversation
            </ButtonLink>
            <p className="text-sm text-white/70">
              Or email us at <a className="font-semibold text-white underline decoration-white/30 underline-offset-4" href="mailto:hello@bashgit.com">hello@bashgit.com</a>
            </p>
          </div>
          <LifecycleMap compact />
        </div>
      </Reveal>
    </section>
  );
}

export function InsightsList() {
  return (
    <Stagger className="grid gap-5 md:grid-cols-3">
      {insights.map((post) => (
        <StaggerItem key={post.title} className="rounded-[8px] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">{post.category}</p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink-950">{post.title}</h3>
          <p className="mt-5 text-sm leading-7 text-ink-700">{post.excerpt}</p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{post.date} / {post.readTime}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Footer() {
  const companyItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Insights", href: "/insights" }
  ];
  const serviceItems = [
    { label: "Product Engineering", href: "/services" },
    { label: "Backend & APIs", href: "/services" },
    { label: "DevOps & Cloud", href: "/services" },
    { label: "Reliability", href: "/services" }
  ];
  const technologyItems = techStack.slice(0, 5).map((item) => ({ label: item, href: "/expertise" }));

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_0.8fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-[260px] text-sm leading-6 text-ink-700">Engineering reliable software systems that drive real business impact.</p>
          <p className="mt-10 text-sm text-ink-500">(c) 2026 BashGit Labs. All rights reserved.</p>
        </div>
        <FooterColumn title="Company" items={companyItems} />
        <FooterColumn title="Services" items={serviceItems} />
        <TechnologyFooterColumn items={technologyItems} />
        <div>
          <h3 className="footer-heading">Let&apos;s Connect</h3>
          <div className="mt-6 flex gap-4">
            <Link aria-label="Contact BashGit Labs" href="/contact" className="text-ink-950 transition hover:text-signal-600"><Network className="size-6" /></Link>
            <Link aria-label="Read technical insights" href="/insights" className="text-ink-950 transition hover:text-signal-600"><GitBranch className="size-6" /></Link>
            <a aria-label="Email" href="mailto:hello@bashgit.com" className="text-ink-950 transition hover:text-signal-600"><Mail className="size-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-sm text-ink-700 transition hover:text-signal-600">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto grid max-w-[1480px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_0.65fr] lg:px-10 lg:py-24">
        <Reveal>
          <p className="eyebrow text-signal-600">{eyebrow}</p>
          <h1 className="mt-5 max-w-[820px] text-5xl font-semibold leading-[1.02] text-ink-950 sm:text-7xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.08} className="flex items-end">
          <div className="w-full border-l border-line pl-6">
            <p className="max-w-[620px] text-lg leading-8 text-ink-700">{copy}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Architecture", "Delivery", "Reliability"].map((item) => (
                <span key={item} className="rounded-[5px] border border-line bg-white px-3 py-2 text-xs font-bold text-ink-700 shadow-[0_8px_22px_rgba(6,18,41,0.04)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
        <Reveal className="rounded-[8px] bg-ink-950 p-8 text-white sm:p-10">
          <MessageSquare className="size-10 text-signal-400" strokeWidth={1.5} />
          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.025em]">Tell us what you want to build.</h2>
          <p className="mt-5 text-base leading-8 text-white/76">
            Share the idea, the current stage and what would make the work feel like a clear win for your team.
          </p>
          <div className="mt-10 space-y-4 text-sm text-white/80">
            <p><strong className="text-white">Email:</strong> hello@bashgit.com</p>
            <p><strong className="text-white">Engagements:</strong> product builds, modernization, DevOps, reliability retainers</p>
            <p><strong className="text-white">Response:</strong> one business day</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function TechnologyFooterColumn({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="footer-heading">Technologies</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-ink-700 transition hover:text-signal-600">
              <TechIcon tech={item.label} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
