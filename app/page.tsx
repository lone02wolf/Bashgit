import type { Metadata } from "next";
import {
  CtaBand,
  Hero,
  ImpactSection,
  OperatingLayer,
  PhilosophyBand,
  ProcessSection,
  ServicesPreview
} from "@/components/sections";
import { LabSystemsSection } from "@/components/business-sections";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <OperatingLayer />
      <PhilosophyBand />
      <ServicesPreview />
      <LabSystemsSection />
      <ProcessSection />
      <ImpactSection />
      <CtaBand />
    </>
  );
}
