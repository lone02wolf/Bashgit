export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={`size-8 text-ink-950 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="38" height="38" rx="12" fill="currentColor" />
      <path
        d="M16 15.5 23.5 23 16 30.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 32h8"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M27.5 16.5h2.75A6.75 6.75 0 0 1 37 23.25v2.25"
        stroke="#4D9BFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="27.5" cy="16.5" r="3.5" fill="#4D9BFF" />
      <circle cx="37" cy="26.5" r="3.5" fill="#4D9BFF" />
      <circle cx="37" cy="26.5" r="1.35" fill="white" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="size-9" />
      <span className="flex items-baseline gap-1.5 text-ink-950">
        <span className="text-xl font-extrabold tracking-[-0.035em]">BashGit</span>
        <span className="text-lg font-semibold tracking-[-0.025em] text-ink-700">Labs</span>
      </span>
    </span>
  );
}
