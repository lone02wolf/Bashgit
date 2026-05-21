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
        title={<>Product, AI, platform and reliability engineering for serious B2B systems.</>}
        copy="We help teams turn strategic workflows into software platforms, AI-enabled operating tools and cloud foundations before growth makes fragile architecture expensive."
        variant="dark"
      />
      <ServicesPreview intro={false} />
      <EngagementModels />
      <ServiceAssurance />
      <TechnologySection />
      <CtaBand />
    </>
  );
}
