import { createFileRoute } from "@tanstack/react-router";
import plansImage from "@/assets/plans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildOps AI — From First Enquiry to Final Invoice" },
      {
        name: "description",
        content:
          "BuildOps AI is the AI operating system for builders, trades and field-service businesses. Estimates, jobs, crews, procurement, job costing and invoicing in one place.",
      },
      { property: "og:title", content: "BuildOps AI — From First Enquiry to Final Invoice" },
      {
        property: "og:description",
        content:
          "Run your entire contracting business on one AI-native platform, from quote to cash.",
      },
    ],
  }),
  component: Index,
});

const pipeline = [
  { n: "01", title: "Lead", sub: "Enquiries & visits" },
  { n: "02", title: "Estimate", sub: "Quantities & margin" },
  { n: "03", title: "Quote", sub: "Proposals & approvals" },
  { n: "04", title: "Plan", sub: "Crews & milestones" },
  { n: "05", title: "Deliver", sub: "Field & timesheets" },
  { n: "06", title: "Control", sub: "Variations & RFIs" },
  { n: "07", title: "Invoice", sub: "Claims & payments" },
];

const modules = [
  {
    glyph: "✓",
    tone: "accent" as const,
    title: "CRM & Sales",
    body: "Leads, customers, site visits, opportunities and a live quote-conversion pipeline.",
  },
  {
    glyph: "$",
    tone: "violet" as const,
    title: "Estimating & Quoting",
    body: "Labour, materials, equipment, subs, markups and margin targets — turned straight into jobs.",
  },
  {
    glyph: "▣",
    tone: "amber" as const,
    title: "Project & Job Mgmt",
    body: "Milestones, tasks, drawings, RFIs, defects, approvals and variations in one timeline.",
  },
  {
    glyph: "◷",
    tone: "accent" as const,
    title: "Workforce & Scheduling",
    body: "Crews, skills, availability, timesheets, job allocation and capacity at a glance.",
  },
  {
    glyph: "◈",
    tone: "violet" as const,
    title: "Procurement & Suppliers",
    body: "Purchase orders, deliveries, sub packages, pricing and committed costs tracked live.",
  },
  {
    glyph: "◔",
    tone: "amber" as const,
    title: "Job Costing & Finance",
    body: "Estimated vs actual, WIP, progress claims and live project margin for every job.",
  },
];

