import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import { site } from "@/lib/site";
import LeadForm from "@/components/LeadForm";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote from Gulf Fixit for maintenance, repair or fit-out work anywhere in Dubai. Fast response, transparent pricing.",
  alternates: { canonical: "/get-estimate" },
};

const points = [
  "No-obligation quote, usually within the hour",
  "Fixed pricing — you approve before work starts",
  "Licensed technicians for every trade",
  "Same-day callout available for urgent jobs",
];

export default async function GetEstimatePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Get a Free Quote", url: `${site.url}/get-estimate` },
        ]}
      />

      <section className="py-24 px-6 md:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />
        <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-red" />
              <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
                Free Quote
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-paper leading-tight">
              Tell us the job. We&apos;ll tell you the cost.
            </h1>
            <p className="mt-6 text-paper/70 text-[16px] leading-relaxed">
              Whether it&apos;s a single repair or a full fit-out, fill in the
              form and a member of our team will follow up with clear
              pricing and a realistic timeline — no pressure, no obligation.
            </p>

            <ul className="mt-9 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-paper/85 text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-red shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={`tel:${site.phonePrimary}`}
              className="mt-9 inline-flex items-center gap-2.5 border border-white/20 text-paper px-7 py-3.5 rounded-md font-semibold text-[14.5px] hover:border-red hover:text-red-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Or call us directly: {site.phonePrimaryDisplay}
            </a>
          </div>

          <div className="bg-paper rounded-2xl p-7 md:p-9 shadow-2xl">
            <LeadForm defaultService={service ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}
