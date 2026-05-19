import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  arrow?: "up" | "right" | "down" | "none";
  className?: string;
  onClickCapture?: () => void;
};

export function ButtonLink({ href, children, variant = "primary", arrow = "up", className, onClickCapture }: ButtonLinkProps) {
  const Icon = arrow === "right" ? ArrowRight : arrow === "down" ? ArrowDown : ArrowUpRight;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-[6px] px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2",
        variant === "primary" && "bg-ink-950 text-white shadow-[0_16px_40px_rgba(6,18,41,0.16)] hover:bg-ink-800",
        variant === "secondary" && "border border-line bg-white text-ink-950 shadow-soft hover:border-ink-700",
        variant === "ghost" && "bg-transparent text-ink-950 hover:text-signal-600",
        className
      )}
      onClickCapture={onClickCapture}
    >
      {children}
      {arrow !== "none" ? <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </Link>
  );
}
