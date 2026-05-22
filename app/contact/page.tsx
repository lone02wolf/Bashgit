import type { Metadata } from "next";
import { ContactPanel, PageHero } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact a Software Development Company in Jaipur",
  description:
    "Contact BashGit Labs in Jaipur, India for software development, AI workflow development, backend engineering, cloud platforms and reliability work.",
  alternates: {
    canonical: "/contact"
  }
};

const nextSteps = [
  "We review the ambition, workflow, product or platform context you share.",
  "We identify the highest-leverage architecture, AI, delivery and reliability questions.",
  "We propose a focused next move: discovery, build engagement, modernization or reliability retainer."
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Bring the ambition. We will map the system it needs.</>}
        copy="Start a practical conversation with a Jaipur-based software engineering studio about the product, AI workflow, platform or reliability challenge you want to turn into a durable operating advantage."
        variant="dark"
      />
      <ContactPanel />
      <section className="section-shell pt-0">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="eyebrow text-signal-600">What Happens Next</p>
            <h2 className="section-title mt-4">A useful first conversation, not a sales performance.</h2>
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
