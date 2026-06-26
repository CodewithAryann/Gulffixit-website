import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, services, quickLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-paper/80 border-t border-white/10">
      <div className="blueprint-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-10">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company */}
            <div>
              <Link href="/" className="flex items-center mb-5">
                <Image
                  src="/images/brand/logo-colour.png"
                  alt={`${site.name} — Interiors and Fitout Expert`}
                  width={220}
                  height={66}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-paper/60 text-[14.5px] leading-relaxed mb-6">
                Licensed maintenance, fit-out and MEP contractor serving
                Dubai. One call covers every trade your property needs.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: FaFacebookF, href: site.social.facebook, label: "Facebook" },
                  { Icon: FaInstagram, href: site.social.instagram, label: "Instagram" },
                  { Icon: FaTiktok, href: site.social.tiktok, label: "TikTok" },
                  { Icon: FaLinkedinIn, href: site.social.linkedin, label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-red flex items-center justify-center transition-colors"
                  >
                    <Icon className="text-paper w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-paper text-[15px] font-semibold tracking-wide uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-[14.5px]">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-red-light transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-paper text-[15px] font-semibold tracking-wide uppercase mb-5">
                Services
              </h3>
              <ul className="space-y-2.5 text-[14.5px]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-red-light transition-colors">
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-paper text-[15px] font-semibold tracking-wide uppercase mb-5">
                Get In Touch
              </h3>
              <ul className="space-y-3.5 text-[14.5px]">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-red mt-0.5 shrink-0" />
                  <span className="flex flex-col">
                    <a href={`tel:${site.phonePrimary}`} className="hover:text-red-light transition-colors">
                      {site.phonePrimaryDisplay}
                    </a>
                    <a href={`tel:${site.phoneSecondary}`} className="hover:text-red-light transition-colors">
                      {site.phoneSecondaryDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-red mt-0.5 shrink-0" />
                  <a href={`mailto:${site.email}`} className="hover:text-red-light transition-colors">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red mt-0.5 shrink-0" />
                  <span>{site.address.streetAddress}, {site.address.addressLocality}, UAE</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-red mt-0.5 shrink-0" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-paper/50">
            <p>
              © {year} <span className="text-paper/80 font-medium">{site.name}</span>. All rights reserved.
            </p>
            <p className="flex gap-5">
              <Link href="/sitemap.xml" className="hover:text-red-light transition-colors">Sitemap</Link>
              <Link href="/contact" className="hover:text-red-light transition-colors">Contact</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
