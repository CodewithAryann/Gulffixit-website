import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact Us | Dubai Maintenance & Fit-Out Contractor",
  description:
    "Get in touch with Gulf Fixit for maintenance, repair and fit-out work in Dubai. Call, WhatsApp, or send your request — we respond fast.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ]}
      />

      <section className="bg-charcoal py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-red" />
            <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
              Contact Us
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-paper leading-tight">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-2xl mx-auto">
            Call, WhatsApp, or fill in the form — whichever&apos;s easiest. We
            typically respond within the hour during business hours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 bg-paper">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl p-6 border border-ink/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px] mb-1">Call or WhatsApp</p>
                <a href={`tel:${site.phonePrimary}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors block">
                  {site.phonePrimaryDisplay}
                </a>
                <a href={`tel:${site.phoneSecondary}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors block">
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-ink/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px] mb-1">Email</p>
                <a href={`mailto:${site.email}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-ink/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px] mb-1">Service area</p>
                <p className="text-ink-soft text-[14.5px]">
                  {site.address.streetAddress}, {site.address.addressLocality}, UAE
                  <br />
                  Serving all of Dubai &amp; surrounding Emirates
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-ink/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Clock3 className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px] mb-1">Availability</p>
                <p className="text-ink-soft text-[14.5px]">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-7 md:p-9 border border-ink/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <SectionHeading title="Send us your request" />
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-105 w-full">
        <iframe
          title="Gulf Fixit location in Dubai"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2546.8947909506633!2d55.355307233845316!3d25.16979887067247!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20ASMAWI%20office%20Build%201st%20floor%20%2317%20Ras%20Al%20Khor%20Industrial%20Area%202%20Al%20Manama%20street%20%20%7C%20Dubai%20%7C%20UAE!5e1!3m2!1sen!2sae!4v1782374872350!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
