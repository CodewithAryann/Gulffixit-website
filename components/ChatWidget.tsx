"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  X,
  ArrowRight,
  Phone,
  ChevronLeft,
  Send,
  Sparkles,
} from "lucide-react";
import { site, services } from "@/lib/site";

type Step = "menu" | "services" | "quote" | "contact" | "ask";

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
  /** Optional follow-up links shown under a bot answer, e.g. "View AC Services" */
  links?: { label: string; href: string }[];
};

const menuOptions = [
  { label: "I need a service quote", step: "services" as Step },
  { label: "Ask a question", step: "ask" as Step },
  { label: "I have an emergency repair", step: "contact" as Step },
];

/**
 * Lightweight, fully client-side knowledge base built from the same data
 * that already powers the services pages — no API, no backend, no extra
 * dependency. Each entry carries the searchable text plus the answer and
 * an optional deep link to the relevant service page.
 */
type KnowledgeEntry = {
  question: string;
  answer: string;
  keywords: string[];
  href?: string;
  hrefLabel?: string;
};

function buildKnowledgeBase(): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  // Service-level FAQs — the richest, most specific source of answers.
  for (const s of services) {
    for (const faq of s.faqs) {
      entries.push({
        question: faq.q,
        answer: faq.a,
        keywords: [
          ...faq.q.toLowerCase().split(/\W+/),
          ...s.keywords.flatMap((k) => k.toLowerCase().split(/\W+/)),
          s.name.toLowerCase(),
          s.shortName.toLowerCase(),
        ],
        href: `/services/${s.slug}`,
        hrefLabel: `View ${s.shortName}`,
      });
    }

    // One generic "what is this service" entry per service, so a broad
    // question like "do you do electrical work" still resolves to something.
    entries.push({
      question: `Do you offer ${s.name}?`,
      answer: `Yes — ${s.tagline.toLowerCase()}. ${s.intro[0]}`,
      keywords: [
        s.name.toLowerCase(),
        s.shortName.toLowerCase(),
        ...s.keywords.flatMap((k) => k.toLowerCase().split(/\W+/)),
      ],
      href: `/services/${s.slug}`,
      hrefLabel: `View ${s.shortName}`,
    });
  }

  // Company-level facts pulled straight from lib/site.ts so answers always
  // match what's already published elsewhere on the site.
  entries.push(
    {
      question: "What are your working hours?",
      answer: `We're ${site.hours.toLowerCase()}. For urgent issues you can call or WhatsApp any time.`,
      keywords: ["hours", "open", "time", "24", "weekend", "available", "availability"],
    },
    {
      question: "Where are you located?",
      answer: `Our office is at ${site.address.streetAddress}. We cover all of Dubai and the surrounding Emirates.`,
      keywords: ["location", "address", "where", "based", "office", "area"],
      href: "/contact",
      hrefLabel: "Get directions",
    },
    {
      question: "How much will it cost?",
      answer:
        "Pricing depends on the job, so we don't quote a number without seeing the details — but every quote is fixed-price and you approve the cost before any work starts, no surprise charges. The fastest way to get a real number is the quote form.",
      keywords: ["cost", "price", "pricing", "how much", "expensive", "cheap", "rate", "rates"],
      href: "/get-estimate",
      hrefLabel: "Get a Free Quote",
    },
    {
      question: "How quickly can someone come out?",
      answer:
        "We offer same-day callout in most areas of Dubai for urgent jobs, subject to technician availability. For the fastest response on an active emergency, calling or WhatsApp is quicker than the form.",
      keywords: ["fast", "quick", "same day", "today", "urgent", "emergency", "asap", "now"],
    },
    {
      question: "Are you licensed?",
      answer:
        "Yes — every trade is staffed by licensed, vetted technicians who follow documented safety procedure, not shortcuts.",
      keywords: ["licensed", "licence", "license", "certified", "qualified", "insured", "legit"],
    }
  );

  return entries;
}

const knowledgeBase = buildKnowledgeBase();

