"use client";

import { useEffect, useRef, useState } from "react";
import { apartments } from "@/data/apartments";

const CARD_GAP = 24;
const AUTO_INTERVAL = 4500;
const RESUME_DELAY = 4000;

export default function ApartmentsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  // The collection is rendered twice so the carousel can wrap around
  // seamlessly; when the index reaches the cloned copy it snaps back.
  const items = [...apartments, ...apartments];
  const count = apartments.length;

  function hold() {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function release() {
    pausedRef.current = false;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function pauseFor(ms: number) {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, ms);
  }

  function goNext() {
    if (reducedMotionRef.current) {
      setAnimate(false);
      setIndex((index + 1) % count);
      return;
    }
    setAnimate(true);
    setIndex(index + 1);
  }

  function goPrev() {
    if (reducedMotionRef.current) {
      setAnimate(false);
      setIndex((index - 1 + count) % count);
      return;
    }
    if (index === 0) {
      // Jump invisibly to the cloned copy (visually identical to the
      // start), then slide back one step so it reads as "previous".
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(count - 1);
        })
      );
      return;
    }
    setAnimate(true);
    setIndex(index - 1);
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
      requestAnimationFrame(() => {
        if (!reducedMotionRef.current) setAnimate(true);
      });
    }
  }

  // Measure the card step for the translate offset.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (card) setStep(card.offsetWidth + CARD_GAP);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-rotation, disabled when reduced motion is preferred.
  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotionRef.current) {
      setAnimate(false);
      return;
    }
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setAnimate(true);
      setIndex((i) => i + 1);
    }, AUTO_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartRef.current = e.touches[0].clientX;
    hold();
  }

  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchStartRef.current;
    touchStartRef.current = null;
    pauseFor(RESUME_DELAY);
    if (startX === null) return;
    const delta = e.changedTouches[0].clientX - startX;
    if (delta < -48) goNext();
    else if (delta > 48) goPrev();
  }

  const buttonClass =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-md transition-colors hover:bg-mist sm:flex";

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={hold}
      onMouseLeave={release}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onFocusCapture={hold}
      onBlurCapture={release}
    >
      <div className="overflow-hidden">
        <div
          role="region"
          aria-label="Apartments"
          onTransitionEnd={handleTransitionEnd}
          className={`flex w-full items-stretch gap-6 ${
            animate ? "transition-transform duration-700 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {items.map((apt, i) => (
            <article
              key={`${apt.slug}-${i}`}
              data-card
              className="w-[85%] shrink-0 overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-ink/5 sm:w-[calc((100%-6.5rem)/2)]"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#d8d3c8] to-[#b5ae9f]" />
              <div className="p-8">
                <p className="text-sm text-ink/50">{apt.area}</p>
                <h3 className="mt-1 font-serif text-2xl font-medium text-ink">
                  {apt.name}
                </h3>
                <p className="mt-1 text-sm text-ink/50">{apt.bedrooms} bed</p>
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
      <button
        type="button"
        onClick={() => {
          pauseFor(RESUME_DELAY);
          goPrev();
        }}
        aria-label="Previous apartment"
        className={`${buttonClass} left-2`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => {
          pauseFor(RESUME_DELAY);
          goNext();
        }}
        aria-label="Next apartment"
        className={`${buttonClass} right-2`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
