"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-white/80 shadow-[0_8px_30px_rgba(6,18,41,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="BashGit Labs home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-ink-900 transition hover:text-signal-600",
                pathname === item.href && "text-signal-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" className="h-11 px-6">
            Start a technical conversation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[6px] border border-line text-ink-950 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid border-t border-line bg-white/95 px-5 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] py-5 opacity-100" : "grid-rows-[0fr] py-0 opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[6px] px-3 py-3 text-base font-semibold text-ink-950 transition hover:bg-panel"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href="/contact" className="mt-4 w-full" onClickCapture={() => setOpen(false)}>
            Start a technical conversation
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