/** Scores a knowledge entry against the user's query using simple keyword overlap. */
function scoreEntry(entry: KnowledgeEntry, queryWords: string[]) {
  let score = 0;
  for (const word of queryWords) {
    if (word.length < 3) continue;
    if (entry.keywords.some((k) => k.includes(word) || word.includes(k))) score += 1;
    if (entry.question.toLowerCase().includes(word)) score += 1;
  }
  return score;
}

function findBestAnswer(query: string): KnowledgeEntry | null {
  const words = query.toLowerCase().split(/\W+/).filter(Boolean);
  if (words.length === 0) return null;

  let best: { entry: KnowledgeEntry; score: number } | null = null;
  for (const entry of knowledgeBase) {
    const score = scoreEntry(entry, words);
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }
  // Require at least a modest match so we don't confidently answer noise.
  return best && best.score >= 2 ? best.entry : null;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("menu");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  const reset = () => {
    setStep("menu");
    setSelectedService(null);
  };

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), from: "user", text };
    const match = findBestAnswer(text);

    const botMsg: ChatMessage = match
      ? {
          id: crypto.randomUUID(),
          from: "bot",
          text: match.answer,
          links: match.href ? [{ label: match.hrefLabel ?? "Learn more", href: match.href }] : undefined,
        }
      : {
          id: crypto.randomUUID(),
          from: "bot",
          text:
            "I don't have a confident answer to that one from what's on our site. Your best bet is the quote form, or call/WhatsApp us directly — a real person can answer anything specific.",
          links: [
            { label: "Get a Free Quote", href: "/get-estimate" },
            { label: "Contact us", href: "/contact" },
          ],
        };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue("");
  };

  const suggestedQuestions = [
    "What are your hours?",
    "Do you offer same-day AC repair?",
    "Are you licensed?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full bg-red flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:scale-105 hover:bg-red-deep transition-all"
        >
          <MessageCircle className="text-white w-7 h-7" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="w-[calc(100vw-3rem)] max-w-[380px] max-h-[560px] bg-paper rounded-2xl shadow-2xl border border-ink/10 overflow-hidden flex flex-col animate-fadeUp">
          {/* Header */}
          <div className="bg-charcoal px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red flex items-center justify-center shrink-0">
                <MessageCircle className="w-[18px] h-[18px] text-paper" />
              </div>
              <div>
                <p className="text-paper font-semibold text-[14.5px] leading-tight">Gulf Fixit</p>
                <p className="text-paper/50 text-[12px]">Usually replies within the hour</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-[18px] h-[18px] text-paper/70" />
            </button>
          </div>

          {/* Body */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-paper-dim">
            {/* Greeting bubble */}
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-red shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-paper text-[11px] font-bold">GF</span>
              </div>
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]">
                Hi there 👋 What can we help you with today?
              </div>
            </div>

            {/* Menu step */}
            {step === "menu" && (
              <div className="flex flex-col gap-2 pl-9">
                {menuOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setStep(opt.step)}
                    className="text-left bg-white hover:bg-red/5 hover:border-red/30 border border-ink/10 rounded-lg px-4 py-3 text-[13.5px] text-ink font-medium transition-colors flex items-center justify-between gap-2"
                  >
                    {opt.label}
                    {opt.step === "ask" && <Sparkles className="w-3.5 h-3.5 text-red shrink-0" />}
                  </button>
                ))}
              </div>
            )}

            {/* Services step */}
            {step === "services" && (
              <>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 shrink-0" />
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]">
                    Sure — which service do you need?
                  </div>
                </div>
                <div className="flex flex-col gap-2 pl-9 max-h-[220px] overflow-y-auto pr-1">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        setSelectedService(s.name);
                        setStep("quote");
                      }}
                      className="text-left bg-white hover:bg-red/5 hover:border-red/30 border border-ink/10 rounded-lg px-4 py-2.5 text-[13.5px] text-ink font-medium transition-colors"
                    >
                      {s.shortName}
                    </button>
                  ))}
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 pl-9 text-ink-soft text-[12.5px] hover:text-red-deep transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back
                </button>
              </>
            )}

            {/* Quote step */}
            {step === "quote" && (
              <>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 shrink-0" />
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]">
                    Got it — {selectedService ? `${selectedService}.` : ""} The
                    fastest way to get pricing is our quote form. It takes
                    under a minute and we&apos;ll follow up the same day.
                  </div>
                </div>
                <div className="pl-9 flex flex-col gap-2.5">
                  <Link
                    href={`/get-estimate${selectedService ? `?service=${encodeURIComponent(selectedService)}` : ""}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 bg-red text-paper px-4 py-3 rounded-lg font-semibold text-[13.5px] hover:bg-red-deep transition-colors"
                  >
                    Open Quote Form
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-ink/15 text-ink px-4 py-3 rounded-lg font-semibold text-[13.5px] hover:bg-white transition-colors"
                  >
                    Continue on WhatsApp
                  </a>
                </div>
                <button
                  onClick={() => setStep("services")}
                  className="flex items-center gap-1.5 pl-9 text-ink-soft text-[12.5px] hover:text-red-deep transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back
                </button>
              </>
            )}

            {/* Contact step */}
            {step === "contact" && (
              <>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 shrink-0" />
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]">
                    For the fastest response, call or WhatsApp us directly —
                    our team can help right away.
                  </div>
                </div>
                <div className="pl-9 flex flex-col gap-2.5">
                  <a
                    href={`tel:${site.phonePrimary}`}
                    className="flex items-center justify-center gap-2 bg-red text-paper px-4 py-3 rounded-lg font-semibold text-[13.5px] hover:bg-red-deep transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {site.phonePrimaryDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-ink/15 text-ink px-4 py-3 rounded-lg font-semibold text-[13.5px] hover:bg-white transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 text-ink-soft px-4 py-2 text-[13px] hover:text-red-deep transition-colors"
                  >
                    Or send us a message
                    <Send className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 pl-9 text-ink-soft text-[12.5px] hover:text-red-deep transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back
                </button>
              </>
            )}

            {/* Ask step — free-text Q&A matched against site/service data, no backend */}
            {step === "ask" && (
              <>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 shrink-0" />
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]">
                    Ask me anything about our services, pricing approach,
                    hours or coverage area — I&apos;ll answer from what&apos;s
                    on our site.
                  </div>
                </div>

                {messages.length === 0 && (
                  <div className="flex flex-wrap gap-2 pl-9">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setInputValue(q);
                        }}
                        className="text-[12.5px] text-ink-soft bg-white border border-ink/10 rounded-full px-3 py-1.5 hover:border-red/30 hover:text-red-deep transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {messages.map((m) => (
                  <div key={m.id} className={`flex gap-2.5 ${m.from === "user" ? "justify-end" : ""}`}>
                    {m.from === "bot" && <div className="w-7 h-7 shrink-0" />}
                    <div
                      className={
                        m.from === "user"
                          ? "bg-red text-paper rounded-xl rounded-tr-sm px-4 py-3 text-[14px] leading-relaxed max-w-[85%]"
                          : "bg-white rounded-xl rounded-tl-sm px-4 py-3 text-[14px] text-ink leading-relaxed shadow-sm max-w-[85%]"
                      }
                    >
                      <p>{m.text}</p>
                      {m.links && (
                        <div className="mt-2.5 flex flex-col gap-1.5">
                          {m.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="inline-flex items-center gap-1.5 text-red-deep font-semibold text-[12.5px] hover:text-red transition-colors"
                            >
                              {link.label}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 pl-9 text-ink-soft text-[12.5px] hover:text-red-deep transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back to menu
                </button>
              </>
            )}
          </div>

          {/* Footer: free-text input only on the ask step, static note otherwise */}
          {step === "ask" ? (
            <form onSubmit={handleAsk} className="px-4 py-3 bg-white border-t border-ink/8 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full bg-paper-dim border border-ink/10 px-4 py-2.5 text-[13.5px] text-ink placeholder:text-ink-soft/60 focus:border-red outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 rounded-full bg-red text-paper flex items-center justify-center hover:bg-red-deep transition-colors disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="px-5 py-3 bg-white border-t border-ink/8 shrink-0">
              <p className="text-ink-soft/60 text-[11px] text-center">
                Guided assistant · For urgent matters, call us directly
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
