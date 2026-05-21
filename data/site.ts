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
  { icon: Compass, label: "Founder-led technical strategy" },
  { icon: Layers3, label: "Product, AI, cloud and reliability together" },
  { icon: PackageCheck, label: "Decision artifacts from day one" },
  { icon: Network, label: "Built for long-term operating leverage" }
];

export const operatingLayers = [
  {
    title: "Product Layer",
    items: ["Interfaces", "Workflows", "Decision Journeys"],
    icon: Blocks,
    signal: "User behavior",
    output: "adopted product surface"
  },
  {
    title: "Application Layer",
    items: ["APIs", "Services", "AI Workflows"],
    icon: Workflow,
    signal: "Domain contracts",
    output: "changeable operating core"
  },
  {
    title: "Data Layer",
    items: ["Databases", "Cache", "Knowledge"],
    icon: Database,
    signal: "State integrity",
    output: "trusted data and context"
  },
  {
    title: "Infrastructure Layer",
    items: ["Cloud", "Containers", "Networking"],
    icon: Cloud,
    signal: "Runtime control",
    output: "repeatable delivery environments"
  },
  {
    title: "Reliability Layer",
    items: ["Monitoring", "Logging", "Backups"],
    icon: LineChart,
    signal: "Production feedback",
    output: "visible operating signals"
  }
];

export const philosophy = [
  {
    icon: Box,
    title: "Strategy before acceleration",
    copy: "We clarify the business problem, operating model and technical constraints before committing engineering effort."
  },
  {
    icon: GitBranch,
    title: "Reliability before scale",
    copy: "We design software, AI features and cloud systems to be observable, recoverable and maintainable."
  },
  {
    icon: Layers3,
    title: "Systems before features",
    copy: "We connect product surfaces, application logic, data, infrastructure and intelligence into one operating system."
  },
  {
    icon: ServerCog,
    title: "Automation with control",
    copy: "We use AI and automation where they remove drag, with guardrails, evaluation and human ownership."
  },
  {
    icon: ShieldCheck,
    title: "Partnership over delivery tickets",
    copy: "We stay close to outcomes, not only tasks, so the system keeps improving after launch."
  }
];

export const services = [
  {
    icon: Box,
    title: "Product Systems Engineering",
    copy: "SaaS products, dashboards and internal platforms shaped around real workflows, clear decision paths and durable frontend architecture.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Sparkles,
    title: "AI-Enabled Workflows",
    copy: "Retrieval, copilots, classification, document workflows and decision-support tools built with evaluation, security and operational controls from the start.",
    tags: ["LLM APIs", "RAG", "Vector Search", "Evaluations"]
  },
  {
    icon: Braces,
    title: "Backend & API Platforms",
    copy: "Service boundaries, API contracts, authentication, data models and integration layers designed to support product change without architectural drift.",
    tags: ["NestJS", "Node.js", "GraphQL", "PostgreSQL"]
  },
  {
    icon: Cog,
    title: "Platform Engineering",
    copy: "Practical foundations for teams that need repeatable environments, controlled releases, secure configuration and dependable delivery operations.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Ingress"]
  },
  {
    icon: CloudUpload,
    title: "Cloud & DevOps",
    copy: "Cloud architecture, infrastructure as code and CI/CD pipelines that reduce release risk, improve speed and make ownership explicit.",
    tags: ["AWS", "GCP", "Azure", "Terraform"]
  },
  {
    icon: LineChart,
    title: "Observability & Reliability",
    copy: "Metrics, logs, alerts, runbooks and recovery paths that expose product, platform and AI behavior before customers feel the cost.",
    tags: ["Prometheus", "Grafana", "Loki", "Alerts"]
  }
];

export const processSteps = [
  {
    icon: Radar,
    title: "Frame the Real Problem",
    shortTitle: "Diagnose",
    copy: "We clarify the business outcome, user behavior, technical landscape and constraints before prescribing a build."
  },
  {
    icon: Box,
    title: "Architect the Operating Model",
    shortTitle: "Architect",
    copy: "We design the product, data, AI, platform and delivery model with scalability, security and ownership in view."
  },
  {
    icon: Code2,
    title: "Build Controlled Increments",
    shortTitle: "Build",
    copy: "We ship working slices with clean code, tests, review gates and release discipline so value appears before risk compounds."
  },
  {
    icon: Activity,
    title: "Operate With Evidence",
    shortTitle: "Operate",
    copy: "We instrument product, infrastructure and AI behavior so your team can see what is happening and act with confidence."
  },
  {
    icon: Gauge,
    title: "Improve the System",
    shortTitle: "Evolve",
    copy: "We turn operational signals into a focused backlog for performance, reliability, cost and product evolution."
  }
];

export const principles = [
  "Strategy is only useful when it changes what gets built.",
  "AI belongs where it improves a workflow, not where it decorates a roadmap.",
  "Reliability is designed before traffic, users or automation arrive.",
  "Maintainability is a product feature, not a cleanup phase.",
  "Every critical path needs observability, ownership and a recovery plan.",
  "Architecture should scale with the business, not ahead of it."
];

export const results = [
  {
    icon: ClipboardCheck,
    title: "Strategic Architecture Review",
    copy: "A focused review that produces a system map, risk register, AI and automation opportunities, decision log and prioritized delivery path."
  },
  {
    icon: LockKeyhole,
    title: "Cloud Delivery Foundation",
    copy: "A production-ready base for environments, CI/CD, infrastructure as code, secrets, release checks, observability and rollback discipline."
  },
  {
    icon: Zap,
    title: "Operational Intelligence Layer",
    copy: "Dashboards, alerts, runbooks and decision signals that help teams understand the system before risk becomes expensive."
  }
];

