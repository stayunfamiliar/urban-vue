import Image from "next/image";
import Link from "next/link";
import logo from "@/public/vuesvg.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Urban Vue"
            priority
            className="h-16 w-auto invert sm:h-20"
          />
        </Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-8">
          <Link
            href="/#apartments"
            className="hidden text-ink/70 transition-colors hover:text-ink sm:inline-block"
          >
            Apartments
          </Link>
          <Link
            href="/#reviews"
            className="hidden text-ink/70 transition-colors hover:text-ink sm:inline-block"
          >
            Reviews
          </Link>
          <Link
            href="/landlords"
            className="rounded-full bg-ink px-5 py-2 text-sand transition-colors hover:bg-brand"
          >
            Own a property?
          </Link>
        </nav>
      </div>
    </header>
  );
}
