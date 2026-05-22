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
              Strategy-Led Software, AI & Cloud Engineering <span />
            </p>
            <h1 className="mt-5 max-w-[680px] text-[2.6rem] font-semibold leading-[1.02] text-ink-950 sm:text-[3.75rem] sm:leading-[1] lg:text-[4.25rem] xl:text-[4.7rem]">
              We turn ambitious product ideas into reliable operating systems.
            </h1>
            <p className="mt-7 max-w-[540px] text-base leading-8 text-ink-700 sm:text-lg">
              BashGit Labs is a Jaipur, India based software engineering studio helping founders and product teams design, build and operate platforms, AI-enabled workflows and cloud foundations that can carry real business pressure.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/expertise" variant="ghost" arrow="down">
                See how we think
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
          <h2 className="section-title mt-4">We build the layer between strategy and <span>reliable execution.</span></h2>
          <p className="section-copy mt-5">
            Modern products need more than screens and code. They need data, automation, delivery, observability and ownership working as one system.
          </p>
          <Link href="/process" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal-600">
            Review the operating model <ArrowRight className="size-4" />
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
            Strategic<br />Outcomes
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
        <div className="relative grid gap-10 p-7 sm:p-10 lg:p-12">
          <div className="topology-lines absolute inset-0 opacity-35" />
          <div className="relative z-10 w-full">
            <p className="eyebrow text-white/80">Our Philosophy</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl lg:text-[3.4rem]">
              We do not chase features. We build systems that create <span className="text-signal-400">operating leverage.</span>
            </h2>
          </div>
          <div className="relative z-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 xl:grid-cols-5">
            {philosophy.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[7px] border border-white/10 bg-white/[0.035] p-5">
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
      <div className="grid gap-10">
        {intro ? (
          <Reveal className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-signal-600">What We Do</p>
              <h2 className="mt-4 max-w-[760px] text-[2.45rem] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-950 sm:text-[3rem] lg:text-[3.55rem]">
                Strategic engineering for products, platforms and <span className="text-signal-600">AI-enabled operations.</span>
              </h2>
            </div>
            <div className="max-w-[650px] lg:justify-self-end">
              <p className="text-base leading-8 text-ink-700">
                The offer is intentionally focused: product systems, AI workflows, backend foundations, cloud delivery and reliability designed together.
              </p>
              <p className="mt-5 flex items-start gap-3 text-sm font-semibold leading-6 text-ink-700">
                <Star className="mt-1 size-4 fill-ink-950 text-ink-950" />
                Senior strategic and engineering attention on every engagement.
              </p>
            </div>
          </Reveal>
        ) : null}

        <Stagger className={intro ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3" : "grid gap-3"}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className={
                  intro
                    ? "group flex min-h-[330px] flex-col rounded-[8px] border border-line bg-white p-6 shadow-[0_14px_42px_rgba(6,18,41,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-signal-300 hover:shadow-[0_18px_54px_rgba(6,18,41,0.06)]"
                    : "group grid gap-5 rounded-[8px] border border-line bg-white p-5 shadow-[0_14px_42px_rgba(6,18,41,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-signal-300 hover:shadow-[0_18px_54px_rgba(6,18,41,0.06)] sm:grid-cols-[64px_1fr] sm:p-6 xl:grid-cols-[64px_1fr_230px] xl:items-center"
                }
              >
                <span className="grid size-14 place-items-center rounded-[7px] border border-line bg-white text-ink-900 shadow-[0_10px_28px_rgba(6,18,41,0.05)] transition group-hover:border-signal-400 group-hover:text-signal-600">
                  <Icon className="size-7" strokeWidth={1.5} />
                </span>
                <div className={intro ? "mt-6" : ""}>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink-950">{service.title}</h3>
                  <p className="mt-3 max-w-[760px] text-sm leading-7 text-ink-700">{service.copy}</p>
                </div>
                <div className={intro ? "mt-auto flex flex-wrap gap-2 pt-6" : "flex flex-wrap gap-2 sm:col-start-2 xl:col-start-auto xl:justify-end"}>
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
          <h2 className="section-title mt-4">We turn uncertainty into a buildable operating plan.</h2>
          <p className="section-copy mt-5">A strategy-led delivery model for choosing the right system, building it in controlled increments and proving it can operate.</p>
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
          <h2 className="section-title mt-4">Controlled delivery for systems that must earn trust.</h2>
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
            <p className="eyebrow text-signal-600">Proof Before Scale</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink-950">Visible decisions, usable artifacts and systems you can inspect.</h2>
            <p className="mt-5 text-sm leading-7 text-ink-700">
              We make strategy tangible through system maps, delivery plans, evaluation checkpoints and operating patterns your team can use after the first release.
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
            <p className="eyebrow text-white/80">Start With The Operating Model</p>
            <h2 className="mt-4 max-w-[680px] text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
              Bring the product, platform or AI workflow you need to <span className="text-signal-400">make real.</span>
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-7 text-white/78">
              We will map the strategy, architecture, risks, delivery path and first useful increment before writing code or expanding scope.
            </p>
          </div>
          <div className="space-y-5 lg:text-center">
            <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
              Start a conversation
            </ButtonLink>
            <p className="text-sm text-white/70">
              Or email us at <a className="font-semibold text-white underline decoration-white/30 underline-offset-4" href="mailto:bashgitlabs@gmail.com">bashgitlabs@gmail.com</a>
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
    { label: "AI Workflow Development", href: "/services" },
    { label: "Backend & APIs", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
    { label: "Reliability Engineering", href: "/services" }
  ];
  const technologyItems = techStack.slice(0, 5).map((item) => ({ label: item, href: "/expertise" }));

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_0.8fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-[280px] text-sm leading-6 text-ink-700">
            Jaipur-based software, AI and cloud engineering for serious product teams across India.
          </p>
          <p className="mt-5 text-sm font-semibold text-ink-800">Jaipur, Rajasthan, India</p>
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
            <a aria-label="Email" href="mailto:bashgitlabs@gmail.com" className="text-ink-950 transition hover:text-signal-600"><Mail className="size-6" /></a>
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
  copy,
  variant = "light"
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <section className={`relative overflow-hidden border-b ${isDark ? "border-white/10 bg-ink-950 text-white" : "border-line bg-white"}`}>
      {isDark ? (
        <>
          <div className="diagram-grid absolute inset-0 opacity-20" />
          <div className="topology-lines absolute inset-0 opacity-30" />
        </>
      ) : (
        <div className="hero-grid absolute inset-0 opacity-60" />
      )}
      <div className="relative z-10 mx-auto grid max-w-[1480px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_0.65fr] lg:px-10 lg:py-24">
        <Reveal>
          <p className={`eyebrow ${isDark ? "text-signal-300" : "text-signal-600"}`}>{eyebrow}</p>
          <h1 className={`mt-5 max-w-[820px] text-5xl font-semibold leading-[1.02] sm:text-7xl ${isDark ? "text-white" : "text-ink-950"}`}>{title}</h1>
        </Reveal>
        <Reveal delay={0.08} className="flex items-end">
          <div className={`w-full border-l pl-6 ${isDark ? "border-white/16" : "border-line"}`}>
            <p className={`max-w-[620px] text-lg leading-8 ${isDark ? "text-white/74" : "text-ink-700"}`}>{copy}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Strategy", "Architecture", "AI Systems", "Reliability"].map((item) => (
                <span
                  key={item}
                  className={`rounded-[5px] border px-3 py-2 text-xs font-bold shadow-[0_8px_22px_rgba(6,18,41,0.04)] ${
                    isDark ? "border-white/12 bg-white/[0.08] text-white/78" : "border-line bg-white text-ink-700"
                  }`}
                >
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
          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.025em]">Tell us what you want to make possible.</h2>
          <p className="mt-5 text-base leading-8 text-white/76">
            Share the ambition, the current stage and the outcome that would make the next move worth it.
          </p>
          <div className="mt-10 space-y-4 text-sm text-white/80">
            <p><strong className="text-white">Email:</strong> bashgitlabs@gmail.com</p>
            <p><strong className="text-white">Base:</strong> Jaipur, India. Working with teams remotely across India.</p>
            <p><strong className="text-white">Engagements:</strong> product builds, AI workflows, modernization, platform and reliability retainers</p>
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
