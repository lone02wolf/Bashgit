export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={`size-8 text-ink-950 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4.2 32.8 11.6v14.8L20 33.8 7.2 26.4V11.6L20 4.2Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
      <rect x="16" y="1.8" width="8" height="8" rx="1.8" fill="currentColor" />
      <rect x="28.2" y="8.8" width="8" height="8" rx="1.8" fill="currentColor" />
      <rect x="28.2" y="23.2" width="8" height="8" rx="1.8" fill="currentColor" />
      <rect x="16" y="30.2" width="8" height="8" rx="1.8" fill="currentColor" />
      <rect x="3.8" y="23.2" width="8" height="8" rx="1.8" fill="currentColor" />
      <rect x="3.8" y="8.8" width="8" height="8" rx="1.8" fill="currentColor" />
      <circle cx="20" cy="20" r="3.2" fill="white" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="text-xl font-semibold text-ink-950">BashGit Labs</span>
    </span>
  );
}
