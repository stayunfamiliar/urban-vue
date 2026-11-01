"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  decimals: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4.9, decimals: 1, label: "Average guest rating" },
  { value: 98, decimals: 0, suffix: "%", label: "Would recommend us" },
  { value: 24, decimals: 0, suffix: "/7", label: "Guest support" },
];

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((stat.value * eased).toFixed(stat.decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat]);

  return (
    <p className="font-serif text-5xl font-normal tracking-[-0.03em] text-ink sm:text-[51px]">
      {display}
      <span className="text-brand">{stat.suffix}</span>
    </p>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setRun(true);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3"
    >
      {stats.map((s) => (
        <div key={s.label}>
          <Counter stat={s} run={run} />
          <p className="mt-2 text-sm text-ink/50">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
