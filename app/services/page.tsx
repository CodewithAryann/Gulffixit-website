import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock3, Wallet, PhoneCall } from "lucide-react";
import { services, site } from "@/lib/site";
import CtaBanner from "@/components/CtaBanner";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Maintenance & Fit-Out Services in Dubai",
  description:
    "Explore Gulf Fixit's full range of services in Dubai — interior fit-outs, AC, electrical, plumbing, painting & carpentry, plaster & tiling, partitions & ceilings, and handyman work.",
  alternates: { canonical: "/services" },
};

const guarantees = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Clock3, label: "24/7 emergency response" },
  { icon: Wallet, label: "Fixed pricing, no surprises" },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-charcoal py-28 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-red" />
            <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
              Our Services
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-paper leading-tight">
            Every trade your property needs, under one contractor
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-2xl mx-auto leading-relaxed">
            From a single repair to a full interior fit-out, Gulf Fixit
            covers eight core trades across residential and commercial
            properties in Dubai — licensed technicians, fixed quotes, and
            one point of contact throughout.
          </p>

          {/* Guarantee chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {guarantees.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
              >
                <Icon className="w-4 h-4 text-red" />
                <span className="text-paper/85 text-[13.5px] font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-estimate"
              className="inline-flex items-center gap-2 bg-red text-paper px-7 py-3.5 rounded-md font-semibold text-[14.5px] hover:bg-red-deep transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${site.phonePrimary}`}
              className="inline-flex items-center gap-2.5 border border-white/25 text-paper px-7 py-3.5 rounded-md font-semibold text-[14.5px] hover:border-red hover:text-red-light transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              {site.phonePrimaryDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Quick-jump service chips */}
      <section className="bg-paper-dim py-6 px-6 md:px-8 border-b border-ink/8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="flex items-center gap-2 bg-white border border-ink/10 rounded-full px-4 py-2 text-[13px] font-medium text-ink-soft hover:text-red-deep hover:border-red/30 transition-colors"
            >
              <span className="text-red-deep font-mono text-[11px]">0{i + 1}</span>
              {s.shortName}
            </a>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 px-6 md:px-8 bg-paper">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-ink/10 scroll-mt-32 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[280px]">
                <Image
                  src={s.cardImage}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur text-paper text-[12px] font-mono px-3 py-1.5 rounded-full">
                  0{i + 1} / {services.length}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-red-deep font-mono text-[12.5px] tracking-wider uppercase mb-3">
                  Service
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-3">
                  {s.name}
                </h2>
                <p className="text-ink-soft text-[15px] leading-relaxed mb-5">
                  {s.tagline}
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h.title}
                      className="text-[12.5px] font-medium text-ink-soft bg-paper-dim border border-ink/8 rounded-full px-3 py-1.5"
                    >
                      {h.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-ink font-semibold text-[14.5px] hover:text-red-deep transition-colors w-fit"
                >
                  Explore {s.shortName}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
