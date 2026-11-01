"use client";

import { useState } from "react";

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand";

const labelClass = "text-sm font-medium text-ink";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[20px] bg-mist p-8">
        <h3 className="font-serif text-2xl font-medium text-ink">
          Thanks, we&apos;ve got your details
        </h3>
        <p className="mt-2 text-ink/70">
          We&apos;ll be in touch shortly to arrange your free rental assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>Full name</label>
        <input id="name" name="name" required placeholder="Jane Smith" className={inputClass} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="07700 900000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required placeholder="jane@domain.com" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="postcode" className={labelClass}>Property postcode</label>
          <input id="postcode" name="postcode" required placeholder="B1 1AA" className={inputClass} />
        </div>
        <div>
          <label htmlFor="bedrooms" className={labelClass}>Bedrooms</label>
          <select id="bedrooms" name="bedrooms" className={inputClass} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3 or more</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Anything else we should know? (optional)</label>
        <textarea id="message" name="message" rows={4} placeholder="How can we help you? Or describe your property..." className={inputClass} />
      </div>

      {/* Spam trap: real people never see or fill this in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand px-8 py-3.5 font-medium text-white transition-colors hover:bg-brandlight disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Get my free assessment"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