export const insights = [
  {
    category: "AI Systems Guide",
    title: "AI features need operating discipline, not just model access",
    excerpt: "How to design retrieval, evaluation, cost controls and human review around AI workflows that matter.",
    date: "May 2026",
    readTime: "7 min read"
  },
  {
    category: "Architecture Guide",
    title: "Designing backend systems that can change without drama",
    excerpt: "A practical look at boundaries, contracts and deployment habits that keep product teams moving without compounding debt.",
    date: "May 2026",
    readTime: "7 min read"
  },
  {
    category: "Reliability Guide",
    title: "Observability is a product capability",
    excerpt: "Dashboards and alerts are useful, but the real advantage is designing systems that explain themselves.",
    date: "April 2026",
    readTime: "6 min read"
  }
];

export const techStack = ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "LLM APIs", "RAG", "Vector Search", "Evaluations", "AWS / GCP", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Loki"];

export const engagementModels = [
  {
    title: "Founder-Led Product Build",
    copy: "For teams turning a strategic workflow into a production-grade product. We own architecture, core implementation, release flow and the early operating foundation.",
    fit: "Best for B2B SaaS products, internal platforms, AI-enabled workflows and workflow-heavy tools."
  },
  {
    title: "System Modernization",
    copy: "For products carrying architectural debt, fragile deployments, weak data boundaries or slow operating workflows. We isolate risk and replace the parts blocking momentum.",
    fit: "Best for API redesigns, data and AI readiness, cloud moves and legacy service cleanup."
  },
  {
    title: "Platform & Reliability Retainer",
    copy: "For teams that need senior operating leverage without building a full platform group. We improve environments, delivery, observability, automation and incident readiness.",
    fit: "Best for CI/CD, cloud operations, monitoring, AI workflow controls, cost discipline and production hardening."
  }
];

export const labSystems = [
  {
    icon: Rocket,
    title: "BashGit Launch Base",
    copy: "A reusable production foundation for serious product builds: repository structure, auth-ready backend, data model, CI/CD, environments and deployment hygiene.",
    outcome: "A faster path from strategic idea to reliable first release."
  },
  {
    icon: ShieldCheck,
    title: "Reliability Review Kit",
    copy: "A structured review model for logging, metrics, alerts, backups, runbooks, ownership, AI behavior and incident readiness.",
    outcome: "Clear visibility into what can fail, what matters and what to fix first."
  },
  {
    icon: ArrowUpRight,
    title: "AI Operating Blueprint",
    copy: "A pragmatic plan for retrieval, model integration, evaluation, data boundaries, observability and human review in production workflows.",
    outcome: "Useful automation without turning the product into an uncontrolled experiment."
  }
];

export const expertiseAreas = [
  {
    title: "Product Strategy & Surfaces",
    points: ["SaaS applications", "Admin and operations dashboards", "Workflow-heavy internal tools", "Decision-led interface systems"]
  },
  {
    title: "AI & Automation Systems",
    points: ["LLM API integration", "Retrieval and knowledge workflows", "Evaluation and guardrails", "Human-in-the-loop operations"]
  },
  {
    title: "Data & Knowledge Systems",
    points: ["Data modeling and ownership", "Vector-ready knowledge stores", "Governed access patterns", "Operational reporting foundations"]
  },
  {
    title: "Backend Foundations",
    points: ["REST and GraphQL APIs", "Authentication and authorization", "Service boundaries", "PostgreSQL, Redis and data contracts"]
  },
  {
    title: "Cloud Platforms",
    points: ["AWS and GCP environments", "Kubernetes and container delivery", "Infrastructure as code", "Secrets and configuration strategy"]
  },
  {
    title: "Reliability Systems",
    points: ["Metrics, logs and traces", "Alerting and runbooks", "AI and workflow observability", "Performance and capacity reviews"]
  }
];

export const serviceProofPoints = [
  "Strategy and architecture documents your team can actually use",
  "Production-ready repositories with CI, testing, evaluation and release checks",
  "Observable systems with practical dashboards, alerts and operating signals",
  "Clear ownership boundaries for product, application, AI, data and infrastructure",
  "Senior review on security, reliability, cost and long-term maintainability"
];

export const processDeliverables = [
  {
    phase: "Discovery",
    output: "System map, business constraints, AI opportunities, risk register and decision log"
  },
  {
    phase: "Architecture",
    output: "Target architecture, data model, AI workflow boundaries, interface contracts and delivery sequence"
  },
  {
    phase: "Delivery",
    output: "Working increments, tests, evaluations, CI/CD, release notes and operational visibility"
  },
  {
    phase: "Operate",
    output: "Dashboards, alerts, runbooks, cost review, model behavior review and continuous improvement backlog"
  }
];

export const operatingStandards = [
  "Every important decision has context, owner and tradeoff documented.",
  "Every AI-enabled workflow has purpose, evaluation, guardrails and a rollback path.",
  "Every production path has logs, metrics or traces that explain behavior.",
  "Every handoff includes enough detail for future engineers to extend the system."
];

export const SparklesIcon = Sparkles;
export const RouteIcon = Route;
