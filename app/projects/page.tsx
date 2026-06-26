"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { site } from "@/lib/site";
import CtaBanner from "@/components/CtaBanner";
import { BreadcrumbSchema } from "@/components/Schema";

// NOTE: metadata export must live in a separate server component (layout.tsx or
// a wrapping page.tsx) since this file uses "use client" for the gallery state.

type Project = {
  title: string;
  category: string;
  /** Cover image shown on the grid card */
  image: string;
  /** Full set of images shown inside the gallery, in order. Falls back to [image] if omitted. */
  gallery?: string[];
  /** Short blurb shown in the gallery header */
  summary?: string;
};

const projects: Project[] = [
  {
    title: "Fit-Out",
    category: "Fit-Out",
    image: "/images/services/interior-fit-Outs.png",
    gallery: ["/images/services/interior-fit-Outs.png",
"/images/projects/fit-out/1.png", "/images/projects/fit-out/2.png", "/images/projects/fit-out/3.png", "/images/projects/fit-out/4.png", "/images/projects/fit-out/5.png", "/images/projects/fit-out/6.png", "/images/projects/fit-out/7.png", "/images/projects/fit-out/8.png", "/images/projects/fit-out/9.png"],
    summary: "A complete fit-out delivered end to end — partitioning, MEP coordination and final finishes brought together into a single move-in-ready space.",
  },
  {
    title: "Renovation",
    category: "Renovation",
    image: "/images/projects/villa/1.jpg",
    gallery: ["/images/projects/villa/1.jpg", "/images/projects/villa/2.jpg", "/images/projects/villa/3.jpg", "/images/projects/villa/4.jpg", "/images/projects/villa/5.jpg", "/images/projects/villa/6.jpg", "/images/projects/villa/7.jpg", "/images/projects/villa/8.jpg", "/images/projects/villa/9.jpeg"],
    summary: "A full villa renovation covering structural, electrical, plumbing and finishing work, taking the property from strip-out to handover.",
  },
  {
    title: "Partitioning",
    category: "Partitions",
    image: "/images/projects/partitions/1.jpg",
    gallery: ["/images/projects/partitions/1.jpg", "/images/projects/partitions/2.jpg", "/images/projects/partitions/3.jpg", "/images/projects/partitions/4.jpg", "/images/projects/partitions/5.jpg", "/images/projects/partitions/6.jpg", "/images/projects/partitions/7.jpg", "/images/projects/partitions/8.jpg"],
    summary: "Gypsum partitioning built out to fit the space's layout and timeline, from framing through to paint-ready walls.",
  },
  {
    title: "AC Work",
    category: "AC Services",
    image: "/images/projects/ac-work/1.jpeg",
    gallery: ["/images/projects/ac-work/1.jpeg", "/images/projects/ac-work/2.jpeg", "/images/projects/ac-work/3.jpeg", "/images/projects/ac-work/4.jpeg", "/images/projects/ac-work/5.jpeg", "/images/projects/ac-work/6.jpeg", "/images/projects/ac-work/7.jpeg", "/images/projects/ac-work/8.jpeg", "/images/projects/ac-work/9.jpeg"],
    summary: "AC system servicing and ductwork inspection carried out to restore full, reliable cooling performance.",
  },
  {
    title: "Electrical Upgrade",
    category: "Electrical",
    image: "/images/projects/electrical/1.jpeg",
    gallery: ["/images/projects/electrical/1.jpeg", "/images/projects/electrical/2.jpeg", "/images/projects/electrical/3.jpeg", "/images/projects/electrical/4.jpeg", "/images/projects/electrical/5.jpeg"],
    summary: "An electrical upgrade covering rewiring and a panel replacement, bringing an older unit up to current standard.",
  },
  {
    title: "Re-Tiling Project",
    category: "Plaster & Tiling",
    image: "/images/projects/tiling/1.jpeg",
    gallery: ["/images/projects/tiling/1.jpeg", "/images/projects/tiling/2.jpeg", "/images/projects/tiling/3.jpeg", "/images/projects/tiling/4.jpeg", "/images/projects/tiling/5.jpeg", "/images/projects/tiling/6.jpeg", "/images/projects/tiling/7.jpeg", "/images/projects/tiling/8.jpeg", "/images/projects/tiling/9.jpeg", "/images/projects/tiling/10.jpeg", "/images/projects/tiling/11.jpeg", "/images/projects/tiling/12.jpeg", "/images/projects/tiling/13.jpeg", "/images/projects/tiling/14.jpeg", "/images/projects/tiling/15.jpeg"],
    summary: "A full re-tiling project covering strip-out, waterproofing, plaster repair and finish tiling across two bathrooms.",
  },
  {
    title: "Repainting Work",
    category: "Painting",
    image: "/images/painting/painting.png",
    gallery: ["/images/painting/painting.png", "/images/projects/painting/1.jpeg", "/images/projects/painting/2.jpeg", "/images/projects/painting/3.jpeg"],
    summary: "Repainting work finished with full surface prep and weatherproofing for lasting exterior protection.",
  },
  {
    title: "Showroom False Ceiling",
    category: "Ceilings",
    image: "/images/partitions/bg.png",
    gallery: ["/images/partitions/bg.png", "/images/projects/false-ceilings/1.jpg", "/images/projects/false-ceilings/2.jpg", "/images/projects/false-ceilings/3.jpg", "/images/projects/false-ceilings/4.jpg", "/images/projects/false-ceilings/5.jpg"],
    summary: "A suspended false ceiling and lighting layout designed and installed for a showroom floor.",
  },
  // {
  //   title: "Multi-Unit Plumbing Overhaul",
  //   category: "Plumbing",
  //   image: "/images/plumbing-works/1.png",
  //   gallery: ["/images/plumbing-works/1.png"],
  //   summary: "A multi-unit plumbing overhaul carried out across.",
  // },
];

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;
  const photos = activeProject ? activeProject.gallery ?? [activeProject.image] : [];

  const openProject = (index: number) => {
    setActiveIndex(index);
    setPhotoIndex(0);
  };

  const closeProject = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    setPhotoIndex((i) => (photos.length ? (i + 1) % photos.length : 0));
  }, [photos.length]);

  const prevPhoto = useCallback(() => {
    setPhotoIndex((i) => (photos.length ? (i - 1 + photos.length) % photos.length : 0));
  }, [photos.length]);

  // Keyboard controls + body scroll lock while the modal is open
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, closeProject, nextPhoto, prevPhoto]);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Projects", url: `${site.url}/projects` },
        ]}
      />

      <section className="bg-charcoal py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-red" />
            <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
              Our Work
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-paper leading-tight">
            Projects across Dubai
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-2xl mx-auto">
            A sample of fit-out, renovation and maintenance work completed
            for residential and commercial clients across the city. Tap any
            project to see more photos.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 bg-paper">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => openProject(i)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              aria-label={`View photos from ${p.title}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

              {/* Zoom affordance, appears on hover/focus so it's clear the card opens a gallery */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/70 border border-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-paper" />
              </div>

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-red-light text-[11.5px] font-mono tracking-wider uppercase mb-1">
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-paper text-[16px] leading-snug">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/get-estimate"
            className="inline-flex items-center gap-2 bg-red text-paper px-7 py-3.5 rounded-md font-semibold text-[14.5px] hover:bg-red-deep transition-colors"
          >
            Start your project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />

      {/* Gallery modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} photo gallery`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/95 backdrop-blur-sm"
            onClick={closeProject}
          />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-5xl bg-charcoal rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-white/10">
              <div>
                <span className="text-red-light text-[11.5px] font-mono tracking-wider uppercase">
                  {activeProject.category}
                </span>
                <h2 className="font-display font-bold text-paper text-xl md:text-2xl mt-1 leading-snug">
                  {activeProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close gallery"
                className="shrink-0 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-paper" />
              </button>
            </div>

            {/* Main image stage */}
            <div className="relative flex-1 bg-ink min-h-[280px] md:min-h-[420px]">
              <Image
                key={photos[photoIndex]}
                src={photos[photoIndex]}
                alt={`${activeProject.title} — photo ${photoIndex + 1} of ${photos.length}`}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-contain"
              />

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/80 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-charcoal transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-paper" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/80 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-charcoal transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-paper" />
                  </button>
                  <span className="absolute bottom-3 right-3 text-paper/80 text-[12px] font-mono bg-charcoal/80 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    {photoIndex + 1} / {photos.length}
                  </span>
                </>
              )}
            </div>

            {/* Footer: summary + thumbnail filmstrip */}
            <div className="px-6 py-5 border-t border-white/10 bg-charcoal">
              {activeProject.summary && (
                <p className="text-paper/70 text-[14px] leading-relaxed mb-4">
                  {activeProject.summary}
                </p>
              )}

              {photos.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {photos.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setPhotoIndex(i)}
                      aria-label={`Go to photo ${i + 1}`}
                      className={`relative shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-colors ${
                        i === photoIndex ? "border-red" : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}