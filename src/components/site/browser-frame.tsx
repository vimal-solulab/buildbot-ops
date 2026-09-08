import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

/** Realistic browser-chrome wrapper used to frame product/dashboard mockups. */
export function BrowserFrame({
  children,
  title = "app.buildopsai.com",
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 truncate rounded-md border border-line bg-surface px-3 py-1 text-center font-mono text-[11px] text-ink-muted">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}
