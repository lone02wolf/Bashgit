import type { Metadata } from "next";
import { InsightEditorial } from "@/components/business-sections";
import { CtaBand, InsightsList, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Insights"
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Technical field notes on architecture, reliability and delivery.</>}
        copy="Practical thinking from the BashGit Labs operating model: how modern teams design, ship and maintain software systems under real business constraints."
      />
      <section className="section-shell">
        <InsightsList />
      </section>
      <InsightEditorial />
      <CtaBand />
    </>
  );
}
