import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#copilots", label: "AI Copilots" },
  { href: "#field", label: "Field App" },
  { href: "#command", label: "Command Centre" },
];

export function SiteNav({ demoMailto }: { demoMailto: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(href: string) {
    setMobileNavOpen(false);
    // Radix's sheet close animation holds a scroll lock for ~300ms; a same-tick
    // scrollIntoView() during that window is silently dropped, so defer past it.
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy font-display text-sm font-bold text-navy-ink">
            B
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            BuildOps <span className="text-orange">AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[13.5px] font-medium text-ink-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={demoMailto}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[13px] font-semibold text-navy-ink transition-colors hover:bg-ink sm:inline-flex"
          >
            Request a Demo
            <ArrowRight className="size-3.5" />
          </a>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-ink transition-colors hover:bg-surface-2 md:hidden"
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-line bg-surface text-ink sm:max-w-xs"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-ink">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(link.href);
                    }}
                    className="rounded-lg px-3 py-2.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileNavOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-orange px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  See BuildOps AI in Action
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-full border border-line bg-surface px-4 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-surface-2"
                >
                  Request a Tailored Demo
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
