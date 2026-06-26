import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import StatsStrip from "@/components/StatsStrip";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Maintenance, Fit-Out & MEP Contractor in Dubai`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Maintenance, Fit-Out & MEP Contractor in Dubai`,
    description: site.description,
    url: site.url,
    images: [{ url: "/images/og-banner.jpg", width: 1200, height: 630, alt: site.name }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <About />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
      <CtaBanner />
    </>
  );
}
