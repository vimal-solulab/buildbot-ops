import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  time?: string;
  width?: number;
  className?: string;
}

/** Realistic phone-shaped mockup used to frame the field app screens. */
export function PhoneFrame({
  children,
  time = "9:41",
  width = 260,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      style={{ width }}
      className={`relative mx-auto rounded-[2.75rem] border-[6px] border-navy bg-navy shadow-[0_35px_80px_-30px_rgba(15,23,42,0.5)] ${className}`}
    >
      <div className="relative flex aspect-[9/19] flex-col overflow-hidden rounded-[2.25rem] bg-surface">
        <div className="relative flex shrink-0 items-center justify-between px-5 pt-2.5 pb-1 text-[11px] font-semibold text-ink">
          <span>{time}</span>
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/60"
          />
          <span className="tracking-tight">100%</span>
        </div>
        <div className="min-h-0 flex-1">{children}</div>
      </div>
      <div className="absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/25" />
    </div>
  );
}
