import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  Users,
  Wrench,
  PhoneCall,
  ArrowRight,
  Award,
  Target,
  Eye,
  HardHat,
  Quote,
} from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About Us | Dubai Maintenance & Fit-Out Contractor",
  description:
    "Gulf Fixit is a Dubai-based maintenance, fit-out and MEP contractor serving residential and commercial clients. Learn how we work and why clients stay with us.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Users, title: "Direct accountability", desc: "You deal with the same team from quote to handover — no handoffs, no lost context." },
  { icon: ShieldCheck, title: "Safety as standard", desc: "Every electrical, gas and structural job follows documented safety procedure, not shortcuts." },
  { icon: Clock3, title: "Realistic timelines", desc: "We quote programs we can actually hit, and flag delays early rather than at the deadline." },
  { icon: Wrench, title: "Workmanship warranty", desc: "Every completed job is backed by a warranty period on labor, not just materials." },
];

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "8", label: "Trades in-house" },
  { value: "24/7", label: "Emergency response" },
  { value: "100%", label: "Licensed technicians" },
];

const process = [
  { icon: PhoneCall, title: "You call, we listen", desc: "Every job starts with understanding exactly what you need — no assumptions, no rushed scoping." },
  { icon: Target, title: "We scope it properly", desc: "A technician assesses the work in person where it matters, so the quote reflects reality, not guesswork." },
  { icon: HardHat, title: "Licensed hands do the work", desc: "Every trade is staffed by vetted, qualified technicians who follow documented safety procedure." },
  { icon: Award, title: "We stand behind it", desc: "Workmanship warranty on every completed job — if something's not right, we come back and fix it." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[62vh] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/about/about-main.png"
          alt="Gulf Fixit team at work in Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/55" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-red" />
            <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
              About Gulf Fixit
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-paper leading-tight">
            One contractor for every trade your property needs
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Maintenance, fit-out and MEP work across Dubai — handled by
            licensed technicians, quoted honestly, and finished properly the
            first time.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-red">{s.value}</p>
              <p className="text-paper/60 text-[13.5px] mt-1.5 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 px-6 md:px-8 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading eyebrow="Who We Are" title="Built by technicians, run like a contractor" />
              <p className="mt-6 text-ink-soft text-[15.5px] leading-relaxed">
                Gulf Fixit exists to solve one problem: too many numbers in
                the phone, and no single point of accountability when
                something needs fixing, building or maintaining. Landlords,
                facility managers and homeowners across Dubai were tired of
                chasing five separate contractors for five separate trades —
                so we built a team that covers all of them under one roof.
              </p>
              <p className="mt-4 text-ink-soft text-[15.5px] leading-relaxed">
                That covers full interior fit-outs and renovations alongside
                our core maintenance trades: electrical, plumbing, AC,
                painting and carpentry, plaster and tiling, and partitions and
                ceilings. The model is simple — one contractor, properly
                licensed technicians, and a quote you can actually trust.
              </p>
              <p className="mt-4 text-ink-soft text-[15.5px] leading-relaxed">
                Today we work with residential landlords, property managers,
                offices, retail operators and homeowners across Dubai, on jobs
                ranging from a single same-day repair to multi-week fit-out
                projects.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-charcoal text-paper px-6 py-3 rounded-md font-semibold text-[14.5px] hover:bg-charcoal-soft transition-colors"
                >
                  Explore our services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Team photo — landscape, sized to the actual image instead of a forced portrait crop */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-ink/10">
                <Image
                  src="/images/about/about-team.jpeg"
                  alt="The Gulf Fixit team at our Dubai office, recognized with performance and employee-of-the-year awards"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              {/* Quote card moved below the image so it never overlaps faces in a wide group shot */}
              <div className="mt-5 bg-charcoal rounded-xl p-5 border border-ink/10">
                <Quote className="w-5 h-5 text-red mb-2" />
                <p className="text-paper/85 text-[13.5px] leading-relaxed italic">
                  &ldquo;We&apos;d rather quote honestly and lose a job than win one on a number we can&apos;t deliver.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 px-6 md:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
        <div className="max-w-6xl mx-auto relative grid md:grid-cols-[420px_1fr] gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/about/gulffixit-ceo.png"
              alt="Muhammad Faraz, CEO of Gulf Fixit"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-red" />
              <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
                CEO Message
              </span>
            </div>
            <Quote className="w-9 h-9 text-red/40 mb-5" />
            <p className="font-display text-2xl md:text-3xl text-paper leading-snug">
              &ldquo;We don&apos;t just fix and build — we earn the trust
              that keeps clients calling us first. Every project, no matter
              the size, gets the same standard of honesty, quality and
              accountability.&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-display font-semibold text-paper text-[17px]">
                Muhammad Faraz
              </p>
              <p className="text-paper/60 text-[13.5px] mt-1 tracking-wide uppercase">
                Chief Executive Officer, Gulf Fixit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — process */}
      <section className="py-24 px-6 md:px-8 bg-paper-dim">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Our Process" title="How a job moves from call to completion" align="center" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative bg-white rounded-xl p-7 border border-ink/8">
                <span className="absolute top-5 right-5 font-display font-bold text-3xl text-ink/10">
                  0{i + 1}
                </span>
                <div className="w-12 h-12 rounded-lg bg-red/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-deep" />
                </div>
                <h4 className="font-semibold text-ink text-[16px] mb-2">{title}</h4>
                <p className="text-ink-soft text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
        <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-9">
            <div className="w-11 h-11 rounded-lg bg-red/15 flex items-center justify-center mb-5">
              <Target className="w-5 h-5 text-red-light" />
            </div>
            <h3 className="font-display font-bold text-2xl text-red-light mb-4">Our Mission</h3>
            <p className="text-paper/70 leading-relaxed text-[15px]">
              To give Dubai property owners one reliable contractor for
              maintenance and fit-out work — transparent pricing, qualified
              technicians, and a job done right the first time.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-9">
            <div className="w-11 h-11 rounded-lg bg-red/15 flex items-center justify-center mb-5">
              <Eye className="w-5 h-5 text-red-light" />
            </div>
            <h3 className="font-display font-bold text-2xl text-red-light mb-4">Our Approach</h3>
            <p className="text-paper/70 leading-relaxed text-[15px]">
              We&apos;d rather quote honestly and lose a job than win one on a
              number we can&apos;t actually deliver. Long-term client
              relationships matter more to us than any single project.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="How We Work" title="The standards behind every job" align="center" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-paper-dim rounded-xl p-7 border border-ink/8">
                <Icon className="w-9 h-9 text-red-deep mb-4" />
                <h4 className="font-semibold text-ink text-[16px] mb-2">{title}</h4>
                <p className="text-ink-soft text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red text-center px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-paper mb-3">
          Have a project in mind?
        </h2>
        <p className="text-paper/80 mb-8 max-w-xl mx-auto">
          Tell us what you need — we&apos;ll give you a straight answer on cost and timeline.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${site.phonePrimary}`}
            className="inline-flex items-center gap-2.5 bg-charcoal text-paper px-7 py-3.5 rounded-md font-semibold hover:bg-charcoal-soft transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            {site.phonePrimaryDisplay}
          </a>
          <Link
            href="/get-estimate"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal px-7 py-3.5 rounded-md font-semibold hover:bg-charcoal hover:text-paper transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}