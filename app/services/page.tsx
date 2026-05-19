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
        title={<>Product, platform and reliability engineering for serious systems.</>}
        copy="We work across the software stack, from user-facing products and backend APIs to infrastructure, delivery automation and production observability."
      />
      <ServicesPreview intro={false} />
      <EngagementModels />
      <ServiceAssurance />
      <TechnologySection />
      <CtaBand />
    </>
  );
}
