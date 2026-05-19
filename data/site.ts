import {
  Activity,
  ArrowUpRight,
  Blocks,
  Box,
  Braces,
  Cloud,
  CloudUpload,
  Code2,
  Compass,
  Cog,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  PackageCheck,
  Radar,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/expertise", label: "Expertise" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" }
];

export const trustItems = [
  { icon: Compass, label: "Architecture-first approach" },
  { icon: Layers3, label: "Production-grade engineering" },
  { icon: PackageCheck, label: "Clean, maintainable code" },
  { icon: Network, label: "Long-term partnership" }
];

export const operatingLayers = [
  {
    title: "Product Layer",
    items: ["Interfaces", "Workflows", "User Journeys"],
    icon: Blocks
  },
  {
    title: "Application Layer",
    items: ["APIs", "Services", "Business Logic"],
    icon: Workflow
  },
  {
    title: "Data Layer",
    items: ["Databases", "Cache", "Storage"],
    icon: Database
  },
  {
    title: "Infrastructure Layer",
    items: ["Cloud", "Containers", "Networking"],
    icon: Cloud
  },
  {
    title: "Reliability Layer",
    items: ["Monitoring", "Logging", "Backups"],
    icon: LineChart
  }
];

export const philosophy = [
  {
    icon: Box,
    title: "Architecture before acceleration",
    copy: "We design the right foundation before writing the first line of code."
  },
  {
    icon: GitBranch,
    title: "Reliability before scale",
    copy: "We build for stability, observability and long-term maintainability."
  },
  {
    icon: Layers3,
    title: "Maintainability before speed",
    copy: "Clean code, clear structure and strong engineering practices."
  },
  {
    icon: ServerCog,
    title: "Infrastructure as a product",
    copy: "We treat infrastructure, CI/CD and monitoring as core product layers."
  },
  {
    icon: ShieldCheck,
    title: "Partnership over projects",
    copy: "We stay with you beyond launch to support growth and evolution."
  }
];

export const services = [
  {
    icon: Box,
    title: "Product Engineering",
    copy: "Web applications, dashboards, SaaS platforms and internal tools built for performance, usability and growth.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    copy: "Robust APIs and backend systems with clean architecture, authentication and reliable integrations.",
    tags: ["NestJS", "Node.js", "GraphQL", "PostgreSQL"]
  },
  {
    icon: Cog,
    title: "Platform Engineering",
    copy: "Container orchestration, environment management and platform engineering for scalable systems.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Ingress"]
  },
  {
    icon: CloudUpload,
    title: "Cloud & DevOps",
    copy: "Cloud architecture, CI/CD and automation that help your teams ship faster and operate with confidence.",
    tags: ["AWS", "GCP", "Azure", "Terraform"]
  },
  {
    icon: LineChart,
    title: "Observability & Reliability",
    copy: "Monitoring, logging, alerting and incident readiness so your systems stay healthy in production.",
    tags: ["Prometheus", "Grafana", "Loki", "Alerts"]
  }
];

export const processSteps = [
  {
    icon: Radar,
    title: "Discover & Define",
    shortTitle: "Diagnose",
    copy: "We dig into your business, users and technical landscape to uncover the root problem, not just symptoms."
  },
  {
    icon: Box,
    title: "Architect & Plan",
    shortTitle: "Architect",
    copy: "We design the system architecture, data model and delivery plan with scalability and security in view."
  },
  {
    icon: Code2,
    title: "Build & Deliver",
    shortTitle: "Build",
    copy: "We build iteratively with clean code, automated tests and CI/CD so you get value early with minimal risk."
  },
  {
    icon: Activity,
    title: "Operate & Evolve",
    shortTitle: "Operate",
    copy: "We instrument, monitor and alert so your team has visibility from day one."
  },
  {
    icon: Gauge,
    title: "Optimize & Scale",
    shortTitle: "Evolve",
    copy: "We stay with you to improve performance, reliability and developer velocity over time."
  }
];

export const principles = [
  "Reliability is designed before traffic arrives.",
  "Maintainability is a feature, not a cleanup phase.",
  "Every critical system needs observability from day one.",
  "Automation should remove operational ambiguity.",
  "Delivery should be controlled, repeatable and reversible.",
  "Architecture should scale with the business, not ahead of it."
];

