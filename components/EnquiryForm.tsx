"use client";

import { useState } from "react";

const inputClass =
  "mt-1 w-full rounded-lg border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-brand";

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
      <div className="rounded-2xl border border-ink/10 p-8">
        <h3 className="text-xl font-semibold">Thanks, we&apos;ve got your details</h3>
        <p className="mt-2 text-ink/70">
          We&apos;ll be in touch shortly to arrange your free rental assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ink/10 p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Full name</label>
        <input id="name" name="name" required className={inputClass} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="postcode" className="text-sm font-medium">Property postcode</label>
          <input id="postcode" name="postcode" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="bedrooms" className="text-sm font-medium">Bedrooms</label>
          <select id="bedrooms" name="bedrooms" className={inputClass} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3 or more</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Anything else we should know? (optional)</label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      {/* Spam trap: real people never see or fill this in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-deep disabled:opacity-60"
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
