import type { IconType } from "react-icons";
import { FaAws, FaBell } from "react-icons/fa";
import {
  SiArgo,
  SiGooglecloud,
  SiGrafana,
  SiGraphql,
  SiHelm,
  SiIngress,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTerraform,
  SiTypescript
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

type TechIconDef = {
  icon: IconType;
  color: string;
};

const icons: Record<string, TechIconDef | TechIconDef[]> = {
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  AWS: { icon: FaAws, color: "#FF9900" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: VscAzure, color: "#0078D4" },
  "AWS / GCP": [
    { icon: FaAws, color: "#FF9900" },
    { icon: SiGooglecloud, color: "#4285F4" }
  ],
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Helm: { icon: SiHelm, color: "#0F1689" },
  ArgoCD: { icon: SiArgo, color: "#EF7B4D" },
  Ingress: { icon: SiIngress, color: "#783CBD" },
  Terraform: { icon: SiTerraform, color: "#844FBA" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Loki: { icon: SiGrafana, color: "#F46800" },
  Alerts: { icon: FaBell, color: "#0C70FF" }
};

export function TechIcon({ tech }: { tech: string }) {
  const def = icons[tech];

  if (Array.isArray(def)) {
    return (
      <span className="inline-flex shrink-0 items-center gap-0.5">
        {def.map(({ icon: Icon, color }) => (
          <Icon key={color} className="size-4" style={{ color }} aria-hidden="true" />
        ))}
      </span>
    );
  }

  if (def) {
    const Icon = def.icon;
    return <Icon className="size-4 shrink-0" style={{ color: def.color }} aria-hidden="true" />;
  }

  return <span className="size-2.5 shrink-0 rounded-full bg-signal-600" aria-hidden="true" />;
}
