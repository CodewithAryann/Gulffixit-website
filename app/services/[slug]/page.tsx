import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import { services, site } from "@/lib/site";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/Schema";
import LeadForm from "@/components/LeadForm";
import CtaBanner from "@/components/CtaBanner";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
      images: [{ url: service.cardImage, width: 1200, height: 800, alt: service.name }],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <ServiceSchema slug={service.slug} name={service.name} description={service.metaDescription} />
      <FaqSchema faqs={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: service.name, url: `${site.url}/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-charcoal">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/82 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/20" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-20 w-full">
          <nav aria-label="Breadcrumb" className="text-paper/50 text-[13px] mb-8">
            <Link href="/" className="hover:text-red-light">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-red-light">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/80">{service.shortName}</span>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-block bg-red/15 text-red-light text-[12px] font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5 border border-red/25">
              {service.shortName}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-[3.2rem] text-paper leading-[1.08]">
              {service.name}
            </h1>
            <p className="mt-5 text-paper/75 text-lg leading-relaxed">
              {service.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
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
                <Phone className="w-4 h-4" />
                {site.phonePrimaryDisplay}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-paper/75 text-[13.5px] font-medium">
                <ShieldCheck className="w-4 h-4 text-red" />
                Licensed &amp; insured
              </div>
              <div className="flex items-center gap-2 text-paper/75 text-[13.5px] font-medium">
                <Clock3 className="w-4 h-4 text-red" />
                Same-day callout available
              </div>
              <div className="flex items-center gap-2 text-paper/75 text-[13.5px] font-medium">
                <BadgeCheck className="w-4 h-4 text-red" />
                Workmanship warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-8 bg-paper">
        <div className="max-w-3xl mx-auto">
          {service.intro.map((p, i) => (
            <p key={i} className="text-ink-soft text-[16.5px] leading-relaxed mb-5">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 md:px-8 bg-paper-dim">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-ink text-center mb-12">
            What&apos;s included
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {service.highlights.map((h) => (
              <div key={h.title} className="flex gap-4 bg-white rounded-xl p-6 border border-ink/8">
                <CheckCircle2 className="w-6 h-6 text-red-deep shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-ink text-[16px] mb-1.5">{h.title}</h3>
                  <p className="text-ink-soft text-[14.5px] leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — connected timeline */}
      <section className="py-24 px-6 md:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-red" />
              <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
                Our Process
              </span>
              <span className="w-8 h-px bg-red" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-paper">
              How the process works
            </h2>
          </div>

          {/* Single responsive layout: stacked rows on mobile (vertical rail on the
              left of each row), switching to a horizontal row with a top rail at
              the md breakpoint. Using one DOM structure with responsive utility
              classes — rather than two parallel hidden/shown blocks — so there is
              no risk of both layouts painting at once if a breakpoint class fails
              to apply. */}
          <div className="relative">
            {/* Vertical connecting rail for the mobile (column) layout only */}
            <div className="md:hidden absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-red/0 via-red/40 to-red/0" aria-hidden="true" />

            {/* Horizontal connecting rail for the md+ (row) layout only.
                Inset by half a column on each side so it spans node-center to
                node-center rather than edge to edge, regardless of step count. */}
            <div
              className="hidden md:block absolute top-[27px] h-px bg-gradient-to-r from-red/15 via-red/45 to-red/15"
              style={{
                left: `calc(50% / ${service.process.length})`,
                right: `calc(50% / ${service.process.length})`,
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col md:flex-row gap-10 md:gap-6">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0 md:flex-1 md:px-3"
                >
                  <div
                    className="relative z-10 shrink-0 grow-0 rounded-full bg-charcoal border-2 border-red flex items-center justify-center md:mb-6"
                    style={{ width: 54, height: 54, minWidth: 54, minHeight: 54 }}
                  >
                    <span className="font-display font-bold text-xl text-red-light leading-none">{p.step}</span>
                  </div>
                  <div className="pt-2.5 md:pt-0">
                    <h3 className="font-semibold text-paper text-[15px] mb-1.5 md:mb-2">{p.title}</h3>
                    <p className="text-paper/55 text-[13.5px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-8 bg-paper">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-ink text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((f) => (
              <details key={f.q} className="group bg-paper-dim rounded-xl p-6 border border-ink/8">
                <summary className="font-semibold text-ink text-[15.5px] cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-red-deep shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-ink-soft text-[14.5px] leading-relaxed mt-3.5">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-20 px-6 md:px-8 bg-paper-dim">
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-7 md:p-9 border border-ink/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h2 className="font-display font-bold text-2xl text-ink mb-2">
            Request a quote for {service.shortName}
          </h2>
          <p className="text-ink-soft text-[14.5px] mb-6">
            Tell us a few details and we&apos;ll get back to you with pricing.
          </p>
          <LeadForm defaultService={service.name} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 px-6 md:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-ink mb-10 text-center">
            Other services you might need
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={s.cardImage}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 p-5 flex items-end">
                  <h3 className="font-display font-semibold text-paper text-[16px]">{s.shortName}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
