type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-8 h-px bg-red" />
          <span className="text-red font-mono text-[12.5px] font-medium tracking-[0.18em] uppercase">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-8 h-px bg-red" />}
        </div>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-[2.4rem] leading-[1.1] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${dark ? "text-paper/65" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