const toneClass: Record<"accent" | "violet" | "amber", string> = {
  accent: "bg-accent-cyan/15 text-accent-cyan",
  violet: "bg-violet/15 text-violet",
  amber: "bg-amber/15 text-amber",
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand font-sans text-ink">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-[560px] w-[560px] rounded-full bg-violet/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[520px] w-[520px] rounded-full bg-accent-cyan/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-violet/15 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan to-violet font-display text-lg font-bold text-brand">
              B
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              BuildOps <span className="text-accent-cyan">AI</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-fg md:flex">
            <a href="#platform" className="transition-colors hover:text-ink">
              Platform
            </a>
            <a href="#copilots" className="transition-colors hover:text-ink">
              AI Copilots
            </a>
            <a href="#field" className="transition-colors hover:text-ink">
              Field App
            </a>
            <a href="#command" className="transition-colors hover:text-ink">
              Command Centre
            </a>
          </nav>
          <a
            href="#cta"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Request a Demo
          </a>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-20">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-accent-cyan">
                <span className="size-1.5 animate-pulse rounded-full bg-accent-cyan" /> AI-native
                operating system
              </div>
              <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tight lg:text-6xl">
                From first enquiry to <span className="text-gradient">final invoice.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-fg">
                Run your entire contracting business on one AI-native platform — quotes, crews,
                materials, subs, variations, site updates and invoicing in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="rounded-xl bg-gradient-to-r from-accent-cyan to-violet px-6 py-3.5 font-display font-semibold text-brand transition-opacity hover:opacity-90"
                >
                  See BuildOps AI in Action →
                </a>
                <a
                  href="#cta"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium transition-colors hover:bg-white/10"
                >
                  Request a Tailored Demo
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "CRM",
                  "Estimating",
                  "Scheduling",
                  "Projects",
                  "Field App",
                  "Procurement",
                  "Job Costing",
                  "Finance",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] tracking-wider text-muted-fg uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-accent-cyan/30 via-transparent to-violet/30 blur-xl" />
                <div className="animate-floaty rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs tracking-[0.15em] text-muted-fg uppercase">
                      Operations Dashboard
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-accent-cyan">
                      <span className="size-1.5 animate-pulse rounded-full bg-accent-cyan" /> Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { v: "38", l: "Active Jobs" },
                      { v: "A$7.4M", l: "Pipeline" },
                      { v: "7", l: "Projects At Risk", tone: "text-amber" },
                      { v: "126", l: "Workers Scheduled" },
                      { v: "14", l: "Quotes Awaiting" },
                    ].map((kpi) => (
                      <div
                        key={kpi.l}
                        className="rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className={`font-display text-2xl font-bold ${kpi.tone ?? ""}`}>
                          {kpi.v}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-fg">{kpi.l}</p>
                      </div>
                    ))}
                    <div className="rounded-xl border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/15 to-violet/15 p-4">
                      <p className="font-display text-2xl font-bold text-accent-cyan">A$428K</p>
                      <p className="mt-0.5 text-[11px] text-ink/70">Ready to Invoice</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-violet/20 to-accent-cyan/10 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-violet text-[10px] font-bold text-brand">
                        AI
                      </div>
                      <span className="font-display text-sm font-semibold">
                        AI Operations Manager
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-ink/80">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" /> 3
                        projects are likely to miss their target dates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-cyan" /> 6
                        quotes can be followed up today
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" /> 2 jobs
                        projected to exceed labour budget
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet" /> 4
                        supplier deliveries may affect next week's schedule
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                        Fix Schedule →
                      </button>
                      <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                        Review Margins →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD TO CASH */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="mb-8 text-xs tracking-[0.2em] text-accent-cyan uppercase">
              One system from lead to cash
            </p>
            <div className="relative">
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
                {pipeline.map((step, i) => (
                  <div key={step.n} className="flex items-center gap-2">
                    <div className="flex min-w-[110px] flex-col items-center">
                      <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/10 font-display text-lg font-bold">
                        {step.n}
                      </div>
                      <span className="mt-3 text-sm font-medium">{step.title}</span>
                      <span className="text-[11px] text-muted-fg">{step.sub}</span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <span className="shrink-0 text-xl text-accent-cyan">→</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
              <p className="mt-4 text-center text-sm text-ink/70">
                AI flows beneath every stage <span className="text-accent-cyan">·</span> One
                customer. One job. One financial truth.
              </p>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="platform" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-accent-cyan uppercase">
                The core operating system
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Everything to run the company
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-fg">
              Six connected modules, one source of financial truth across every job.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-accent-cyan/40"
              >
                <div
                  className={`mb-4 grid size-10 place-items-center rounded-xl font-display font-bold ${toneClass[m.tone]}`}
                >
                  {m.glyph}
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted-fg">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESTIMATING COPILOT */}
        <section id="copilots" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="mb-4 text-xs tracking-[0.2em] text-accent-cyan uppercase">
                AI Estimating Copilot
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={plansImage}
                  alt="Architectural floor plan for the Smith Street fit-out"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-1/2 rounded-xl object-cover outline-1 -outline-offset-1 outline-white/5"
                />
                <span className="text-2xl text-accent-cyan">→</span>
                <div className="w-1/2 space-y-2">
                  {[
                    ["Materials", "A$182,400"],
                    ["Labour", "A$116,700"],
                    ["Subcontractors", "A$84,500"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
                    >
                      <span className="text-xs text-muted-fg">{k}</span>
                      <span className="font-display text-sm font-semibold">{v}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-lg border border-accent-cyan/30 bg-gradient-to-r from-accent-cyan/15 to-violet/15 p-3">
                    <span className="text-xs">Recommended Quote</span>
                    <span className="font-display text-base font-bold text-accent-cyan">
                      A$529,000
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-amber/30 bg-amber/10 px-3 py-2 text-xs text-amber">
                ⚠ Electrical allowance is 14% below similar completed projects.
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                  Review Electrical
                </button>
                <button className="flex-1 rounded-lg bg-gradient-to-r from-accent-cyan to-violet px-3 py-2 text-xs font-semibold text-brand transition-opacity hover:opacity-90">
                  Generate Quote
                </button>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl leading-tight font-bold tracking-tight">
                Upload the plans. Let AI build the first estimate.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-fg">
                Drop in drawings, PDF plans, scope and supplier rates. AI extracts quantities,
                builds cost-up and checks margin against your historical jobs.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["24.6%", "Projected Gross Margin", true],
                  ["3", "Margin Controls", false],
                  ["8", "Trade Quantities", false],
                ].map(([v, l, hot]) => (
                  <div key={l as string} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p
                      className={`font-display text-xl font-bold ${hot ? "text-accent-cyan" : ""}`}
                    >
                      {v}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-fg">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 font-display text-lg text-ink/90">
                Go from drawings to a commercially reviewed first estimate dramatically faster.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT MANAGER */}
        <section id="field" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-2 text-xs tracking-[0.2em] text-accent-cyan uppercase">
                  AI Project Manager
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight">
                  Know which jobs will go wrong — before the site does.
                </h2>
              </div>
              <div className="flex gap-2">
                <span className="rounded-md bg-accent-cyan/15 px-2.5 py-1 text-[11px] tracking-wider text-accent-cyan uppercase">
                  On Track
                </span>
                <span className="rounded-md bg-amber/15 px-2.5 py-1 text-[11px] tracking-wider text-amber uppercase">
                  At Risk
                </span>
                <span className="rounded-md bg-danger/15 px-2.5 py-1 text-[11px] tracking-wider text-danger uppercase">
                  Delayed
                </span>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold">Riverside Commercial Fit-Out</h3>
                    <p className="text-xs text-muted-fg">Target 18 Nov · 62% complete</p>
                  </div>
                  <span className="rounded-lg bg-danger/15 px-3 py-1.5 text-xs font-semibold text-danger">
                    🔴 Likely delay · 6 days
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Cabinetry & joinery", "Delayed", "text-amber", "bg-amber", "45%"],
                    ["Electrical rough-in", "Blocked", "text-danger", "bg-danger", "30%"],
                    ["Ceiling works", "Waiting", "text-muted-fg", "bg-violet", "10%"],
                    ["Plastering", "On track", "text-accent-cyan", "bg-accent-cyan", "70%"],
                  ].map(([label, status, tone, bar, w]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted-fg">{label}</span>
                        <span className={tone}>{status}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${bar}`} style={{ width: w }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet/20 to-accent-cyan/10 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-violet text-[10px] font-bold text-brand">
                    AI
                  </div>
                  <span className="font-display text-sm font-semibold">Recommended Recovery</span>
                </div>
                <ul className="space-y-2 text-sm text-ink/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-cyan" /> Move
                    plastering forward 2 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-cyan" />{" "}
                    Reassign Crew B to electrical
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" /> Labour
                    trending 11% over budget
                  </li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                    Apply Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMAND CENTRE */}
        <section id="command" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-accent-cyan uppercase">
                AI Commercial Command Centre
              </p>
              <h2 className="font-display text-4xl leading-tight font-bold tracking-tight">
                Ask your entire business what needs attention.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-fg">
                Which projects are losing margin? Which quotes should sales chase today? Which crews
                are over capacity next week? Site activity becomes timesheets, cost data and
                variation opportunities automatically.
              </p>
              <p className="mt-8 font-display text-lg text-ink/90">
                Don't wait until the accountant tells you which jobs lost money — know while you can
                still fix them.
              </p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                <span className="text-muted-fg">Owner · </span>Where are we leaking profit this
                month?
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-violet/20 to-accent-cyan/10 p-4">
                <p className="font-display text-lg font-bold">
                  A$86,400 <span className="text-sm font-medium text-ink/70">margin at risk</span>
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-danger" /> Project
                    Alpha — A$31K · labour 17% above estimate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" /> Project
                    Delta — A$22K · three variations unapproved
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" /> Project Nova
                    — A$18K · materials above tender allowance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet" /> Project
                    West — A$15K · subcontractor invoice variance
                  </li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                    Review Projects
                  </button>
                  <button className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/15">
                    Raise Variations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mx-auto max-w-7xl px-6 pb-20">
          <div
            className="relative overflow-hidden rounded-[28px] border border-white/10 p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(139,92,246,0.12))",
            }}
          >
            <div className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[500px] -translate-x-1/2 bg-accent-cyan/20 blur-[100px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight lg:text-5xl">
                Win more work. Deliver more jobs.{" "}
                <span className="text-gradient">Protect more margin.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-fg">
                One AI-powered operating model for the entire business. Your team builds, sells and
                manages — AI handles the operational admin around every job.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#cta"
                  className="rounded-xl bg-gradient-to-r from-accent-cyan to-violet px-7 py-4 font-display font-semibold text-brand transition-opacity hover:opacity-90"
                >
                  See BuildOps AI in Action →
                </a>
                <a
                  href="#cta"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-medium transition-colors hover:bg-white/10"
                >
                  Request a Tailored Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10">
            <div className="flex items-center gap-2.5">
              <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-violet font-display font-bold text-brand">
                B
              </div>
              <div>
                <p className="font-display text-sm font-semibold">BuildOps AI</p>
                <p className="text-[11px] text-muted-fg">
                  The AI Operating System for Modern Builders, Trades &amp; Contractors.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-muted-fg">
              Powered by APT Business Services + SoluLab
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
