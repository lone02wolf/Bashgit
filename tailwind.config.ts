import type { Config } from "tailwindcss";

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;
const neutral = Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => [step, color(`neutral-${step}`)]));
const accent = Object.fromEntries([50, 100, 300, 400, 500, 600, 700].map((step) => [step, color(`accent-${step}`)]));

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neutral, ink: neutral, accent, signal: accent,
        canvas: color("canvas"), panel: color("surface"), line: color("border"),
        // Existing artwork compatibility; not part of the new accent palette.
        ember: { 500: "#c98b2c", 400: "#e3ad55" }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      fontSize: {
        caption: ["var(--text-caption)", { lineHeight: "1.5" }],
        small: ["var(--text-small)", { lineHeight: "1.6" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        lead: ["var(--text-lead)", { lineHeight: "1.65" }],
        title: ["var(--text-title)", { lineHeight: "1.3" }],
        heading: ["var(--text-heading)", { lineHeight: "var(--leading-heading)" }],
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-heading)" }]
      },
      maxWidth: { site: "var(--container-site)", wide: "var(--container-wide)", reading: "var(--container-reading)", copy: "var(--container-copy)" },
      spacing: {
        ...Object.fromEntries([1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((step) => [step, `var(--space-${step})`])),
        section: "var(--space-section)", gutter: "var(--space-gutter)"
      },
      borderRadius: { sm: "var(--radius-sm)", control: "var(--radius-control)", card: "var(--radius-card)", panel: "var(--radius-panel)", pill: "var(--radius-pill)" },
      boxShadow: { sm: "var(--shadow-sm)", card: "var(--shadow-card)", raised: "var(--shadow-raised)", soft: "var(--shadow-raised)", diagram: "var(--shadow-raised)" },
      transitionDuration: { fast: "var(--motion-fast)", base: "var(--motion-base)", entrance: "var(--motion-entrance)" },
      transitionTimingFunction: { standard: "var(--motion-ease)" }
    }
  },
  plugins: []
};

export default config;
