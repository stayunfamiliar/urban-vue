import Slider from "@/components/Slider";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  // Placeholder reviews only show while developing, never on the live site
  const visible = reviews.filter(
    (r) => !r.placeholder || process.env.NODE_ENV !== "production"
  );

  if (visible.length === 0) return null;

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2 className="text-3xl font-medium tracking-tight">What our guests say</h2>
        <div className="mt-10">
          <Slider label="Guest reviews">
            {visible.map((r, i) => (
              <figure
                key={i}
                className="w-[85%] shrink-0 snap-start rounded-2xl border border-ink/10 bg-cream p-8 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <span aria-hidden="true" className="block text-5xl leading-none text-brand">
                  &ldquo;
                </span>
                <blockquote className="mt-4 text-lg text-ink/80">{r.quote}</blockquote>
                <figcaption className="mt-6 text-sm text-ink/60">
                  {r.author} &middot; {r.source}
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
