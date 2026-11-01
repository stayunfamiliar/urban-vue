import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata = {
  title: "For landlords | Urban Vue",
  description:
    "Guaranteed rent and hassle-free management for your Birmingham property.",
};

const benefits = [
  {
    title: "Guaranteed rent",
    text: "Receive your rent on time every month, whether the apartment is booked or not.",
  },
  {
    title: "Fully managed",
    text: "Guest checks, cleaning, maintenance and day-to-day issues are all handled by us.",
  },
  {
    title: "Looked after properly",
    text: "Your property is furnished, presented and maintained to a high standard.",
  },
];

const steps = [
  { title: "Get in touch", text: "Tell us about your property using the form below." },
  { title: "Free assessment", text: "We view the property and tell you what rent we can offer." },
  { title: "Agree terms", text: "We set out everything clearly in a written agreement." },
  { title: "Hands-off income", text: "We take over, and you receive your rent each month." },
];

const faqs = [
  {
    q: "When do I get paid?",
    a: "Rent is paid monthly on an agreed date, set out in your agreement.",
  },
  {
    q: "What happens if the apartment isn't booked?",
    a: "Your rent stays the same. The booking risk is ours, not yours.",
  },
  {
    q: "Who deals with maintenance and guests?",
    a: "We do. You won't be contacted about day-to-day issues.",
  },
  {
    q: "How long is the agreement?",
    a: "We offer agreements of an agreed fixed length. We'll talk you through the options.",
  },
];

export default function LandlordsPage() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <main>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-28 sm:pt-36 lg:grid-cols-2 lg:gap-14 lg:pb-28 lg:pt-44">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-2xl bg-mist px-4 py-2.5 text-[10px] font-semibold text-ink">
              Guaranteed rent · Fully managed
            </span>
            <h1 className="max-w-xl font-serif text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[51px]">
              Guaranteed rent for your{" "}
              <em className="font-medium text-brand">Birmingham</em> property
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink/60">
              We lease and manage your apartment, so you get reliable income
              without the hassle.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#enquiry"
                className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brandlight"
              >
                Get a free assessment
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Rent notification stack */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#c8b49d] via-[#a78e74] to-[#7d6a55] shadow-xl" />
            <div className="absolute -top-5 right-2 w-60 rounded-2xl bg-white p-4 shadow-lg sm:right-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-brand"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Rent received!</p>
                  <p className="text-xs text-ink/50">Paid on time, every month</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <p className="text-sm text-ink">1st</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Services
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
            What we <em className="font-medium text-brand">handle</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink/60">
            From the first viewing to the final guest checkout, our team covers
            every detail so you can sit back and collect rent.
          </p>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-brand"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-ink/60">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <h2 className="max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
            How it works
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-serif text-4xl font-normal text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-ink/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Questions
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[51px]">
            Common questions
          </h2>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-light text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              Get in touch
            </p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[51px]">
              Get your free rental assessment
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink/60">
              Tell us a little about your property and we&apos;ll be in touch.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Phone / WhatsApp</p>
                  <a
                    href={site.phoneLink}
                    className="text-ink/70 transition-colors hover:text-brand"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink/70 transition-colors hover:text-brand"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Location</p>
                  <p className="text-ink/70">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
