export default function DashboardPage() {
  return (
    <section className="grid gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Overview</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          This section will hold the authenticated product experience, metrics,
          and shortcuts.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Active polls", "Responses", "Conversion"].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{item}</p>
            <p className="mt-4 text-3xl font-semibold">0</p>
          </div>
        ))}
      </div>
    </section>
  );
}
