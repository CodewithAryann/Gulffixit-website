import { Phone, Mail, Clock3, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import LeadForm from "./LeadForm";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 md:px-8 bg-paper">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Tell us what needs fixing"
            description="Share a few details and we'll come back to you with a clear quote — usually within the hour during business hours."
          />

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px]">Call or WhatsApp</p>
                <a href={`tel:${site.phonePrimary}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors block">
                  {site.phonePrimaryDisplay}
                </a>
                <a href={`tel:${site.phoneSecondary}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors block">
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px]">Email</p>
                <a href={`mailto:${site.email}`} className="text-ink-soft text-[14.5px] hover:text-red-deep transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <Clock3 className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px]">Availability</p>
                <p className="text-ink-soft text-[14.5px]">{site.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-red/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-red-deep" />
              </div>
              <div>
                <p className="font-semibold text-ink text-[15px]">Service area</p>
                <p className="text-ink-soft text-[14.5px]">Dubai &amp; surrounding Emirates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-ink/10 p-7 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
