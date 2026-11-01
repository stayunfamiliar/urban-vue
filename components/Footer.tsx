import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-ink/50 sm:flex-row">
        <p>
          © 2026 {site.name}. All rights reserved.
        </p>
        <p className="text-ink/40">{site.tagline}</p>
      </div>
    </footer>
  );
}
