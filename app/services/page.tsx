import type { Metadata } from "next";
import { EngagementModels, ServiceAssurance, TechnologySection } from "@/components/business-sections";
import { CtaBand, PageHero, ServicesPreview } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Services"
        title={<>Product, platform and reliability engineering for serious B2B systems.</>}
        copy="We help teams build the software layer, backend foundation and cloud operating model they need before growth makes fragile architecture expensive."
      />
      <ServicesPreview intro={false} />
      <EngagementModels />
      <ServiceAssurance />
      <TechnologySection />
      <CtaBand />
    </>
  );
}
