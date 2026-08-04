import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray">
      <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

        <a href="/" className="flex items-center">
          <Image
            src="/logos/logo-primary.png"
            alt="Marco Farms"
            width={210}
            height={60}
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">

          <a className="hover:text-forest transition" href="/">
            Home
          </a>

          <a className="hover:text-forest transition" href="#">
            Company
          </a>

          <a className="hover:text-forest transition" href="/products">
            Products
          </a>

          <a className="hover:text-forest transition" href="#contact">
            Contact
          </a>

        </nav>

        <a
          href="#contact"
          className="rounded-full bg-petroleum px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Contact Sales
        </a>

      </div>
    </header>
  );
}
