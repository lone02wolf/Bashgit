"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import { useMotionPreference } from "@/components/motion-provider";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useMotionPreference();
  return (
    <motion.div
      {...props}
      initial={false}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.88, 1], y: [motionTokens.distance, 0] }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduceMotion ? 0 : motionTokens.duration.entrance, delay: reduceMotion ? 0 : Math.min(delay, 0.15), ease: motionTokens.ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useMotionPreference();
  return (
    <motion.div
      initial={false}
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ show: { transition: { staggerChildren: reduceMotion ? 0 : motionTokens.stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useMotionPreference();
  return (
    <motion.div
      initial={false}
      variants={{
        show: {
          opacity: reduceMotion ? 1 : [0.88, 1],
          y: reduceMotion ? 0 : [motionTokens.distance, 0],
          transition: { duration: reduceMotion ? 0 : motionTokens.duration.entrance, ease: motionTokens.ease }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
