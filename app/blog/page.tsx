import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/Schema";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Maintenance & Fit-Out Guides for Dubai Property Owners",
  description:
    "Practical guides on AC maintenance, electrical safety, fit-out costs and property upkeep in Dubai — written by Gulf Fixit's technical team.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [featured, ...rest] = sorted;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ]}
      />

      <section className="bg-charcoal py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-red" />
            <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
              Gulf Fixit Journal
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-paper leading-tight">
            Practical guides, not sales pitches
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Maintenance schedules, cost breakdowns and straight answers from
            the technicians who do this work across Dubai every day.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-ink/10 mb-16"
          >
            <div className="relative min-h-[300px] bg-charcoal overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 flex items-center gap-2 bg-charcoal/70 backdrop-blur border border-white/10 rounded-full px-4 py-2">
                <BookOpen className="w-3.5 h-3.5 text-red" />
                <span className="text-paper/85 text-[12px] font-mono tracking-wide uppercase">Featured</span>
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-red-deep font-mono text-[12.5px] tracking-wider uppercase mb-3">
                {featured.category} · {formatDate(featured.date)}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-3 leading-snug">
                {featured.title}
              </h2>
              <p className="text-ink-soft text-[15px] leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-ink font-semibold text-[14.5px] group-hover:text-red-deep transition-colors w-fit">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-ink/10 hover:border-red/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className="relative aspect-[16/10] bg-charcoal overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-red-deep font-mono text-[11px] tracking-wider uppercase mb-2.5">
                    {post.category} · {post.readMinutes} min read
                  </span>
                  <h3 className="font-display font-semibold text-[17px] text-ink leading-snug mb-2.5">
                    {post.title}
                  </h3>
                  <p className="text-ink-soft text-[13.5px] leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-ink font-semibold text-[13.5px] group-hover:text-red-deep transition-colors">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
