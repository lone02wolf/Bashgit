import {
  Activity,
  ArrowUpRight,
  Blocks,
  Box,
  Braces,
  ClipboardCheck,
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
  Rocket,
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
  { icon: Compass, label: "Founder-led architecture attention" },
  { icon: Layers3, label: "Backend, cloud and reliability together" },
  { icon: PackageCheck, label: "Delivery artifacts from day one" },
  { icon: Network, label: "Built for long-term product ownership" }
];

export const operatingLayers = [
  {
    title: "Product Layer",
    items: ["Interfaces", "Workflows", "User Journeys"],
    icon: Blocks,
    signal: "User behavior",
    output: "usable product surface"
  },
  {
    title: "Application Layer",
    items: ["APIs", "Services", "Business Logic"],
    icon: Workflow,
    signal: "Domain contracts",
    output: "changeable service core"
  },
  {
    title: "Data Layer",
    items: ["Databases", "Cache", "Storage"],
    icon: Database,
    signal: "State integrity",
    output: "trusted data flows"
  },
  {
    title: "Infrastructure Layer",
    items: ["Cloud", "Containers", "Networking"],
    icon: Cloud,
    signal: "Runtime control",
    output: "repeatable environments"
  },
  {
    title: "Reliability Layer",
    items: ["Monitoring", "Logging", "Backups"],
    icon: LineChart,
    signal: "Production feedback",
    output: "visible operations"
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
    copy: "SaaS modules, dashboards and internal tools designed around real workflows, clean state and maintainable frontend architecture.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    copy: "Service boundaries, API contracts, authentication, database design and integration layers built to survive product change.",
    tags: ["NestJS", "Node.js", "GraphQL", "PostgreSQL"]
  },
  {
    icon: Cog,
    title: "Platform Engineering",
    copy: "Practical platform foundations for teams that need repeatable environments, controlled releases and operational clarity.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Ingress"]
  },
  {
    icon: CloudUpload,
    title: "Cloud & DevOps",
    copy: "Cloud architecture, infrastructure as code and CI/CD pipelines that reduce manual release risk and improve team velocity.",
    tags: ["AWS", "GCP", "Azure", "Terraform"]
  },
  {
    icon: LineChart,
    title: "Observability & Reliability",
    copy: "Metrics, logs, alerts, runbooks and recovery paths that make production behavior visible before it becomes a customer problem.",
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
    icon: ClipboardCheck,
    title: "Architecture Review Sprint",
    copy: "A focused technical review that produces a system map, risk register, decision log and prioritized delivery path."
  },
  {
    icon: LockKeyhole,
    title: "Cloud Delivery Foundation",
    copy: "A production-ready base for environments, CI/CD, infrastructure as code, secrets, release checks and rollback discipline."
  },
  {
    icon: Zap,
    title: "Reliability Control Plane",
    copy: "Dashboards, alerts, runbooks and operational signals that help teams understand the system before incidents escalate."
  }
];

export const insights = [
  {
    category: "Architecture Guide",
    title: "Designing backend systems that can be changed without drama",
    excerpt: "A practical look at boundaries, contracts and deployment habits that keep product teams moving.",
    date: "May 2026",
    readTime: "7 min read"
  },
  {
    category: "Reliability Guide",
    title: "Observability is a product capability",
    excerpt: "Dashboards and alerts are useful, but the real advantage is designing systems that explain themselves.",
    date: "April 2026",
    readTime: "6 min read"
  },
  {
    category: "Platform Guide",
    title: "When Kubernetes helps and when it quietly taxes the team",
    excerpt: "How to evaluate orchestration through operational maturity, release cadence and ownership.",
    date: "March 2026",
    readTime: "8 min read"
  }
];

export const techStack = ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS / GCP", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Loki"];

export const engagementModels = [
  {
    title: "Founder-Led Product Build",
    copy: "For teams turning a validated workflow into a production-grade application. We own architecture, core implementation, release flow and early operational foundations.",
    fit: "Best for B2B SaaS modules, internal platforms, admin systems and workflow-heavy tools."
  },
  {
    title: "System Modernization",
    copy: "For products carrying architectural debt, fragile deployments or slow backend workflows. We map constraints, isolate risk and replace the parts blocking delivery.",
    fit: "Best for API redesigns, database boundaries, cloud moves and legacy service cleanup."
  },
  {
    title: "Platform & Reliability Retainer",
    copy: "For teams that need senior infrastructure support without building a full platform group. We improve environments, delivery, observability and incident readiness.",
    fit: "Best for Kubernetes, CI/CD, monitoring, cost control and production hardening."
  }
];

export const labSystems = [
  {
    icon: Rocket,
    title: "BashGit Launch Base",
    copy: "A reusable production foundation for new product builds: repository structure, auth-ready backend, CI/CD, environments and deployment hygiene.",
    outcome: "Faster path from idea to reliable first release."
  },
  {
    icon: ShieldCheck,
    title: "Reliability Review Kit",
    copy: "A structured review model for logging, metrics, alerts, backups, runbooks, ownership and incident readiness.",
    outcome: "Clear visibility into what can fail and what to fix first."
  },
  {
    icon: ArrowUpRight,
    title: "Platform Blueprint",
    copy: "Opinionated cloud and delivery patterns for teams moving toward containers, managed services and infrastructure as code.",
    outcome: "A practical architecture path without over-engineering."
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
