"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { services, site } from "@/lib/site";

const mainLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Projects", "/projects"],
  // ["Blog", "/blog"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openExpertise, setOpenExpertise] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top utility bar — collapses on scroll, hidden on mobile */}
      <div
        className={`hidden md:block bg-charcoal border-b border-white/10 overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-10 flex items-center justify-between text-[13px] text-paper/65">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phonePrimary}`} className="flex items-center gap-1.5 hover:text-red-light transition-colors">
              <Phone className="w-3.5 h-3.5 text-red" />
              {site.phonePrimaryDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-red-light transition-colors">
              <Mail className="w-3.5 h-3.5 text-red" />
              {site.email}
            </a>
          </div>
          <span className="text-paper/50">{site.hours}</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
            : "bg-charcoal border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[78px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label={`${site.name} home`}>
            <Image
              src="/images/brand/logo-colour.png"
              alt={`${site.name} — Interiors and Fitout Expert`}
              width={220}
              height={66}
              priority
              className="h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-paper/90">
            {mainLinks.map(([label, url]) => (
              <Link
                key={url}
                href={url}
                className="relative py-2 hover:text-red-light transition-colors group"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenExpertise(true)}
              onMouseLeave={() => setOpenExpertise(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 py-2 hover:text-red-light transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openExpertise ? "rotate-180" : ""}`} />
              </Link>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] transition-all duration-200 ${
                  openExpertise ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="bg-charcoal-soft border border-white/10 rounded-xl shadow-2xl overflow-hidden p-3 grid grid-cols-2 gap-1.5">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-[13.5px] text-paper/80 hover:text-paper hover:bg-white/8 transition-colors group/item"
                    >
                      <span className="font-medium text-paper/90">{s.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="relative py-2 hover:text-red-light transition-colors group">
              Contact Us
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-estimate"
              className="bg-red text-paper px-5 py-2.5 rounded-md font-semibold text-[14px] hover:bg-red-deep transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-paper"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-charcoal border-t border-white/10 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
          {mainLinks.map(([label, url]) => (
            <Link
              key={url}
              href={url}
              className="block py-3 text-paper font-medium border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="border-b border-white/5">
            <button
              onClick={() => setOpenExpertise(!openExpertise)}
              className="w-full flex justify-between items-center py-3 text-paper font-medium"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openExpertise ? "rotate-180" : ""}`} />
            </button>
            {openExpertise && (
              <ul className="pb-3 pl-3 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="block text-paper/70 text-[14px]"
                      onClick={() => {
                        setOpen(false);
                        setOpenExpertise(false);
                      }}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/contact"
            className="block py-3 text-paper font-medium border-b border-white/5"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/get-estimate"
            className="block text-center bg-red text-paper mt-4 px-5 py-3 rounded-md font-semibold"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${site.phonePrimary}`}
            className="flex items-center justify-center gap-2 mt-3 text-paper/80 font-medium"
          >
            <Phone className="w-4 h-4 text-red" />
            {site.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
