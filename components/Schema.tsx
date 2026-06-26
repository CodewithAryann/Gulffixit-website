import { site, services } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phonePrimary,
    email: site.email,
    logo: `${site.url}/images/brand/logo-color.png`,
    image: `${site.url}/images/og-banner.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.tiktok,
      site.social.linkedin,
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ slug, name, description }: { slug: string; name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} | ${site.name}`,
    description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      telephone: site.phonePrimary,
      url: site.url,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    url: `${site.url}/services/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  title,
  description,
  datePublished,
  slug,
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  image: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    image: `${site.url}${image}`,
    url: `${site.url}/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
