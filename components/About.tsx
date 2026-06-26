import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock3, Wallet, Wrench, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    desc: "Every technician is vetted and trained; every job is covered.",
  },
  {
    icon: Clock3,
    title: "24/7 response",
    desc: "Emergency callout available any hour, any day of the week.",
  },
  {
    icon: Wallet,
    title: "Fixed, transparent pricing",
    desc: "You approve the quote before work starts — no surprise charges.",
  },
  {
    icon: Wrench,
    title: "One contractor, every trade",
    desc: "Electrical, AC, plumbing and fit-out coordinated under one roof.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 md:px-8 bg-charcoal text-paper relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md">
              <Image
                src="/images/about/worker.png"
                alt="Gulf Fixit technician carrying out maintenance work in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-red text-charcoal rounded-xl p-6 max-w-[220px] flex-col gap-1 shadow-2xl">
              <span className="font-display text-3xl font-bold">100+</span>
              <span className="text-[13.5px] font-medium leading-snug">
                projects completed across Dubai
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why Gulf Fixit"
              title="A maintenance partner that actually shows up"
              dark
            />
            <p className="mt-5 text-paper/65 text-[15.5px] leading-relaxed max-w-lg">
              Gulf Fixit started as an MEP and maintenance crew working
              directly with Dubai property owners and facility managers.
              We&apos;ve since grown into a full fit-out and renovation
              contractor — but the way we work hasn&apos;t changed: turn up on
              time, transparent, and finish the job properly at first
              attempt.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-red/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-paper text-[15px] mb-1">{title}</h4>
                    <p className="text-paper/55 text-[13.5px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-red-light font-semibold text-[14.5px] hover:text-red transition-colors"
            >
              More about Gulf Fixit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
