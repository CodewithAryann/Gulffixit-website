const stats = [
  { value: "100+", label: "Projects completed" },
  { value: "24/7", label: "Emergency callout" },
  { value: "8", label: "Trades under one roof" },
  { value: "100%", label: "Licensed technicians" },
];

export default function StatsStrip() {
  return (
    <section className="bg-ink py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display font-bold text-3xl md:text-4xl text-red">{s.value}</p>
            <p className="text-paper/60 text-[13.5px] mt-1.5 tracking-wide uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
