import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-charcoal px-6 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="relative text-center max-w-lg">
        <span className="font-display font-bold text-7xl text-red">404</span>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-paper mt-4">
          This page got demolished
        </h1>
        <p className="text-paper/60 mt-3 text-[15px] leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red text-paper px-6 py-3 rounded-md font-semibold text-[14.5px] hover:bg-red-deep transition-colors"
          >
            Back to homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${site.phonePrimary}`}
            className="inline-flex items-center gap-2.5 border border-white/20 text-paper px-6 py-3 rounded-md font-semibold text-[14.5px] hover:border-red hover:text-red-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {site.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
