import type { Metadata } from "next";
import { ContactPanel, PageHero } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact"
};

const nextSteps = [
  "We review the product, platform or reliability context you share.",
  "We identify the highest-risk architecture and delivery questions.",
  "We propose a focused path: discovery, build engagement or reliability retainer."
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Bring the system challenge. We will map the path forward.</>}
        copy="Start a focused technical conversation about product engineering, backend systems, cloud infrastructure, Kubernetes, DevOps or reliability."
      />
      <ContactPanel />
      <section className="section-shell pt-0">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="eyebrow text-signal-600">What Happens Next</p>
            <h2 className="section-title mt-4">A practical first conversation, not a sales performance.</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {nextSteps.map((step, index) => (
              <StaggerItem key={step} className="rounded-[8px] border border-line bg-white p-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">0{index + 1}</span>
                <p className="mt-5 text-base font-semibold leading-7 text-ink-950">{step}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
