import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Urban Vue
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#apartments" className="text-ink/70 hover:text-brand">
            Apartments
          </Link>
          <Link
            href="/landlords"
            className="rounded-full bg-brand px-4 py-2 text-white hover:bg-deep"
          >
            Own a property?
          </Link>
        </nav>
      </div>
    </header>
  );
}
