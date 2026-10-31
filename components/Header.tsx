import Image from "next/image";
import Link from "next/link";
import logo from "@/public/vuesvg.png";

export default function Header() {
  return (
    <header className="bg-deep text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="" priority className="h-16 w-auto sm:h-20" />
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
            className="rounded-full border border-cream/40 px-4 py-2 text-cream transition-colors hover:bg-cream hover:text-ink sm:px-5"
          >
            Own a property?
          </Link>
        </nav>
      </div>
    </header>
  );
}
