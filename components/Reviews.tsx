import Slider from "@/components/Slider";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  // Placeholder reviews only show while developing, never on the live site
  const visible = reviews.filter(
    (r) => !r.placeholder || process.env.NODE_ENV !== "production"
  );

  if (visible.length === 0) return null;

  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
          Guest reviews
        </p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px]">
          What our guests <em className="font-medium text-brand">say</em>
        </h2>
        <div className="mt-12">
          <Slider label="Guest reviews">
            {visible.map((r, i) => (
              <figure
                key={i}
                className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-[20px] bg-white p-8 shadow-sm ring-1 ring-ink/5 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <blockquote className="font-serif text-xl italic leading-snug text-ink/80">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/50">
                  {r.author} · {r.source}
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
