import type { Metadata } from "next";
import { ExpertiseMatrix, ExpertiseOperatingModel, ExpertiseProof, TechnologySection } from "@/components/business-sections";
import { CtaBand, PageHero, PrinciplesSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Expertise"
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Expertise"
        title={<>Practical technical depth across the product infrastructure stack.</>}
        copy="Expertise at BashGit Labs is not a menu of technologies. It is the ability to connect product behavior, backend architecture, cloud delivery and reliability into one system your team can understand and extend."
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
