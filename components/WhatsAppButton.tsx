"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const [dismissedTooltip, setDismissedTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-2">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" style={{ animationDuration: "2.5s" }} />
        <FaWhatsapp className="relative text-white w-7 h-7" />
      </a>

      {!dismissedTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal text-paper text-[13.5px] font-medium pl-4 pr-2.5 py-2.5 rounded-lg shadow-lg animate-fadeUp">
          <span>Chat with us</span>
          <button
            onClick={() => setDismissedTooltip(true)}
            aria-label="Dismiss"
            className="w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-3.5 h-3.5 text-paper/60" />
          </button>
        </div>
      )}
    </div>
  );
}
