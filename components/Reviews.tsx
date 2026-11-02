import { reviews } from "@/data/reviews";

export default function Reviews() {
  // The track renders the review set twice so the marquee can loop
  // seamlessly. Temporary placeholder reviews (marked in data/reviews.ts)
  // are shown for now while genuine guest reviews are being collected.
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
          Guest reviews
        </p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
          What our guests <em className="font-medium text-brand">say</em>
        </h2>
        <div className="review-track-wrap group mt-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-hidden">
          <div className="animate-marquee flex w-max gap-6 pr-6">
            {doubled.map((r, i) => (
              <figure
                key={i}
                style={{ animationDelay: `${(i % reviews.length) * 0.9}s` }}
                className="animate-float flex w-[85vw] shrink-0 flex-col justify-between rounded-[20px] bg-white p-8 shadow-sm ring-1 ring-ink/5 sm:w-[24rem]"
              >
                <blockquote className="font-serif text-xl italic leading-snug text-ink/80">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/50">
                  {r.author} · {r.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
