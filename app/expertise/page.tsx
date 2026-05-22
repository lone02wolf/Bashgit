import type { Metadata } from "next";
import { ExpertiseMatrix, ExpertiseOperatingModel, ExpertiseProof, TechnologySection } from "@/components/business-sections";
import { CtaBand, PageHero, PrinciplesSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Software, AI & Cloud Engineering Expertise",
  description:
    "Technical expertise across product engineering, AI automation, backend development, cloud platforms and reliability for teams in Jaipur, India and beyond.",
  alternates: {
    canonical: "/expertise"
  }
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Expertise"
        title={<>Practical technical depth across product, AI, backend, cloud and reliability.</>}
        copy="Expertise at BashGit Labs is not a menu of tools. It is the ability to connect business intent, product behavior, AI workflows, service boundaries, delivery flow and production feedback into one system your team can understand and extend."
        variant="dark"
      />
      <ExpertiseOperatingModel />
      <ExpertiseMatrix />
      <ExpertiseProof />
      <TechnologySection />
      <PrinciplesSection />
      <CtaBand />
    </>
  );
}
