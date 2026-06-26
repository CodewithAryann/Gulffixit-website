"use client";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/site";

type Props = {
  dark?: boolean;
  defaultService?: string;
};

const WEB3FORMS_ACCESS_KEY = "bd1c029b-abb7-48dd-9930-26b9fbc9822e";

export default function LeadForm({ dark = false, defaultService = "" }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    // Honeypot: a hidden field named "botcheck" that Web3Forms treats as a
    // spam trap. Real users never fill it in since it's visually hidden;
    // bots that auto-fill every field on the form will, and Web3Forms
    // silently discards the submission when it's non-empty.
    const honeypot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request — ${formData.service || "General Enquiry"}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          botcheck: honeypot || "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong — please try again or call us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server — check your connection and try again.");
    }
  };

  const inputClass = dark
    ? "w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14.5px] text-paper placeholder:text-paper/40 focus:border-red outline-none transition-colors"
    : "w-full rounded-md bg-white border border-ink/15 px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-soft/60 focus:border-red outline-none transition-colors";

  const labelClass = dark ? "text-paper/70 text-[13px] font-medium mb-1.5 block" : "text-ink-soft text-[13px] font-medium mb-1.5 block";

  if (status === "success") {
    return (
      <div className={`rounded-xl p-8 text-center ${dark ? "bg-white/5 border border-white/10" : "bg-white border border-ink/10"}`}>
        <CheckCircle2 className="w-12 h-12 text-red mx-auto mb-4" />
        <h3 className={`font-display font-semibold text-xl mb-2 ${dark ? "text-paper" : "text-ink"}`}>
          Request received
        </h3>
        <p className={dark ? "text-paper/60" : "text-ink-soft"}>
          Thanks — a member of our team will contact you shortly to confirm details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-red font-semibold text-[14px] hover:text-red-deep transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field — kept off-screen rather than display:none, since some
          spam bots specifically skip display:none fields. Real users will
          never see or reach it via normal tab order. */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] w-px h-px overflow-hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 5X XXX XXXX"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="service">Service needed</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Tell us about the job</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Location, property type, and what needs doing..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-[13.5px]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMessage || "Something went wrong — please try again or call us directly."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 bg-red text-paper px-6 py-3.5 rounded-md font-semibold text-[15px] hover:bg-red-deep transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request a Free Quote"}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
