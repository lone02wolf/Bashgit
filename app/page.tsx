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
