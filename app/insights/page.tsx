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
        title={<>Field notes on AI, architecture, reliability and delivery.</>}
        copy="Practical thinking from the BashGit Labs operating model: how modern teams design, ship and maintain software systems under real business constraints."
        variant="dark"
      />
      <section className="section-shell">
        <InsightsList />
      </section>
      <InsightEditorial />
      <CtaBand />
    </>
  );
}
