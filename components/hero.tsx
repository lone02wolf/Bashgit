import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-white">
      <div className="site-container grid items-center gap-12 py-14 sm:py-16 lg:min-h-[600px] lg:grid-cols-[1.27fr_1fr] lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-600">Independent product engineering</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="hero-title" className="mt-6 text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-ink-950">
              <span className="block">Product engineering.</span>
              <span className="block text-ink-600">Built for production.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[510px] text-base leading-[1.75] text-ink-700 sm:text-lg">
              We build software products, backend platforms and AI-enabled systems for founders and product teams. From the first architecture decision to deployment and observability, we take responsibility for how your software works in production.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/contact" arrow="right">Discuss a project</ButtonLink>
              <ButtonLink href="#expertise" variant="ghost" arrow="down">Explore capabilities</ButtonLink>
            </div>
          </Reveal>
        </div>
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
