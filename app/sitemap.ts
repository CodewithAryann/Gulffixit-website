import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: "", priority: 1, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/projects", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/get-estimate", priority: 0.7, changeFrequency: "yearly" as const },
  ].map((r) => ({
    url: `${site.url}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
