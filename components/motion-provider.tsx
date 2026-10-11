"use client";

import { MotionConfig } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

// A static server snapshot keeps HTML visible before hydration and without JS.
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => true);
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useMotionPreference();
  return (
    <MotionConfig
      reducedMotion={reduceMotion ? "always" : "never"}
      transition={{ duration: reduceMotion ? 0 : motionTokens.duration.entrance, ease: motionTokens.ease }}
    >
      {children}
    </MotionConfig>
  );
}
