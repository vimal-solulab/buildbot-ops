import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Progressive-enhancement scroll reveal: renders fully visible by default (SSR
 * and no-JS safe), then — before first paint — hides itself if the client
 * supports motion, and fades/slides in once it enters the viewport.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    // Safety net: some environments (viewport resizes via devtools protocol,
    // odd polyfills, etc.) never fire the observer even though the element is
    // clearly on screen. Never let content get stuck permanently invisible.
    const fallback = window.setTimeout(() => setShown(true), 1500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [armed]);

  const hiddenState = armed && !shown;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${hiddenState ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
