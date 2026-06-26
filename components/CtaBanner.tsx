import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative bg-red py-16 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal leading-tight">
            Something needs fixing? Let&apos;s sort it.
          </h2>
          <p className="text-charcoal/70 mt-2 text-[15px]">
            Free quotes, fast response, no obligation.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <a
            href={`tel:${site.phonePrimary}`}
            className="inline-flex items-center gap-2.5 bg-charcoal text-paper px-6 py-3.5 rounded-md font-semibold text-[14.5px] hover:bg-charcoal-soft transition-colors"
          >
            <Phone className="w-4 h-4" />
            {site.phonePrimaryDisplay}
          </a>
          <Link
            href="/get-estimate"
            className="inline-flex items-center gap-2 bg-charcoal/0 border-2 border-charcoal text-charcoal px-6 py-3.5 rounded-md font-semibold text-[14.5px] hover:bg-charcoal hover:text-paper transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
