"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useMotionPreference } from "@/components/motion-provider";

// Preserve the existing scroll feel for Phase 1, with a live accessibility opt-out.
export function SmoothScroll() {
  const reduceMotion = useMotionPreference();
  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);
  return null;
}
