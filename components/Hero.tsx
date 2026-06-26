"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Clock3, BadgeCheck, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const images = [
  "/images/hero/hero-img-7.png",
  "/images/hero/hero-img-6.png",
  "/images/hero/hero-img-3.png",
  "/images/hero/hero-img-9.png",
];

const quickPoints = [
  "Free, no-obligation site visit",
  "Fixed pricing before work starts",
  "Same-day callout available",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-charcoal">
      {/* Slideshow */}
      {images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Gulf Fixit maintenance and fit-out work in Dubai"
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
        </div>
      ))}

      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-[150px] pb-28 md:pb-36 min-h-[94vh] flex items-center">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 w-full items-center">
          {/* Left: headline */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-red" />
              <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
                Dubai Maintenance &amp; Fit-Out Contractor
              </span>
            </div>

            <h1 className="font-display font-bold text-[2.5rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.05] text-paper max-w-2xl">
              Built, fixed and maintained <span className="text-red">right</span>, every time.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-paper/75 max-w-xl leading-relaxed">
              Gulf Fixit handles fit-outs, MEP and round-the-clock maintenance
              for homes and businesses across Dubai — one licensed contractor
              for every trade, instead of five different numbers in your
              phone.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/get-estimate"
                className="inline-flex items-center gap-2 bg-red text-paper px-7 py-4 rounded-md text-[15px] font-semibold hover:bg-red-deep transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${site.phonePrimary}`}
                className="inline-flex items-center gap-2.5 border border-white/25 text-paper px-7 py-4 rounded-md text-[15px] font-semibold hover:border-red hover:text-red-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                {site.phonePrimaryDisplay}
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-4 text-paper/80">
              <div className="flex items-center gap-2.5">
                <Clock3 className="w-5 h-5 text-red" />
                <span className="text-[14px] font-medium">24/7 emergency callout</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-red" />
                <span className="text-[14px] font-medium">Licensed &amp; insured technicians</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BadgeCheck className="w-5 h-5 text-red" />
                <span className="text-[14px] font-medium">Trusted across Dubai</span>
              </div>
            </div>
          </div>

          {/* Right: floating quote card */}
          <div className="hidden lg:block">
            <div className="bg-paper rounded-2xl p-8 shadow-2xl border border-white/10">
              <span className="inline-block bg-red/10 text-red-deep text-[12px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                Fast Response
              </span>
              <h3 className="font-display font-bold text-2xl text-ink leading-snug">
                Get a free quote in minutes
              </h3>
              <p className="mt-2 text-ink-soft text-[14px] leading-relaxed">
                Tell us what needs doing — we&apos;ll follow up the same day
                with clear, fixed pricing.
              </p>
              <ul className="mt-6 space-y-3">
                {quickPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-ink text-[14px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-red-deep shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/get-estimate"
                className="mt-7 flex items-center justify-center gap-2 bg-charcoal text-paper px-6 py-3.5 rounded-md font-semibold text-[14.5px] hover:bg-charcoal-soft transition-colors"
              >
                Request My Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-red" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
