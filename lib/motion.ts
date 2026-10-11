import type { CSSProperties } from "react";

// Seconds for Motion; CSS values are derived here to keep one timing source.
export const motionTokens = {
  duration: { fast: 0.16, base: 0.24, entrance: 0.4 },
  ease: [0.22, 1, 0.36, 1] as const,
  distance: 10,
  stagger: 0.05
};

export const motionCssVariables = {
  "--motion-fast": `${motionTokens.duration.fast * 1000}ms`,
  "--motion-base": `${motionTokens.duration.base * 1000}ms`,
  "--motion-entrance": `${motionTokens.duration.entrance * 1000}ms`,
  "--motion-ease": `cubic-bezier(${motionTokens.ease.join(", ")})`
} as CSSProperties;
