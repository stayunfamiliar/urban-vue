import Link from "next/link";
import Image from "next/image";
import logo from "@/public/vue.png";

export default function Header() {
  return (
    <header className="bg-deep text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="block">
          <Image src={logo} alt="Urban Vue" priority className="h-14 w-auto mix-blend-lighten sm:h-16" />
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
