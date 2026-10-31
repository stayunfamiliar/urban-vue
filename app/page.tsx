import Link from "next/link";
import { apartments } from "@/data/apartments";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <h1 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Stylish serviced apartments in Birmingham
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            Comfortable, well-kept apartments for city breaks, work trips and
            longer stays.
          </p>
          <a
            href="#apartments"
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-white transition-colors hover:bg-deep"
          >
            View apartments
          </a>
        </div>
      </section>

      {/* Apartments */}
      <section id="apartments" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2 className="text-3xl font-medium tracking-tight">Our apartments</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {apartments.map((apt) => (
            <article key={apt.slug} className="overflow-hidden rounded-2xl border border-ink/10">
              <div className="aspect-[4/3] bg-sand" />
              <div className="p-6">
                <p className="text-sm text-ink/60">{apt.area}</p>
                <h3 className="mt-1 text-xl font-semibold">{apt.name}</h3>
                <p className="mt-1 text-sm text-ink/60">
                  {apt.bedrooms} bed · sleeps {apt.guests}
                </p>
                <p className="mt-3 text-ink/70">{apt.description}</p>
                <a
                  href={apt.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-medium underline"
                >
                  View on Airbnb
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Landlord strip */}
      <section className="bg-deep text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-medium">Own a property in Birmingham?</h2>
            <p className="mt-2 text-cream/80">
              Ask about guaranteed rent and hassle-free management.
            </p>
          </div>
          <Link
            href="/landlords"
            className="rounded-full bg-cream px-6 py-3 font-medium text-ink transition-colors hover:bg-sand"
          >
            Find out more
          </Link>
        </div>
      </section>
    </main>
  );
}
