"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e6ebe9]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 lg:px-8">
        
        {/* ORIGINAL MARCO FARMS LOGO */}
        <Link
          href="/"
          className="relative flex items-center"
          aria-label="Marco Farms Corp"
        >
          <Image
            src="/logos/logo-primary.png"
            alt="Marco Farms Corp"
            width={180}
            height={55}
            priority
            className="h-auto w-[145px] object-contain sm:w-[165px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/products"
            className="text-[14px] font-medium text-[#526861] transition hover:text-[#0E3B2E]"
          >
            Products
          </Link>

          <Link
            href="/company"
            className="text-[14px] font-medium text-[#526861] transition hover:text-[#0E3B2E]"
          >
            Company
          </Link>

          <Link
            href="/#promise"
            className="text-[14px] font-medium text-[#526861] transition hover:text-[#0E3B2E]"
          >
            Our Promise
          </Link>

          <Link
            href="/#contact"
            className="text-[14px] font-medium text-[#526861] transition hover:text-[#0E3B2E]"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/#contact"
          className="rounded-full bg-[#FFD23F] px-5 py-3 text-[13px] font-bold text-[#0E3B2E] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FFD23F]/30"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
