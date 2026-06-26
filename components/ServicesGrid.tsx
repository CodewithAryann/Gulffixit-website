import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 md:px-8 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Eight trades, one contractor"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-ink font-semibold text-[14.5px] hover:text-red-deep transition-colors shrink-0"
          >
            View all services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative rounded-xl overflow-hidden bg-charcoal aspect-[4/5]"
            >
              <Image
                src={s.cardImage}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-red-light text-[12px] font-mono tracking-wider uppercase mb-1">
                  0{services.indexOf(s) + 1}
                </span>
                <h3 className="font-display font-semibold text-lg text-paper leading-snug">
                  {s.shortName}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-paper/0 group-hover:text-paper/80 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
