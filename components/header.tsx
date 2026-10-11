"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }} className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between">
        <Link href="/" aria-label="BashGit Labs home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="ml-auto mr-10 hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "flex min-h-11 items-center text-sm font-medium text-ink-700 transition-colors duration-fast hover:text-ink-950",
                pathname === item.href && "text-signal-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" arrow="right" className="h-11 px-5">
            Discuss a project
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="navigation-toggle grid size-11 place-items-center rounded-control border border-line text-ink-950 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full grid border-b border-line bg-white px-gutter shadow-sm transition-[grid-template-rows,opacity,visibility] duration-fast ease-standard lg:hidden",
          open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-[6px] px-3 py-3 text-base font-semibold text-ink-950 transition hover:bg-panel"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href="/contact" arrow="right" className="mb-5 mt-4 w-full" onClickCapture={() => setOpen(false)}>
            Discuss a project
          </ButtonLink>
        </div>
      </div>
      <noscript>
        <style>{".navigation-toggle { display: none; }"}</style>
        <nav aria-label="Mobile navigation" className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line px-gutter py-3 text-sm lg:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Discuss a project</Link>
        </nav>
      </noscript>
    </header>
  );
}
