import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, FileText } from "lucide-react";
import { blogPosts, BlogBlock } from "@/lib/blog";
import { site } from "@/lib/site";
import { BlogPostingSchema, BreadcrumbSchema } from "@/components/Schema";
import CtaBanner from "@/components/CtaBanner";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.coverImage, width: 1200, height: 800, alt: post.title }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** Pulls every h2 heading out of the post body to build a short "in this guide" list. */
function extractSectionTitles(blocks: BlogBlock[]) {
  return blocks.filter((b) => b.type === "h2").map((b) => b.text);
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="font-display font-bold text-2xl text-ink mt-10 mb-4">{block.text}</h2>;
    case "h3":
      return <h3 className="font-display font-semibold text-xl text-ink mt-8 mb-3">{block.text}</h3>;
    case "list":
      return (
        <ul className="space-y-2.5 my-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink-soft text-[16px] leading-relaxed">
              <span className="text-red-deep mt-1.5">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-red pl-6 py-1 my-7 text-ink text-[18px] font-display italic leading-relaxed">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="text-ink-soft text-[16px] leading-relaxed mb-5">{block.text}</p>;
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const sections = extractSectionTitles(post.content);

  return (
    <>
      <BlogPostingSchema
        title={post.title}
        description={post.metaDescription}
        datePublished={post.date}
        slug={post.slug}
        image={post.coverImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ]}
      />

      <article>
        {/* Hero */}
        <section className="relative bg-charcoal py-20 px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          <div className="max-w-3xl mx-auto relative">
            <nav aria-label="Breadcrumb" className="text-paper/50 text-[13px] mb-6">
              <Link href="/" className="hover:text-red-light">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-red-light">Blog</Link>
            </nav>
            <span className="text-red font-mono text-[12.5px] tracking-wider uppercase">
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-[2.6rem] text-paper leading-tight mt-3">
              {post.title}
            </h1>
            <p className="mt-5 text-paper/65 text-[16px] leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-5 mt-6 text-paper/55 text-[13.5px]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readMinutes} min read
              </span>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-ink/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-charcoal">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>

        {/* In this guide — built from the post's own h2 headings.
            Only renders when the post actually has 2+ headings to summarize. */}
        {sections.length >= 2 && (
          <div className="max-w-3xl mx-auto px-6 md:px-8 mt-8 relative z-10">
            <div className="bg-white rounded-2xl border border-ink/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-7">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-red-deep" />
                <span className="text-ink font-semibold text-[13.5px] tracking-wide uppercase">
                  In this guide
                </span>
              </div>
              <ol className="grid sm:grid-cols-2 gap-2.5">
                {sections.map((title, i) => (
                  <li key={title} className="flex gap-2.5 text-ink-soft text-[14px] leading-relaxed">
                    <span className="text-red-deep font-mono text-[12px] shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Content */}
        <section className="px-6 md:px-8 bg-paper pt-12 pb-16">
          <div className="max-w-3xl mx-auto">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            <div className="mt-12 p-7 rounded-xl bg-paper-dim border border-ink/10 flex flex-col sm:flex-row items-center gap-5 justify-between">
              <div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1">Need this looked at?</h3>
                <p className="text-ink-soft text-[14.5px]">Get a free, no-obligation quote from our team.</p>
              </div>
              <Link
                href="/get-estimate"
                className="inline-flex items-center gap-2 bg-red text-paper px-6 py-3 rounded-md font-semibold text-[14.5px] hover:bg-red-deep transition-colors shrink-0"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section className="py-16 px-6 md:px-8 bg-paper-dim">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-ink mb-8">More from the journal</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-ink/10 hover:border-red/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all"
                >
                  <div className="relative aspect-[16/10] bg-charcoal overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-red-deep font-mono text-[10.5px] tracking-wider uppercase">
                      {p.category} · {p.readMinutes} min
                    </span>
                    <h3 className="font-display font-semibold text-[15px] text-ink leading-snug mt-2 group-hover:text-red-deep transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBanner />
    </>
  );
}
