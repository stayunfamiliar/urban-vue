import Link from "next/link";
import { apartments } from "@/data/apartments";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-28 sm:pt-36 lg:grid-cols-2 lg:gap-14 lg:pb-28 lg:pt-44">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="max-w-xl font-serif text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[51px]">
              Your Stay,{" "}
              <em className="font-medium text-brand">Elevated</em>.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink/60">
              Thoughtfully designed apartments in Birmingham, offering the
              comfort of home with the convenience of a hotel.
            </p>
            <a
              href="#apartments"
              className="group mt-2 inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brandlight"
            >
              View apartments
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
          </div>

          {/* Booking notification stack */}
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
                  <p className="text-sm font-semibold text-ink">
                    Booking confirmed!
                  </p>
                  <p className="text-xs text-ink/50">Airbnb</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <p className="text-sm text-ink">2m</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Stats />
        </div>
      </section>

      {/* Apartments */}
      <section id="apartments" className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-28">
          <h2 className="max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
            Our apartments
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink/60">
            Two well-kept apartments, each furnished and managed to a high
            standard.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {apartments.map((apt) => (
              <article
                key={apt.slug}
                className="overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-ink/5"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#d8d3c8] to-[#b5ae9f]" />
                <div className="p-8">
                  <p className="text-sm text-ink/50">{apt.area}</p>
                  <h3 className="mt-1 font-serif text-2xl font-medium text-ink">
                    {apt.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/50">
                    {apt.bedrooms} bed · sleeps {apt.guests}
                  </p>
                  <p className="mt-3 text-ink/70">{apt.description}</p>
                  <a
                    href={apt.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brandlight"
                  >
                    View on Airbnb
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* Landlord strip */}
      <section className="bg-pale">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-24 sm:flex-row sm:items-center sm:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              For property owners
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
              Own a property in Birmingham?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-ink/60">
              Ask about guaranteed rent and hassle-free management.
            </p>
          </div>
          <Link
            href="/landlords"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brandlight"
          >
            Find out more
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
          </Link>
        </div>
      </section>
    </main>
  );
}
