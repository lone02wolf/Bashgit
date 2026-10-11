"use client";

import { motion } from "framer-motion";
import { Activity, Braces, Database, PanelsTopLeft, Workflow } from "lucide-react";
import { useMotionPreference } from "@/components/motion-provider";
import { motionTokens } from "@/lib/motion";

const systemNodes = [
  { key: "interface", title: "Product Interface", detail: "Web apps & user workflows", icon: PanelsTopLeft },
  { key: "backend", title: "Backend / API", detail: "Domain logic & integrations", icon: Braces },
  { key: "data", title: "Data", detail: "Storage & retrieval", icon: Database },
  { key: "ai", title: "AI Workflow", detail: "Context & evaluations", icon: Workflow },
  { key: "operations", title: "Deployment / Observability", detail: "Releases, metrics & logs", icon: Activity }
];

export function ArchitectureDiagram() {
  const reduceMotion = useMotionPreference();
  return (
    <figure className="production-system" aria-labelledby="system-caption" aria-describedby="system-description">
      <figcaption id="system-caption" className="flex items-center justify-between gap-3 border-b border-line pb-4 text-xs text-ink-600">
        <span>Illustrative system architecture</span>
        <span aria-hidden="true" className="font-mono text-ink-500">01—05</span>
      </figcaption>
      <p id="system-description" className="sr-only">
        The product interface connects to a backend API, which connects to data and AI workflows.
        Deployment and observability support the whole system. This is an illustration, not a client deployment.
      </p>
      <div className="system-nodes">
        <svg className="system-connectors" viewBox="0 0 400 354" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {["M200 66V96", "M200 162V177H95V192", "M200 177H305V192", "M95 258V273H200V288", "M305 258V273H200"].map((d, index) => (
            <motion.path key={d} d={d} stroke="currentColor" strokeWidth="1.25"
              initial={false}
              whileInView={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: [0, 1], opacity: [0.4, 1] }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : motionTokens.duration.entrance, delay: reduceMotion ? 0 : index * motionTokens.stagger, ease: motionTokens.ease }}
            />
          ))}
        </svg>
        {systemNodes.map(({ key, title, detail, icon: Icon }, index) => (
          <motion.div key={key} className={`system-node system-node--${key}`}
            initial={false}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.8, 1], y: [6, 0] }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : motionTokens.duration.entrance, delay: reduceMotion ? 0 : index * motionTokens.stagger, ease: motionTokens.ease }}
          >
            <Icon aria-hidden="true" className="size-[18px] shrink-0 text-ink-600" strokeWidth={1.5} />
            <div className="min-w-0">
              <p className="text-sm font-medium leading-5 text-ink-950">{title}</p>
              <p className="mt-0.5 text-xs leading-5 text-ink-600">{detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </figure>
  );
}

export function LifecycleMap({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useMotionPreference();
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
            initial={false}
            animate={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: [0, 0, 1, 1, 0], opacity: [0.3, 0.3, 1, 1, 0.3] }}
            transition={reduceMotion ? { duration: 0 } : {
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
