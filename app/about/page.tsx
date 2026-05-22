import type { Metadata } from "next";
import { OperatingStandards, TechnologySection } from "@/components/business-sections";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Our Jaipur Software Engineering Studio",
  description:
    "BashGit Labs is a Jaipur, India based software, AI and cloud engineering studio for teams that need strategy-led technical execution.",
  alternates: {
    canonical: "/about"
  }
};

const commitments = [
  "Founder-led strategy stays close to implementation.",
  "Important decisions are written down, challenged and revisited.",
  "AI and automation are introduced only where they improve the operating model.",
  "Systems are designed for the people who will own them after launch."
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BashGit Labs"
        title={<>A focused engineering company for systems that need strategic weight.</>}
        copy="BashGit Labs is a founder-led software, AI and cloud engineering studio in Jaipur, India, built around strategic clarity, careful execution and production systems that improve over time."
        variant="dark"
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <p className="eyebrow text-signal-600">How We Work</p>
            <h2 className="section-title mt-4">We bring strategic discipline without slowing product momentum.</h2>
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