export const results = [
  {
    icon: ArrowUpRight,
    title: "SaaS Platform Modernization",
    copy: "Reduced infrastructure cost by 40% and improved deployment speed by 3.5x."
  },
  {
    icon: LockKeyhole,
    title: "E-commerce Scale",
    copy: "Re-architected backend services resulting in 99.99% uptime during peak traffic and 2x performance improvement."
  },
  {
    icon: Zap,
    title: "DevOps Automation",
    copy: "Implemented CI/CD and infrastructure as code, reducing manual work by 70% and release time by 60%."
  }
];

export const insights = [
  {
    category: "Architecture",
    title: "Designing backend systems that can be changed without drama",
    excerpt: "A practical look at boundaries, contracts and deployment habits that keep product teams moving.",
    date: "May 2026",
    readTime: "7 min read"
  },
  {
    category: "Reliability",
    title: "Observability is a product capability",
    excerpt: "Dashboards and alerts are useful, but the real advantage is designing systems that explain themselves.",
    date: "April 2026",
    readTime: "6 min read"
  },
  {
    category: "Platform",
    title: "When Kubernetes helps and when it quietly taxes the team",
    excerpt: "How to evaluate orchestration through operational maturity, release cadence and ownership.",
    date: "March 2026",
    readTime: "8 min read"
  }
];

export const techStack = ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS / GCP", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Loki"];

export const engagementModels = [
  {
    title: "Product Build Partner",
    copy: "For teams turning a validated idea into a production product. We own architecture, core implementation, release flow and early operational foundations.",
    fit: "Best for MVPs, internal platforms, SaaS modules and customer-facing dashboards."
  },
  {
    title: "System Modernization",
    copy: "For products carrying architectural debt, fragile deployments or slow backend workflows. We map constraints, replace risky parts and keep the business moving.",
    fit: "Best for API redesigns, database boundaries, cloud moves and legacy service cleanup."
  },
  {
    title: "Platform & Reliability Retainer",
    copy: "For teams that need senior infrastructure support without building a full platform group. We improve environments, delivery, observability and incident readiness.",
    fit: "Best for Kubernetes, CI/CD, monitoring, cost control and production hardening."
  }
];

export const expertiseAreas = [
  {
    title: "Product Surfaces",
    points: ["SaaS applications", "Admin and operations dashboards", "Workflow-heavy internal tools", "Design system aligned interfaces"]
  },
  {
    title: "Backend Foundations",
    points: ["REST and GraphQL APIs", "Authentication and authorization", "Service boundaries", "PostgreSQL and Redis architecture"]
  },
  {
    title: "Cloud Platforms",
    points: ["AWS and GCP environments", "Kubernetes and container delivery", "Infrastructure as code", "Secrets and configuration strategy"]
  },
  {
    title: "Reliability Systems",
    points: ["Metrics, logs and traces", "Alerting and runbooks", "Backup and recovery paths", "Performance and capacity reviews"]
  }
];

export const serviceProofPoints = [
  "Architecture documents your team can actually use",
  "Production-ready repositories with CI, testing and release checks",
  "Observable systems with practical dashboards and alerts",
  "Clear ownership boundaries for product, application, data and infrastructure",
  "Senior review on security, reliability and long-term maintainability"
];

export const processDeliverables = [
  {
    phase: "Discovery",
    output: "System map, business constraints, risk register and decision log"
  },
  {
    phase: "Architecture",
    output: "Target architecture, data model, interface contracts and delivery sequence"
  },
  {
    phase: "Delivery",
    output: "Working increments, tests, CI/CD, release notes and operational visibility"
  },
  {
    phase: "Operate",
    output: "Dashboards, alerts, runbooks, cost review and continuous improvement backlog"
  }
];

export const operatingStandards = [
  "Every important decision has context, owner and tradeoff documented.",
  "Every production path has logs, metrics or traces that help explain behavior.",
  "Every deployment path should be repeatable by the team, not only by us.",
  "Every handoff includes enough detail for future engineers to extend the system."
];

export const SparklesIcon = Sparkles;
export const RouteIcon = Route;
