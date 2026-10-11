import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, "children"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  arrow?: "up" | "right" | "down" | "none";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", arrow = "up", className, ...props }: ButtonLinkProps) {
  const Icon = arrow === "right" ? ArrowRight : arrow === "down" ? ArrowDown : ArrowUpRight;

  return (
    <Link
      href={href}
      className={cn(
        "button",
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        variant === "ghost" && "button-ghost",
        className
      )}
      {...props}
    >
      {children}
      {arrow !== "none" ? <Icon aria-hidden="true" className="button-icon size-4" data-direction={arrow} /> : null}
    </Link>
  );
}
