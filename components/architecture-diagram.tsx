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
  meta: string;
  signal: string;
  accent?: boolean;
  width: string;
}> = [
  { icon: CubeIcon, title: "Product Surface", detail: "Web app / Admin / Workflows", meta: "UX contracts", signal: "Adoption", width: "sm:w-[70%]" },
  { icon: AppIcon, title: "Service Core", detail: "APIs / Auth / Domain logic", meta: "Boundaries", signal: "Change speed", accent: true, width: "sm:w-[84%]" },
  { icon: GearIcon, title: "Cloud Runtime", detail: "Containers / IaC / Secrets", meta: "Repeatability", signal: "Release safety", accent: true, width: "sm:w-[78%]" },
  { icon: BarIcon, title: "Reliability Plane", detail: "Metrics / Logs / Alerts", meta: "Signals", signal: "Incident control", accent: true, width: "sm:w-[74%]" }
];

const stores = [
  { icon: DatabaseIcon, label: "PostgreSQL", detail: "source of truth" },
  { icon: RedisIcon, label: "Redis", detail: "cache / queues" },
  { icon: BucketIcon, label: "Object Store", detail: "files / backups" }
];

const pipeline = [
  { icon: CodeIcon, label: "Code" },
  { icon: CubeIcon, label: "Build" },
  { icon: TestIcon, label: "Test" },
  { icon: DeployIcon, label: "Deploy" },
  { icon: BarIcon, label: "Monitor" }
];

const reviewSignals = ["risk register", "release checks", "runbooks", "rollback path"];

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
    <div className="system-surface relative mx-auto min-h-[520px] w-full max-w-[880px] overflow-hidden rounded-[8px] border border-ink-950/10 bg-ink-950 p-3 text-white shadow-[0_28px_90px_rgba(6,18,41,0.22)] sm:p-5">
      <div className="diagram-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-x-5 top-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-signal-400">BashGit System Map</p>
          <p className="mt-1 text-xs text-white/60">architecture / delivery / operations</p>
        </div>
        <div className="hidden items-center gap-2 text-[11px] font-semibold text-white/60 sm:flex">
          <span className="size-2 rounded-full bg-emerald-400" />
          production-readiness view
        </div>
      </div>
      <svg className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-signal-400" viewBox="0 0 820 520" fill="none" aria-hidden="true">
        <defs>
          <marker id="diagram-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
            <path d="M0 0 7 3.5 0 7Z" fill="#86bfff" />
          </marker>
        </defs>
        <path className="flow-line" d="M180 116 H82 V372 H178" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line slow" d="M140 196 H58 V292 H140" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.55" />
        <path className="flow-line" d="M520 116 H632 V172 H724" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" />
        <path className="flow-line slow" d="M548 205 H640 V260 H724" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.65" />
        <path className="flow-line" d="M528 372 H660 V322 H724" stroke="currentColor" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.75" />
        <path className="flow-line slow" d="M392 132 V190" stroke="#c8ddff" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.52" />
        <path className="flow-line" d="M392 324 V386" stroke="#c8ddff" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.52" />
        <path className="flow-line slow" d="M392 230 V292" stroke="#c8ddff" strokeDasharray="4 8" markerEnd="url(#diagram-arrow)" opacity="0.52" />
        <circle cx="82" cy="246" r="3.2" fill="#86bfff" />
        <circle cx="632" cy="172" r="3.2" fill="#86bfff" />
        <circle cx="640" cy="260" r="3.2" fill="#86bfff" />
        <circle cx="660" cy="322" r="3.2" fill="#86bfff" />
        <circle cx="392" cy="246" r="3.2" fill="#ffffff" opacity="0.8" />
      </svg>

      <div className="relative z-10 grid min-h-[500px] grid-cols-1 items-center gap-5 pt-14 lg:grid-cols-[1fr_178px]">
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
                  className="min-w-0 rounded-[6px] border border-white/12 bg-white/[0.07] p-4 text-center shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur"
                >
                  <Icon className="mx-auto mb-3 size-8 text-signal-300" />
                  <p className="text-[11px] font-bold text-white sm:text-xs">{store.label}</p>
                  <p className="mt-1 text-[10px] font-medium text-white/50">{store.detail}</p>
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
          className="hidden self-center rounded-[7px] border border-white/12 bg-white/[0.08] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur lg:block"
        >
          <p className="mb-4 text-[11px] font-extrabold uppercase leading-4 tracking-[0.08em] text-white/80">Delivery Pipeline</p>
          <div className="space-y-3">
            {pipeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex h-11 items-center gap-3 rounded-[5px] border border-white/10 bg-ink-900/70 px-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                  <Icon className="size-4 text-signal-300" />
                  {item.label}
                </div>
              );
            })}
          </div>
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/40">Review outputs</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {reviewSignals.map((signal) => (
                <span key={signal} className="rounded-[4px] border border-white/10 bg-white/[0.06] px-2 py-1 text-[10px] font-semibold text-white/70">
                  {signal}
                </span>
              ))}
            </div>
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
  meta,
  signal,
  accent,
  delay,
  width
}: {
  icon: DiagramIcon;
  title: string;
  detail: string;
  meta: string;
  signal: string;
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
      className={`layer-plate group relative flex min-h-[78px] w-[95%] items-center gap-4 border border-white/12 bg-white/[0.08] px-5 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.22)] backdrop-blur ${width} sm:min-h-[82px] sm:px-8`}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-[6px] border border-white/12 bg-ink-900/80">
        <Icon className={accent ? "size-7 text-signal-300" : "size-7 text-white"} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-extrabold uppercase tracking-[0.06em] text-white">{title}</span>
        <span className="mt-1 block text-xs font-medium text-white/60">{detail}</span>
        <span className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-[4px] bg-white/[0.08] px-2 py-1 text-[10px] font-bold text-white/60">{meta}</span>
          <span className="rounded-[4px] bg-signal-400/14 px-2 py-1 text-[10px] font-bold text-signal-300">{signal}</span>
        </span>
      </span>
      <motion.span
        className="absolute right-5 top-1/2 size-1.5 rounded-full bg-emerald-400"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 2.6, repeat: Infinity, delay }}
      />
    </motion.div>
  );
}

