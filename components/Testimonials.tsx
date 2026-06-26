import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "We needed our office partitions rebuilt over a weekend so it wouldn't disrupt the team. Gulf Fixit had it done by Monday morning, exactly as planned.",
    name: "Facilities Manager",
    context: "Office fit-out, Business Bay",
  },
  {
    quote:
      "Our AC kept breaking down every few weeks until we moved to their maintenance contract. Haven't had an issue since, and the quarterly visits just happen on schedule.",
    name: "Villa Owner",
    context: "AC maintenance contract, Arabian Ranches",
  },
  {
    quote:
      "Found a leak we'd been chasing for months without breaking a single tile. Fixed the same day once they located it.",
    name: "Property Manager",
    context: "Leak detection & repair, JBR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Dubai property owners say"
          align="center"
          dark
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name + t.context} className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red text-red" />
                ))}
              </div>
              <p className="text-paper/80 text-[14.5px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-paper font-semibold text-[14px]">{t.name}</p>
                <p className="text-paper/50 text-[13px]">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
