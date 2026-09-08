// Small, self-contained mock UI previews used inside the six module cards so
// each one reads as a distinct product screen rather than an icon + text tile.

export function PreviewCRM() {
  const stages = [
    { label: "New", n: 24 },
    { label: "Qualified", n: 16 },
    { label: "Quoted", n: 9 },
    { label: "Won", n: 5 },
  ];
  const max = stages[0]!.n;
  return (
    <div className="flex items-end gap-2">
      {stages.map((s) => (
        <div key={s.label} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex h-14 w-full items-end rounded-md bg-surface-2">
            <div
              className="w-full rounded-md bg-orange/70"
              style={{ height: `${(s.n / max) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-semibold text-ink">{s.n}</span>
          <span className="text-[9px] text-ink-muted">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function PreviewEstimate() {
  const rows = [
    { label: "Materials", pct: 43, amount: "A$182K" },
    { label: "Labour", pct: 28, amount: "A$117K" },
    { label: "Subs", pct: 20, amount: "A$85K" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2">
          <span className="w-14 shrink-0 text-[10px] text-ink-muted">{r.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-orange/70" style={{ width: `${r.pct * 2}%` }} />
          </div>
          <span className="w-12 shrink-0 text-right text-[10px] font-semibold text-ink">
            {r.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PreviewTimeline() {
  const cols = [
    { label: "To Do", n: 6 },
    { label: "In Progress", n: 3, tone: "orange" },
    { label: "Done", n: 11, tone: "success" },
  ];
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {cols.map((c) => (
        <div key={c.label} className="rounded-md bg-surface-2 p-1.5">
          <p className="truncate text-[9px] font-semibold text-ink-muted">{c.label}</p>
          <div className="mt-1 space-y-1">
            {Array.from({ length: Math.min(3, Math.ceil(c.n / 3)) }).map((_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-sm ${c.tone === "orange" ? "bg-orange/60" : c.tone === "success" ? "bg-success/50" : "bg-line"}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PreviewCalendar() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const filled = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <span key={i} className="text-center text-[9px] font-medium text-ink-muted">
            {d}
          </span>
        ))}
        {days.map((_, i) => (
          <div
            key={i}
            className={`h-5 rounded-sm ${filled.includes(i) ? "bg-orange/60" : "bg-surface-2"}`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[9px] text-ink-muted">Crew B · 5 shifts scheduled</p>
    </div>
  );
}

export function PreviewProcurement() {
  const rows = [
    { po: "PO-1042", status: "Delivered", tone: "success" },
    { po: "PO-1043", status: "In transit", tone: "orange" },
    { po: "PO-1044", status: "Pending", tone: "muted" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div
          key={r.po}
          className="flex items-center justify-between rounded-md bg-surface-2 px-2 py-1.5"
        >
          <span className="text-[10px] font-medium text-ink">{r.po}</span>
          <span
            className={`text-[9px] font-semibold ${r.tone === "success" ? "text-success" : r.tone === "orange" ? "text-orange-text" : "text-ink-muted"}`}
          >
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PreviewCostChart() {
  const bars = [
    { label: "Materials", est: 70, act: 74 },
    { label: "Labour", est: 55, act: 68 },
    { label: "Subs", est: 45, act: 42 },
  ];
  return (
    <div className="flex items-end justify-between gap-3 px-1">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-14 items-end gap-1">
            <div className="w-2.5 rounded-t-sm bg-line" style={{ height: `${b.est}%` }} />
            <div
              className={`w-2.5 rounded-t-sm ${b.act > b.est ? "bg-danger/70" : "bg-orange/70"}`}
              style={{ height: `${b.act}%` }}
            />
          </div>
          <span className="text-[9px] text-ink-muted">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
