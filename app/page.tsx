import {
  CtaBand,
  Hero,
  ImpactSection,
  OperatingLayer,
  PhilosophyBand,
  ProcessSection,
  ServicesPreview
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <OperatingLayer />
      <PhilosophyBand />
      <ServicesPreview />
      <ProcessSection />
      <ImpactSection />
      <CtaBand />
    </>
  );
}
