import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Call or message us",
    desc: "Tell us the job — repair, maintenance or full fit-out. We'll ask the right questions to scope it properly.",
  },
  {
    step: "02",
    title: "Get a fixed quote",
    desc: "A technician assesses the work and you receive transparent pricing before anything starts.",
  },
  {
    step: "03",
    title: "We get to work",
    desc: "Licensed technicians complete the job on schedule, with site supervision on larger projects.",
  },
  {
    step: "04",
    title: "Sign-off & warranty",
    desc: "We walk through the completed work with you, and stand behind it with a workmanship warranty.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-8 bg-paper-dim">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to final walkthrough"
          align="center"
        />

        <div className="mt-16 relative">
          {/* Connector line through centre of circles */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-ink/15" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-charcoal flex items-center justify-center">
                  <span className="font-display font-bold text-lg leading-none text-red">
                    {s.step}
                  </span>
                </div>

                <h3 className="mt-5 font-display font-semibold text-lg text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-ink-soft text-[14.5px] leading-relaxed max-w-[200px]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}