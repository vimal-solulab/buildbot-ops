import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
  durationMs?: number;
}

/**
 * Animates a formatted numeric string (e.g. "A$7.4M", "38", "24.6%") from 0 up
 * to its target once it scrolls into view. Falls back to the plain string
 * immediately for non-numeric formats or reduced-motion users.
 */
export function CountUp({ value, className = "", durationMs = 1100 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const match = value.match(/^([^\d]*)([\d,]*\.?\d*)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    const [, prefix = "", numStr = "", suffix = ""] = match;
    if (!numStr) return;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const decimals = numStr.includes(".") ? numStr.split(".")[1]!.length : 0;
    const hasComma = numStr.includes(",");
    const format = (n: number) =>
      `${prefix}${hasComma ? n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : n.toFixed(decimals)}${suffix}`;

    setDisplay(format(0));
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(format(target * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    const fallback = window.setTimeout(() => setDisplay(value), 2000);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
