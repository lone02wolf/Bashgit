"use client";

import { motion } from "framer-motion";
import type React from "react";
import { processSteps } from "@/data/site";

type IconProps = {
  className?: string;
};

type DiagramIcon = (props: IconProps) => React.ReactElement;

const layers: Array<{
  icon: DiagramIcon;
  title: string;
  detail: string;
  accent?: boolean;
  width: string;
}> = [
  { icon: CubeIcon, title: "User Interface", detail: "Web / Mobile / Dashboard", width: "sm:w-[68%]" },
  { icon: AppIcon, title: "Application Layer", detail: "APIs / Services / Workflows", accent: true, width: "sm:w-[82%]" },
  { icon: GearIcon, title: "Platform Layer", detail: "Kubernetes / Containers", accent: true, width: "sm:w-[74%]" },
  { icon: BarIcon, title: "Observability Layer", detail: "Monitoring / Logging / Alerts", accent: true, width: "sm:w-[72%]" }
];

const stores = [
  { icon: DatabaseIcon, label: "PostgreSQL" },
  { icon: RedisIcon, label: "Redis" },
  { icon: BucketIcon, label: "S3 / Storage" }
];

const pipeline = [
  { icon: CodeIcon, label: "Code" },
  { icon: CubeIcon, label: "Build" },
  { icon: TestIcon, label: "Test" },
  { icon: DeployIcon, label: "Deploy" },
  { icon: BarIcon, label: "Monitor" }
];

const plateMotion = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, delay }
  })
};

