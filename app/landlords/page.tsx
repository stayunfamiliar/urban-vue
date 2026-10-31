import EnquiryForm from "@/components/EnquiryForm";

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
  return (
    <main>
      {/* Hero */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Guaranteed rent for your Birmingham property
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            We lease and manage your apartment, so you get reliable income
            without the hassle.
          </p>
          <a
            href="#enquiry"
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-white hover:bg-deep"
          >
            Get a free assessment
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title}>
              <h2 className="text-xl font-semibold">{b.title}</h2>
              <p className="mt-2 text-ink/70">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="text-sm font-medium text-ink/60">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Common questions</h2>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="bg-mist">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Get your free rental assessment</h2>
          <p className="mt-2 mb-8 text-ink/70">
            Tell us a little about your property and we&apos;ll be in touch.
          </p>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
