import { ArrowRight, CheckCircle2, CircleDot, FileText, Gauge, Layers3, Route, ShieldCheck, Workflow } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { TechIcon } from "@/components/tech-icon";
import {
  engagementModels,
  expertiseAreas,
  labSystems,
  operatingStandards,
  processDeliverables,
  serviceProofPoints,
  techStack
} from "@/data/site";

export function EngagementModels() {
  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <Reveal>
          <p className="eyebrow text-signal-600">Engagement Models</p>
          <h2 className="section-title mt-4">Built for teams that need senior execution, not slideware.</h2>
          <p className="section-copy mt-5">
            We shape each engagement around a measurable system outcome: a product shipped, a platform stabilized or a reliability layer made visible.
          </p>
        </Reveal>
        <Stagger className="grid gap-4">
          {engagementModels.map((model) => (
            <StaggerItem key={model.title} className="rounded-[8px] border border-line bg-white p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <CircleDot className="mt-1 size-6 shrink-0 text-signal-600" strokeWidth={1.7} />
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink-950">{model.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{model.copy}</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-ink-950">{model.fit}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function LabSystemsSection() {
  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-10 lg:grid-cols-[390px_1fr]">
        <Reveal>
          <p className="eyebrow text-signal-600">BashGit Labs Systems</p>
          <h2 className="section-title mt-4">Service work today, reusable engineering systems tomorrow.</h2>
          <p className="section-copy mt-5">
            BashGit Labs is being built as more than a project shop. Each engagement sharpens reusable patterns for product launches, cloud delivery and reliability operations.
          </p>
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {labSystems.map((system) => {
            const Icon = system.icon;
            return (
              <StaggerItem key={system.title} className="rounded-[8px] border border-line bg-white p-7">
                <Icon className="mb-6 size-9 text-ink-900" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold leading-tight text-ink-950">{system.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-700">{system.copy}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-bold leading-6 text-ink-950">{system.outcome}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function ExpertiseMatrix() {
  return (
    <section className="section-shell" id="expertise-map">
      <Reveal className="mb-10 max-w-[760px]">
        <p className="eyebrow text-signal-600">Expertise Map</p>
        <h2 className="section-title mt-4">The practical layers behind modern product infrastructure.</h2>
      </Reveal>
      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {expertiseAreas.map((area) => (
          <StaggerItem key={area.title} className="rounded-[8px] border border-line bg-white p-7">
            <Layers3 className="mb-6 size-8 text-ink-800" strokeWidth={1.5} />
            <h3 className="text-lg font-extrabold text-ink-950">{area.title}</h3>
            <ul className="mt-5 space-y-3">
              {area.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-ink-700">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-signal-600" strokeWidth={1.8} />
                  {point}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function ExpertiseOperatingModel() {
  const bands = [
    {
      title: "Product surfaces",
      copy: "Interfaces, dashboards and workflows shaped around the people using the system every day.",
      signal: "Usability, speed, adoption"
    },
    {
      title: "Application core",
      copy: "APIs, service boundaries, data flows and business logic designed to change without chaos.",
      signal: "Contracts, tests, maintainability"
    },
    {
      title: "Platform foundation",
      copy: "Cloud, containers, release pipelines and environments that make delivery repeatable.",
      signal: "CI/CD, IaC, deployment confidence"
    },
    {
      title: "Reliability layer",
      copy: "Monitoring, logging, alerting and recovery habits that keep production understandable.",
      signal: "Observability, uptime, runbooks"
    }
  ];

  return (
    <section className="section-shell py-0">
      <Reveal className="overflow-hidden rounded-[8px] border border-line bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
          <div className="border-b border-line bg-panel/70 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <Workflow className="size-10 text-signal-600" strokeWidth={1.5} />
            <p className="eyebrow mt-8 text-signal-600">How Expertise Connects</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink-950">
              We don&apos;t treat frontend, backend and cloud as separate conversations.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink-700">
              The strongest systems are designed as one operating model: product behavior, application architecture, delivery flow and production feedback working together.
            </p>
          </div>
          <Stagger className="grid sm:grid-cols-2">
            {bands.map((band, index) => (
              <StaggerItem key={band.title} className="border-b border-line p-7 sm:p-8 sm:odd:border-r">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">Layer 0{index + 1}</span>
                <h3 className="mt-5 text-2xl font-semibold text-ink-950">{band.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-700">{band.copy}</p>
                <p className="mt-5 text-sm font-bold text-ink-950">{band.signal}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}

export function ExpertiseProof() {
  const questions = [
    "Where should product workflows end and backend policy begin?",
    "Which services need stable contracts before the next feature cycle?",
    "What belongs in Kubernetes, what belongs in managed cloud and what should stay simple?",
    "Which signals would explain production behavior before customers report it?"
  ];

  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-10 lg:grid-cols-[390px_1fr]">
        <Reveal>
          <Route className="size-10 text-ink-900" strokeWidth={1.5} />
          <p className="eyebrow mt-7 text-signal-600">Decision Quality</p>
          <h2 className="section-title mt-4">Expertise shows up in the questions we make visible early.</h2>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {questions.map((question, index) => (
            <StaggerItem key={question} className="rounded-[8px] border border-line bg-white p-7">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">Question 0{index + 1}</span>
              <p className="mt-5 text-lg font-semibold leading-8 text-ink-950">{question}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ServiceAssurance() {
  return (
    <section className="section-shell py-0">
      <Reveal className="rounded-[8px] bg-ink-950 p-7 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          <div>
            <ShieldCheck className="size-10 text-signal-400" strokeWidth={1.5} />
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.025em]">
              Every engagement leaves the system easier to own.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/76">
              We care about what happens after launch: documentation, release confidence, observability and the ability for your team to move without asking permission.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceProofPoints.map((point) => (
              <div key={point} className="border-l border-white/20 pl-5">
                <p className="text-base font-semibold leading-7">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ProcessDeliverables() {
  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <Reveal>
          <p className="eyebrow text-signal-600">What You Receive</p>
          <h2 className="section-title mt-4">Concrete outputs at every stage.</h2>
          <p className="section-copy mt-5">
            The process is deliberately plain: understand the system, make the plan visible, ship controlled increments and improve operations with evidence.
          </p>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {processDeliverables.map((item, index) => (
            <StaggerItem key={item.phase} className="rounded-[8px] border border-line bg-white p-7">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">Phase 0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-semibold text-ink-950">{item.phase}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-700">{item.output}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function OperatingStandards() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
        <Reveal>
          <p className="eyebrow text-signal-600">Operating Standards</p>
          <h2 className="section-title mt-4">The habits that make consulting work compound.</h2>
        </Reveal>
        <Stagger className="grid gap-4">
          {operatingStandards.map((standard) => (
            <StaggerItem key={standard} className="flex gap-4 rounded-[8px] border border-line bg-white p-6">
              <FileText className="mt-1 size-5 shrink-0 text-signal-600" strokeWidth={1.7} />
              <p className="text-lg font-semibold leading-7 text-ink-950">{standard}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className="section-shell py-0">
      <Reveal className="rounded-[8px] border border-line bg-white p-7 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
          <div>
            <Gauge className="size-9 text-ink-900" strokeWidth={1.5} />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink-950">Modern tools, conservative engineering judgment.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 rounded-[5px] border border-line bg-panel px-3.5 py-2 text-sm font-semibold text-ink-800">
                <TechIcon tech={tech} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function InsightEditorial() {
  return (
    <section className="section-shell border-y border-line bg-panel/60">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="rounded-[8px] bg-ink-950 p-8 text-white sm:p-10">
          <p className="eyebrow text-white/80">Field Notes</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em]">
            We write for operators, founders and engineering leads making real tradeoffs.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/76">
            Expect practical notes on architecture boundaries, service reliability, cloud cost, release strategy and the human side of maintaining software systems.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[8px] border border-line bg-white p-8 sm:p-10">
          <p className="eyebrow text-signal-600">Editorial Focus</p>
          <div className="mt-7 space-y-5">
            {["Architecture decisions", "Production readiness", "Platform engineering", "Technical leadership"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-lg font-semibold text-ink-950">{item}</span>
                <ArrowRight className="size-5 text-signal-600" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
