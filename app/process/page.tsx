import type { Metadata } from "next";
import { ProcessDeliverables } from "@/components/business-sections";
import { CtaBand, PageHero, ProcessSection, PrinciplesSection } from "@/components/sections";
import { LifecycleMap } from "@/components/architecture-diagram";

export const metadata: Metadata = {
  title: "Process"
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery Process"
        title={<>A visible operating model for complex engineering work.</>}
        copy="Our process turns uncertainty into architecture, architecture into delivery, and delivery into systems your team can operate with confidence."
      />
      <section className="section-shell py-10">
        <div className="rounded-[8px] bg-ink-950 p-5 sm:p-8">
          <LifecycleMap />
        </div>
      </section>
      <ProcessSection />
      <ProcessDeliverables />
      <PrinciplesSection />
      <CtaBand />
    </>
  );
}
