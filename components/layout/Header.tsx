"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-8 lg:h-28">

        <a href="/" className="relative h-20 w-20 shrink-0 lg:hidden">
          <Image
            src="/logos/logo-stacked.png"
            alt="Marco Farms"
            fill
            className="object-contain"
            priority
          />
        </a>

        <a href="/" className="relative hidden shrink-0 lg:block lg:h-24 lg:w-80">
          <Image
            src="/logos/logo-primary.png"
            alt="Marco Farms"
            fill
            className="object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          <a className="transition hover:text-forest" href="/">
            Home
          </a>
          <a className="transition hover:text-forest" href="#">
            Company
          </a>
          <a className="transition hover:text-forest" href="/products">
            Products
          </a>
          <a className="transition hover:text-forest" href="/contact">
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="hidden rounded-full bg-petroleum px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 lg:inline-block"
        >
          Contact Sales
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-foreground transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray bg-white px-4 py-4 lg:hidden">
          <a
            href="/"
            className="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-light"
          >
            Home
          </a>
          <a
            href="#"
            className="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-light"
          >
            Company
          </a>
          <a
            href="/products"
            className="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-light"
          >
            Products
          </a>
          <a
            href="/contact"
            className="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-light"
          >
            Contact
          </a>
          <a
            href="/contact"
            className="mt-2 rounded-full bg-petroleum px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact Sales
          </a>
        </nav>
      )}
    </header>
  );
}