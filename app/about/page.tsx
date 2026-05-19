import type { Metadata } from "next";
import { OperatingStandards, TechnologySection } from "@/components/business-sections";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About"
};

const commitments = [
  "Senior engineers stay close to the work.",
  "Architecture decisions are written down and revisited.",
  "Production realities shape product decisions early.",
  "Systems are designed for the people who will maintain them."
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BashGit Labs"
        title={<>Engineering partners for teams that need systems to last.</>}
        copy="BashGit Labs is built around long-term engineering partnership: calm technical leadership, careful execution and production systems that improve over time."
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <p className="eyebrow text-signal-600">How We Work</p>
            <h2 className="section-title mt-4">We bring architecture discipline without slowing product momentum.</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item, index) => (
              <StaggerItem key={item} className="rounded-[8px] border border-line bg-white p-7">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-signal-600">Commitment 0{index + 1}</span>
                <p className="mt-5 text-xl font-semibold leading-8 text-ink-950">{item}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <OperatingStandards />
      <TechnologySection />
      <CtaBand />
    </>
  );
}
