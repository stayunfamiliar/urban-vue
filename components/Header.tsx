import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-deep text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-medium uppercase tracking-[0.25em]">
          Urban Vue
        </Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-8">
          <Link
            href="/#apartments"
            className="hidden text-cream/80 transition-colors hover:text-cream sm:inline-block"
          >
            Apartments
          </Link>
          <Link
            href="/landlords"
            className="rounded-full border border-cream/40 px-5 py-2 text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Own a property?
          </Link>
        </nav>
      </div>
    </header>
  );
}