export function ArchitectureDiagram() {
  return (
    <div className="relative mx-auto min-h-[430px] w-full max-w-[840px] overflow-hidden rounded-[10px] bg-white/25 p-1 sm:min-h-[458px] sm:p-4">
      <div className="diagram-grid absolute inset-0 opacity-80" />
      <svg className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-signal-500" viewBox="0 0 820 468" fill="none" aria-hidden="true">
        <defs>
          <marker id="diagram-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 7 3.5 0 7Z" fill="#061229" />
          </marker>
        </defs>
        <path className="flow-line" d="M170 79 H84 V334 H174" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line slow" d="M134 153 H58 V260 H132" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.48" />
        <path className="flow-line" d="M512 80 H642 V130 H708 V170" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line slow" d="M538 160 H628 V226 H708" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line" d="M526 320 H660 V282 H708" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line slow" d="M390 96 V154" stroke="#061229" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.55" />
        <path className="flow-line" d="M390 282 V344" stroke="#061229" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.55" />
        <path className="flow-line slow" d="M390 190 V252" stroke="#061229" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.55" />
        <circle cx="84" cy="214" r="3.2" fill="#061229" />
        <circle cx="642" cy="130" r="3.2" fill="#061229" />
        <circle cx="628" cy="226" r="3.2" fill="#061229" />
        <circle cx="660" cy="282" r="3.2" fill="#061229" />
        <circle cx="390" cy="204" r="3.2" fill="#061229" />
        <circle cx="390" cy="362" r="3.2" fill="#061229" />
      </svg>

      <div className="relative z-10 grid min-h-[410px] grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_154px]">
        <div className="mx-auto flex w-full min-w-0 max-w-[620px] flex-col items-center gap-3 sm:gap-4">
          {layers.slice(0, 2).map((layer, index) => (
            <LayerPlate key={layer.title} {...layer} delay={index * 0.08} />
          ))}

          <div className="grid w-full min-w-0 grid-cols-1 gap-2 px-9 sm:grid-cols-3 sm:gap-4 sm:px-16">
            {stores.map((store, index) => {
              const Icon = store.icon;
              return (
                <motion.div
                  key={store.label}
                  variants={plateMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={0.18 + index * 0.06}
                  whileHover={{ y: -3 }}
                  className="min-w-0 rounded-[7px] border border-line bg-white p-4 text-center shadow-diagram"
                >
                  <Icon className="mx-auto mb-3 size-8 text-ink-800" />
                  <p className="text-[11px] font-bold text-ink-800 sm:text-xs">{store.label}</p>
                </motion.div>
              );
            })}
          </div>

          {layers.slice(2).map((layer, index) => (
            <LayerPlate key={layer.title} {...layer} delay={0.34 + index * 0.08} />
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.28 }}
          className="hidden self-center rounded-[9px] border border-line bg-white p-4 shadow-diagram lg:block"
        >
          <p className="mb-4 text-[11px] font-extrabold uppercase leading-4 tracking-[0.08em] text-ink-900">Delivery Pipeline</p>
          <div className="space-y-3">
            {pipeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex h-11 items-center gap-3 rounded-[5px] border border-line bg-white px-3 text-sm font-semibold text-ink-800 shadow-[0_6px_18px_rgba(6,18,41,0.04)]">
                  <Icon className="size-4 text-ink-700" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

function LayerPlate({
  icon: Icon,
  title,
  detail,
  accent,
  delay,
  width
}: {
  icon: DiagramIcon;
  title: string;
  detail: string;
  accent?: boolean;
  delay: number;
  width: string;
}) {
  return (
    <motion.div
      variants={plateMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      whileHover={{ x: 4 }}
      className={`layer-plate group relative flex min-h-[70px] w-[95%] items-center gap-4 border border-line bg-white px-5 py-4 shadow-diagram ${width} sm:min-h-[74px] sm:px-8`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-[6px] border border-line bg-white">
        <Icon className={accent ? "size-7 text-signal-600" : "size-7 text-ink-800"} />
      </span>
      <span>
        <span className="block text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink-950">{title}</span>
        <span className="mt-1 block text-xs font-medium text-ink-700">{detail}</span>
      </span>
      <motion.span
        className="absolute right-5 top-1/2 size-1.5 rounded-full bg-signal-500"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 2.6, repeat: Infinity, delay }}
      />
    </motion.div>
  );
}

export function LifecycleMap({ compact = false }: { compact?: boolean }) {
  const points = [
    { label: "Diagnose", x: 10, y: 63 },
    { label: "Architect", x: 30, y: 51 },
    { label: "Build", x: 50, y: 39 },
    { label: "Operate", x: 68, y: 31 },
    { label: "Evolve", x: 88, y: 44 }
  ];

  return (
    <div className={compact ? "relative h-[210px] overflow-hidden rounded-[8px]" : "relative h-[250px] overflow-hidden rounded-[8px]"}>
      <div className="topology-lines absolute inset-0 opacity-65" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 240" fill="none" aria-hidden="true">
        <path d="M24 170 C124 114 176 150 268 118 S406 72 500 112 S566 156 604 104" stroke="#8fb7ef" strokeWidth="1" opacity="0.26" />
        <path d="M24 194 C126 126 190 194 300 134 S448 116 604 164" stroke="#8fb7ef" strokeWidth="1" opacity="0.2" />
        <motion.path
          className="flow-line bright"
          d="M48 150 C112 118 144 128 190 124 S272 103 310 94 S392 73 430 82 S520 122 570 100"
          stroke="#1681ff"
          strokeWidth="2.4"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0.6 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
      </svg>
      {points.map((point, index) => (
        <motion.div
          key={point.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={`absolute ${compact && index === 3 ? "hidden sm:block" : ""}`}
          style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <span className="mb-2 block text-center text-xs font-semibold text-white/90">{point.label}</span>
          <span className="relative grid size-9 place-items-center rounded-full border border-white/40 bg-white/15 shadow-[0_0_0_7px_rgba(24,120,255,0.12)] backdrop-blur">
            <span className="size-3 rounded-full bg-white" />
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function CubeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="m12 3 7 4v8l-7 4-7-4V7l7-4Z" />
      <path d="M5 7.2 12 11l7-3.8M12 11v8" />
    </svg>
  );
}

function AppIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12V8.6a3.2 3.2 0 1 1 3.2 3.2H8Z" />
      <path d="M16 12V8.6a3.2 3.2 0 1 0-3.2 3.2H16Z" />
      <path d="M8 12v3.4a3.2 3.2 0 1 0 3.2-3.2H8Z" />
      <path d="M16 12v3.4a3.2 3.2 0 1 1-3.2-3.2H16Z" />
    </svg>
  );
}

function GearIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.8 14 5l3-.6.9 2.9-2.2 1.6.1 3 2.1 1.7-.9 2.9-3-.5-2 2.2-2-2.2-3 .5-.9-2.9 2.1-1.7.1-3-2.2-1.6.9-2.9 3 .6 2-2.2Z" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  );
}

function BarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V5M4 19h17" />
      <path d="M8 16v-4M12 16V8M16 16v-7" />
      <path d="m7.5 9.5 3 2.5 3.5-5 4 3" />
    </svg>
  );
}

function DatabaseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function RedisIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="m12 4 7 3.6-7 3.6-7-3.6L12 4Z" />
      <path d="m5 12 7 3.6 7-3.6M5 16.5l7 3.6 7-3.6" />
    </svg>
  );
}

function BucketIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <ellipse cx="12" cy="6" rx="5" ry="2.4" />
      <path d="m7 6 1 13c.2 1.4 7.8 1.4 8 0l1-13" />
    </svg>
  );
}

function CodeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  );
}

function TestIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10M7 20h10M9 4c0 4 6 4 6 8s-6 4-6 8M15 4c0 4-6 4-6 8s6 4 6 8" />
    </svg>
  );
}

function DeployIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M8 17h8M16.6 8.4 7.4 15.6" />
    </svg>
  );
}
