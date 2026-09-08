import { createFileRoute } from "@tanstack/react-router";
import { Fragment, type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Calculator,
  CalendarClock,
  CalendarRange,
  Camera,
  CircleCheck,
  ClipboardCheck,
  ClipboardList,
  Clock,
  CloudUpload,
  FileText,
  GitBranch,
  HardHat,
  Inbox,
  Layers,
  Mail,
  MessageCircle,
  Mic,
  Radar,
  Receipt,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Truck,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import plansImage from "@/assets/plans.jpg";
import { SiteNav } from "@/components/site/nav";
import { Reveal } from "@/components/site/reveal";
import { BrowserFrame } from "@/components/site/browser-frame";
import { PhoneFrame } from "@/components/site/phone-frame";
import { CountUp } from "@/components/site/count-up";
import {
  PreviewCRM,
  PreviewEstimate,
  PreviewTimeline,
  PreviewCalendar,
  PreviewProcurement,
  PreviewCostChart,
} from "@/components/site/module-previews";

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

// ── One line to re-point every CTA on the page ──────────────────────────────
const CONTACT_EMAIL = "sales@solulab.com";
const DEMO_SUBJECT = "Demo Request — BuildOps AI";
const DEMO_BODY = `Hi BuildOps AI team,

I'd like to request a demo of BuildOps AI for my business.

Company name:
Team size:
Best time to connect:

Thanks!`;
const demoMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(DEMO_BODY)}`;

const pipeline = [
  { n: "01", title: "Lead", sub: "Enquiries, opportunities & site visits", icon: Inbox },
  { n: "02", title: "Estimate", sub: "Plans, quantities, labour & margin", icon: Calculator },
  { n: "03", title: "Quote", sub: "Proposals, options & approvals", icon: FileText },
  { n: "04", title: "Plan", sub: "Crews, subcontractors & milestones", icon: CalendarRange },
  { n: "05", title: "Deliver", sub: "Field activity, timesheets & updates", icon: HardHat },
  { n: "06", title: "Control", sub: "Variations, RFIs & approvals", icon: GitBranch },
  { n: "07", title: "Invoice", sub: "Progress claims & payments", icon: Receipt },
  { n: "08", title: "Analyse", sub: "Margin, productivity & performance", icon: TrendingUp },
];

const modules = [
  {
    icon: Users,
    title: "CRM & Sales",
    body: "Leads, customers, site visits, opportunities, follow-ups and a live quote-conversion pipeline.",
    preview: PreviewCRM,
  },
  {
    icon: Calculator,
    title: "Estimating & Quoting",
    body: "Labour, materials, equipment, subs, markups, contingency and margin targets — turned straight into jobs.",
    preview: PreviewEstimate,
  },
  {
    icon: ClipboardList,
    title: "Project & Job Management",
    body: "Milestones, tasks, site documents, drawings, RFIs, defects, approvals and variations.",
    preview: PreviewTimeline,
  },
  {
    icon: CalendarClock,
    title: "Workforce & Scheduling",
    body: "Employees, crews, subcontractors, skills, availability, timesheets and capacity.",
    preview: PreviewCalendar,
  },
  {
    icon: Truck,
    title: "Procurement & Suppliers",
    body: "Suppliers, purchase orders, materials, deliveries, sub packages, pricing and commitments.",
    preview: PreviewProcurement,
  },
  {
    icon: Wallet,
    title: "Job Costing & Finance",
    body: "Estimated vs actual, labour and material cost, committed cost, WIP and project margin.",
    preview: PreviewCostChart,
  },
];

const costItems = [
  ["Materials", "A$182,400"],
  ["Labour", "A$116,700"],
  ["Subcontractors", "A$84,500"],
  ["Equipment", "A$19,800"],
];

const recoverySteps = [
  "Move plastering forward by 2 days",
  "Reassign Crew B to electrical",
  "Reschedule electrical rough-in",
  "Notify client of revised critical path only if supplier date slips again",
];

const commandQuestions = [
  "Which projects are losing margin?",
  "Which quotes should sales chase today?",
  "Which jobs are likely to finish late?",
  "Which crews are over capacity next week?",
  "Which supplier delays affect our schedule?",
  "Where are we spending more labour than estimated?",
  "Which variations have been completed but not invoiced?",
  "What will cash collection look like over 30 days?",
];

const marginRisks = [
  {
    name: "Project Alpha",
    amount: "A$31K",
    note: "Labour running 17% above estimate",
    tone: "bg-danger",
  },
  {
    name: "Project Delta",
    amount: "A$22K",
    note: "Three completed variations not yet approved",
    tone: "bg-orange",
  },
  {
    name: "Project Nova",
    amount: "A$18K",
    note: "Material costs above tender allowance",
    tone: "bg-orange",
  },
  {
    name: "Project West",
    amount: "A$15K",
    note: "Subcontractor invoice variance detected",
    tone: "bg-amber",
  },
];

const quantityTypes = [
  "Rooms",
  "Doors",
  "Fixtures",
  "Materials",
  "Surface areas",
  "Equipment",
  "Trade quantities",
];

const operatingModel = [
  {
    icon: Layers,
    title: "Core Business Platform",
    tags: [
      "CRM",
      "Estimating",
      "Quoting",
      "Scheduling",
      "Projects",
      "Field Ops",
      "Procurement",
      "Job Costing",
      "Finance",
    ],
  },
  {
    icon: Bot,
    title: "AI Workforce",
    tags: [
      "Estimating Copilot",
      "Project Manager",
      "Site Agent",
      "Commercial Analyst",
      "Document AI",
      "Workflow Automation",
    ],
  },
  {
    icon: UserCog,
    title: "Human Operations",
    subtitle: "Optional APT-powered back office",
    tags: [
      "Estimate Prep",
      "Quote Admin",
      "Procurement Support",
      "Invoice Processing",
      "AP / AR",
      "Payroll Support",
      "Project Admin",
      "Financial Reconciliation",
    ],
  },
];

function AiPill({ label = "AI" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-2.5 py-1 text-[11px] font-semibold tracking-wide text-navy-ink">
      <Sparkles className="size-3" /> {label}
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-orange uppercase">
      <span className="h-px w-6 bg-orange" /> {children}
    </p>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-bg font-sans text-ink antialiased">
      <SiteNav demoMailto={demoMailto} />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_80%_0%,var(--color-orange-soft),transparent)]"
        />
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted shadow-sm">
                <span className="size-1.5 rounded-full bg-orange" /> AI-native operating system
              </div>
              <h1 className="text-balance font-display text-[3rem] leading-[1.03] font-bold tracking-tight text-ink sm:text-[3.4rem] lg:text-[3.75rem]">
                From first enquiry to <span className="text-orange">final invoice.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                Run your entire contracting business on one AI-native platform — quotes, crews,
                materials, subs, variations, site updates and invoicing in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 font-display font-semibold text-white shadow-[0_16px_32px_-14px_color-mix(in_oklab,var(--color-orange)_55%,transparent)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-14px_color-mix(in_oklab,var(--color-orange)_60%,transparent)]"
                >
                  See BuildOps AI in Action <ArrowRight className="size-4" />
                </a>
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-medium text-ink transition-colors hover:bg-surface-2"
                >
                  Request a Tailored Demo
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-2">
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
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium tracking-wide text-ink-muted uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="relative">
                <BrowserFrame title="app.buildopsai.com/dashboard">
                  <div className="p-6 sm:p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">
                        Operations Dashboard
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-success">
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                          <span className="relative inline-flex size-2 rounded-full bg-success" />
                        </span>
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        { v: "38", l: "Active Jobs" },
                        { v: "A$7.4M", l: "Pipeline" },
                        { v: "7", l: "Projects At Risk", tone: "text-danger" },
                        { v: "126", l: "Workers Scheduled" },
                        { v: "14", l: "Quotes Awaiting" },
                      ].map((kpi) => (
                        <div key={kpi.l} className="rounded-xl border border-line bg-surface-2 p-4">
                          <CountUp
                            value={kpi.v}
                            className={`font-display text-2xl font-bold ${kpi.tone ?? "text-ink"}`}
                          />
                          <p className="mt-1 text-xs text-ink-muted">{kpi.l}</p>
                        </div>
                      ))}
                      <div className="rounded-xl border border-orange/30 bg-orange-soft p-4">
                        <CountUp
                          value="A$428K"
                          className="font-display text-2xl font-bold text-orange-text"
                        />
                        <p className="mt-1 text-xs text-ink-muted">Ready to Invoice</p>
                      </div>
                    </div>
                  </div>
                </BrowserFrame>

                {/* AI panel — sits directly below the dashboard, inset slightly for depth */}
                <div className="relative mt-5 ml-4 mr-2 rounded-2xl border border-navy-line bg-navy p-5 shadow-[0_30px_60px_-24px_rgba(14,18,32,0.55)] sm:ml-10 sm:mr-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-navy-ink">
                      AI Operations Manager
                    </span>
                    <AiPill />
                  </div>
                  <ul className="space-y-2.5 text-sm text-navy-ink-muted">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" /> 3
                      projects are likely to miss their target dates
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" /> 6 quotes
                      can be followed up today
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" /> 2 jobs
                      projected to exceed labour budget
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" /> 4
                      supplier deliveries may affect next week's schedule
                    </li>
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-lg bg-orange px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90">
                      Fix Schedule →
                    </button>
                    <button className="flex-1 rounded-lg border border-navy-line bg-white/5 px-3 py-2 text-xs font-medium text-navy-ink transition-colors hover:bg-white/10">
                      Review Margins →
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEAD TO CASH */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_2px_0_0_var(--color-line)] sm:p-8">
            <Eyebrow>One system from lead to cash</Eyebrow>
            <p className="mb-9 max-w-xl font-display text-xl font-semibold text-ink">
              Stop running the business across spreadsheets, WhatsApp, accounting software and
              job-management tools.
            </p>
            <div className="relative">
              <div className="pointer-events-none absolute top-6 right-0 left-0 h-px overflow-hidden bg-line">
                <div className="h-full w-24 animate-flow-line bg-gradient-to-r from-transparent via-orange to-transparent" />
              </div>
              <div className="relative flex items-start gap-0.5 overflow-x-auto pb-2">
                {pipeline.map((step, i) => (
                  <div key={step.n} className="flex items-start">
                    <div className="group flex w-[136px] shrink-0 cursor-default flex-col items-center rounded-xl px-1 py-2 text-center transition-colors hover:bg-orange-soft">
                      <div className="grid size-12 place-items-center rounded-xl border border-line bg-surface text-ink shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:border-orange/40 group-hover:text-orange group-hover:shadow-md">
                        <step.icon className="size-5" />
                      </div>
                      <span className="mt-3 text-[11px] font-bold tracking-widest text-orange-text">
                        {step.n}
                      </span>
                      <span className="mt-1 text-sm font-semibold text-ink">{step.title}</span>
                      <span className="mt-1 text-xs leading-snug text-ink-muted">{step.sub}</span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <ArrowRight className="mt-[38px] size-4 shrink-0 text-line" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-7 border-t border-line pt-6 text-center">
              <span className="text-sm text-ink-muted">AI flows beneath every stage</span>
              <span className="mx-2 text-orange">·</span>
              <span className="font-display text-base font-semibold text-ink">
                One customer. One job. One financial truth.
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MODULES */}
      <section id="platform" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>The core operating system</Eyebrow>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Everything to run the company
              </h2>
            </div>
            <p className="max-w-sm text-sm text-ink-muted">
              Six connected modules, one source of financial truth across every job.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_24px_44px_-24px_rgba(15,23,42,0.3)]">
                <div className="mb-4 grid size-11 place-items-center rounded-xl bg-orange-soft text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <m.icon className="size-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{m.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-ink-muted">{m.body}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <m.preview />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ESTIMATING COPILOT */}
      <section id="copilots" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <BrowserFrame title="app.buildopsai.com/estimates/smith-street">
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-lg bg-surface-2 py-2.5 text-center text-[11px] font-semibold text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="size-3.5" /> Drawings + Plans + Scope
                  </span>
                  <ArrowRight className="size-3 text-line" />
                  <span className="inline-flex items-center gap-1.5 text-orange-text">
                    <Sparkles className="size-3.5 animate-pulse" /> AI Processing
                  </span>
                  <ArrowRight className="size-3 text-line" />
                  <span className="inline-flex items-center gap-1.5">
                    <Calculator className="size-3.5" /> Estimate + Margin
                  </span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-2/5">
                    <img
                      src={plansImage}
                      alt="Architectural floor plan for the Smith Street fit-out"
                      loading="lazy"
                      width={640}
                      height={640}
                      className="aspect-square w-full rounded-xl border border-line object-cover"
                    />
                    <p className="mt-2 text-center text-[10px] font-semibold tracking-wide text-ink-muted uppercase sm:text-left">
                      AI detected
                    </p>
                    <div className="mt-1 flex flex-wrap justify-center gap-1 sm:justify-start">
                      {quantityTypes.map((q) => (
                        <span
                          key={q}
                          className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 text-[9.5px] text-ink-muted"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      {costItems.map(([k, v]) => (
                        <div key={k} className="rounded-lg border border-line bg-surface-2 p-3">
                          <p className="text-xs text-ink-muted">{k}</p>
                          <p className="mt-0.5 font-display text-sm font-semibold text-ink">{v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-line bg-surface-2 p-3">
                      <span className="text-xs text-ink-muted">Contingency</span>
                      <span className="font-display text-sm font-semibold text-ink">A$21,000</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-orange/30 bg-orange-soft p-3">
                      <span className="text-xs font-medium text-ink">Recommended Quote</span>
                      <span className="font-display text-lg font-bold text-orange-text">
                        A$529,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-orange/30 bg-orange-soft px-3 py-2.5 text-xs font-medium text-ink">
                  <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-orange" />
                  Electrical allowance is 14% below similar completed projects.
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-ink transition-colors hover:bg-surface-2">
                    Review Electrical
                  </button>
                  <button className="flex-1 rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-navy-ink transition-colors hover:bg-ink">
                    Generate Quote
                  </button>
                </div>
              </div>
            </BrowserFrame>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <Eyebrow>AI Estimating Copilot</Eyebrow>
            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
              Upload the plans. Let AI build the first estimate.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
              Drop in drawings, PDF plans, scope documents and supplier rates. AI extracts
              quantities, builds the cost-up and checks margin against your historical jobs and
              target.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["24.6%", "Projected Gross Margin", true],
                ["5", "Cost Categories", false],
                ["7", "Quantity Types", false],
              ].map(([v, l, hot]) => (
                <div
                  key={l as string}
                  className="rounded-xl border border-line bg-surface p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <p
                    className={`font-display text-2xl font-bold ${hot ? "text-orange-text" : "text-ink"}`}
                  >
                    {v}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-2 font-display text-lg text-ink">
              <CloudUpload className="mt-1 size-5 shrink-0 text-orange" />
              Go from drawings to a commercially reviewed first estimate, dramatically faster.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECT MANAGER */}
      <section id="risk" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-8 shadow-sm">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <Eyebrow>AI Project Manager</Eyebrow>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                  Know which jobs will go wrong — before the site does.
                </h2>
                <p className="mt-3 max-w-lg text-sm text-ink-muted">
                  BuildOps AI continuously watches schedule, labour, deliveries, subcontractors,
                  progress, costs and weather-dependent activities.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted">
                  <span className="size-1.5 rounded-full bg-success" /> On Track
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted">
                  <span className="size-1.5 rounded-full bg-orange" /> At Risk
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted">
                  <span className="size-1.5 rounded-full bg-danger" /> Delayed
                </span>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="rounded-xl border border-line bg-surface-2 p-5 lg:col-span-3">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      Riverside Commercial Fit-Out
                    </h3>
                    <p className="text-xs text-ink-muted">Target 18 Nov · 62% complete</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-danger/10 px-3 py-1.5 text-xs font-semibold text-danger">
                    <Radar className="size-3.5" /> Likely delay · 6 days
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Cabinetry & joinery", "At risk", "text-orange-text", "bg-orange", "45%"],
                    ["Electrical rough-in", "Delayed", "text-danger", "bg-danger", "30%"],
                    ["Ceiling works", "At risk", "text-orange-text", "bg-orange", "10%"],
                    ["Plastering", "On track", "text-success", "bg-success", "70%"],
                  ].map(([label, status, tone, bar, w]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs font-medium">
                        <span className="text-ink-muted">{label}</span>
                        <span className={tone}>{status}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-line">
                        <div className={`h-full rounded-full ${bar}`} style={{ width: w }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-line bg-surface p-3.5">
                  <p className="mb-1.5 text-xs font-semibold text-ink">Primary causes</p>
                  <ul className="space-y-1 text-xs text-ink-muted">
                    <li>• Cabinetry delivery delayed</li>
                    <li>• Electrician unavailable Tuesday</li>
                    <li>• Ceiling works dependent on electrical rough-in</li>
                  </ul>
                  <p className="mt-2.5 border-t border-line pt-2.5 text-xs text-ink-muted">
                    Labour is trending{" "}
                    <span className="font-semibold text-danger">11% over budget</span> — electrical
                    rough-in productivity is below estimate.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-navy p-5 lg:col-span-2">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-navy-ink">
                    Recommended Recovery
                  </span>
                  <AiPill />
                </div>
                <ul className="space-y-2.5 text-sm text-navy-ink-muted">
                  {recoverySteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-white/10 text-[10px] font-semibold text-navy-ink">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-orange px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90">
                    Apply Schedule Changes
                  </button>
                  <button className="flex-1 rounded-lg border border-navy-line px-3 py-2 text-xs font-medium text-navy-ink transition-colors hover:bg-white/5">
                    Review Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FIELD OPERATIONS */}
      <section id="field" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow>AI Field Operations</Eyebrow>
                <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
                  Turn what's happening on site into structured data — automatically.
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-muted lg:mb-1.5">
                One mobile app for every worker and subcontractor. Job details before the job;
                voice, photos and timesheets during it; AI turns it all into business records the
                moment work finishes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4">
              {[
                { icon: ClipboardCheck, label: "Scope & drawings" },
                { icon: ShieldCheck, label: "Safety info" },
                { icon: Camera, label: "Photos & notes" },
                { icon: Clock, label: "Timesheets" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <f.icon className="size-4 shrink-0 text-orange" />
                  <span className="text-sm font-medium text-ink">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Connected 3-screen flow: JOB -> SITE UPDATE -> AI-GENERATED ACTION */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center sm:gap-3">
              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-navy-ink uppercase">
                  1 · Job
                </span>
                <PhoneFrame width={192}>
                  <div className="flex h-full flex-col px-3.5 pt-2">
                    <p className="text-[10px] font-semibold text-ink">
                      Riverside — Kitchen Fit-Out
                    </p>
                    <p className="text-[9px] text-ink-muted">Job brief</p>
                    <div className="mt-3 space-y-1.5">
                      {[
                        { icon: FileText, label: "Scope & drawings" },
                        { icon: ClipboardList, label: "Tasks" },
                        { icon: ShieldCheck, label: "Safety info" },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center gap-1.5 rounded-lg bg-surface-2 px-2 py-1.5"
                        >
                          <row.icon className="size-3 shrink-0 text-ink-muted" />
                          <span className="text-[9.5px] text-ink">{row.label}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-3 w-full rounded-lg bg-navy py-1.5 text-[9.5px] font-semibold text-navy-ink">
                      Start Job →
                    </button>
                  </div>
                </PhoneFrame>
              </div>

              <ArrowRight className="mt-16 size-5 shrink-0 rotate-90 text-line sm:rotate-0" />

              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-navy-ink uppercase">
                  2 · Site Update
                </span>
                <PhoneFrame width={192}>
                  <div className="flex h-full flex-col px-3.5 pt-2 pb-4">
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
                      <div className="relative grid size-10 shrink-0 place-items-center rounded-full bg-orange-soft text-orange">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange/40" />
                        <Mic className="relative size-4" />
                      </div>
                      <p className="text-[9.5px] font-medium text-ink-muted">Listening…</p>
                      <p className="rounded-lg bg-surface-2 p-1.5 text-[9px] leading-snug text-ink italic">
                        "Kitchen rough-in done. Two extra outlets requested. Need 4m of cable."
                      </p>
                    </div>
                    <div className="grid shrink-0 grid-cols-4 gap-1">
                      {[Camera, FileText, Clock, TriangleAlert].map((Ic, idx) => (
                        <div
                          key={idx}
                          className="grid aspect-square place-items-center rounded-md bg-surface-2 text-ink-muted"
                        >
                          <Ic className="size-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneFrame>
              </div>

              <ArrowRight className="mt-16 size-5 shrink-0 rotate-90 text-line sm:rotate-0" />

              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-orange px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                  3 · AI Action
                </span>
                <PhoneFrame width={192}>
                  <div className="flex h-full flex-col gap-2.5 px-3.5 pt-2 pb-4">
                    <p className="flex items-center gap-1.5 text-[9.5px] font-semibold tracking-wide text-ink-muted uppercase">
                      <Sparkles className="size-3 text-orange" /> AI generated
                    </p>
                    <div className="rounded-lg border border-line bg-surface-2 p-2.5">
                      <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-ink">
                        <CircleCheck className="size-3.5 text-success" /> Site Update
                      </p>
                      <ul className="space-y-0.5 text-[9.5px] text-ink-muted">
                        <li>Work completed</li>
                        <li>Timesheet recorded</li>
                        <li>Material requirement identified</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-orange/30 bg-orange-soft p-2.5">
                      <p className="text-[9px] text-ink-muted">Potential Variation</p>
                      <div className="mt-0.5 flex items-center justify-between gap-2">
                        <p className="text-[10.5px] font-semibold text-ink">2 extra outlets</p>
                        <p className="font-display text-xs font-bold text-orange-text">A$480</p>
                      </div>
                      <button className="mt-2 w-full rounded-md bg-orange py-1.5 text-[9.5px] font-semibold text-white">
                        Create Variation →
                      </button>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-xl text-center font-display text-lg text-ink">
              Site activity becomes timesheets, progress updates, cost data and variation
              opportunities — automatically.
            </p>
          </div>
        </Reveal>
      </section>

      {/* COMMAND CENTRE */}
      <section id="command" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>AI Commercial Command Centre</Eyebrow>
            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
              Ask your entire business what needs attention.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
              Owners and managers can just ask. Site activity becomes timesheets, cost data and
              variation opportunities automatically.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {commandQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-left text-xs font-medium text-ink-muted transition-colors hover:border-orange/40 hover:bg-orange-soft hover:text-orange-text"
                >
                  <Search className="size-3 shrink-0 text-orange" /> {q}
                </button>
              ))}
            </div>
            <p className="mt-8 font-display text-lg text-ink">
              Don't wait until the accountant tells you which jobs lost money — know while you can
              still fix them.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <BrowserFrame title="app.buildopsai.com/command-centre">
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-2.5 rounded-xl border border-line bg-surface-2 p-4 text-sm text-ink">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                  <span>
                    <span className="text-ink-muted">Owner · </span>Where are we leaking profit this
                    month?
                  </span>
                </div>
                <div className="mt-3 rounded-2xl bg-navy p-4 sm:p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="font-display text-2xl font-bold text-navy-ink">A$86,400</p>
                    <AiPill label="Analysis" />
                  </div>
                  <p className="mb-3 text-xs font-medium text-navy-ink-muted">
                    of margin is currently at risk
                  </p>
                  <ul className="space-y-2.5 text-sm text-navy-ink-muted">
                    {marginRisks.map((r) => (
                      <li key={r.name} className="flex items-start gap-2.5">
                        <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${r.tone}`} />
                        <span>
                          <span className="font-semibold text-navy-ink">{r.name}</span> — {r.amount}{" "}
                          · {r.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="flex-1 rounded-lg border border-navy-line px-3 py-2 text-xs font-medium text-navy-ink transition-colors hover:bg-white/5">
                      Review Projects
                    </button>
                    <button className="flex-1 rounded-lg border border-navy-line px-3 py-2 text-xs font-medium text-navy-ink transition-colors hover:bg-white/5">
                      Raise Variations
                    </button>
                    <button className="flex-1 rounded-lg bg-orange px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90">
                      Update Forecast
                    </button>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </Reveal>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="mb-10 text-center">
            <Eyebrow>How it all fits together</Eyebrow>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One AI-powered operating model for the entire business
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-col items-stretch gap-4 lg:flex-row">
          {operatingModel.map((pillar, i) => {
            const isAi = i === 1;
            return (
              <Fragment key={pillar.title}>
                <Reveal delay={i * 90} className="flex-1">
                  <div
                    className={`h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                      isAi
                        ? "border border-navy-line bg-navy shadow-[0_24px_48px_-24px_rgba(14,18,32,0.5)]"
                        : "border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`grid size-11 place-items-center rounded-xl ${isAi ? "bg-orange text-white" : "bg-orange-soft text-orange"}`}
                      >
                        <pillar.icon className="size-5" />
                      </div>
                      {isAi && <AiPill />}
                    </div>
                    <h3
                      className={`font-display text-xl font-semibold ${isAi ? "text-navy-ink" : "text-ink"}`}
                    >
                      {pillar.title}
                    </h3>
                    {pillar.subtitle && (
                      <p
                        className={`mt-1 text-xs ${isAi ? "text-navy-ink-muted" : "text-ink-muted"}`}
                      >
                        {pillar.subtitle}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${
                            isAi
                              ? "bg-white/8 text-navy-ink-muted"
                              : "border border-line bg-surface-2 text-ink-muted"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                {i < operatingModel.length - 1 && (
                  <span className="hidden shrink-0 self-center font-display text-2xl text-orange lg:block">
                    +
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
        <Reveal delay={220}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-line" />
            <span className="font-display text-sm font-semibold text-ink">
              = One AI-Powered Operating Model
            </span>
            <span className="h-px w-10 bg-line" />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-20 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[100px]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-bold tracking-tight text-navy-ink sm:text-5xl lg:text-[3.4rem]">
                Win more work. Deliver more jobs. Protect more margin.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-navy-ink-muted">
                Your team should build, sell and manage projects. AI should handle the operational
                admin around every job.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-display text-[15px] font-semibold text-white shadow-[0_16px_32px_-14px_color-mix(in_oklab,var(--color-orange)_70%,transparent)] transition-transform hover:-translate-y-0.5"
                >
                  See BuildOps AI in Action <ArrowRight className="size-4" />
                </a>
                <a
                  href={demoMailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-line px-8 py-4 text-[15px] font-medium text-navy-ink transition-colors hover:bg-white/5"
                >
                  Request a Tailored Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          <div className="flex items-center gap-2.5">
            <div className="grid size-8 place-items-center rounded-lg bg-navy font-display font-bold text-navy-ink">
              B
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-ink">BuildOps AI</p>
              <p className="text-[11px] text-ink-muted">
                The AI Operating System for Modern Builders, Trades &amp; Contractors.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <a
              href={demoMailto}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink transition-colors hover:text-orange"
            >
              <Mail className="size-3.5" /> {CONTACT_EMAIL}
            </a>
            <p className="text-[11px] text-ink-muted">Powered by APT Business Services + SoluLab</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