export function LifecycleMap({ compact = false }: { compact?: boolean }) {
  const points = [
    { label: "Diagnose", output: "risk map", x: 70, y: 150 },
    { label: "Architect", output: "contracts", x: 190, y: 126 },
    { label: "Build", output: "increments", x: 310, y: 104 },
    { label: "Operate", output: "signals", x: 430, y: 126 },
    { label: "Evolve", output: "backlog", x: 550, y: 150 }
  ];
  const segments = [
    { d: "M88 146 C118 139 144 134 172 130", start: 0, end: 0.18 },
    { d: "M208 123 C238 116 266 108 292 105", start: 0.18, end: 0.36 },
    { d: "M328 106 C356 110 384 118 412 123", start: 0.36, end: 0.54 },
    { d: "M448 130 C480 136 512 144 532 148", start: 0.54, end: 0.72 }
  ];

  return (
    <div className={compact ? "relative h-[210px] overflow-hidden rounded-[8px]" : "relative h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-ink-950"}>
      <div className="topology-lines absolute inset-0 opacity-65" />
      {!compact ? (
        <div className="absolute left-5 top-5 z-10">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-signal-300">Delivery operating model</p>
          <p className="mt-1 text-xs text-white/60">from unknowns to owned systems</p>
        </div>
      ) : null}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 320" fill="none" role="img" aria-label="Progress path from Diagnose to Evolve">
        <path d="M36 202 C140 172 230 172 310 150 S486 126 584 172" stroke="#8fb7ef" strokeWidth="1" opacity="0.24" />
        {segments.map((segment) => (
          <motion.path
            key={segment.d}
            d={segment.d}
            stroke="#4d9bff"
            strokeWidth="2.4"
            strokeDasharray="4 8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0.3, 0.3, 1, 1, 0.3] }}
            transition={{
              duration: 6,
              times: [0, segment.start, segment.end, 0.88, 1],
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        {points.map((point) => (
          <g key={point.label}>
            <text x={point.x} y={point.y - 34} textAnchor="middle" fill="#ffffff" fillOpacity="0.95" fontSize={compact ? "16" : "14"} fontWeight="800">
              {point.label}
            </text>
            <circle cx={point.x} cy={point.y} r="18" fill="#061229" stroke="rgba(255,255,255,0.38)" />
            <circle cx={point.x} cy={point.y} r="6" fill="#ffffff" />
            {!compact ? (
              <text x={point.x} y={point.y + 38} textAnchor="middle" fill="#ffffff" fillOpacity="0.72" fontSize="11" fontWeight="700">
                {point.output}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
      {!compact ? (
        <div className="absolute inset-x-5 bottom-5 grid gap-2 sm:grid-cols-4">
          {["decision log", "system map", "release path", "reliability backlog"].map((item) => (
            <div key={item} className="rounded-[5px] border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-white/60">
              {item}
            </div>
          ))}
        </div>
      ) : null}
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
