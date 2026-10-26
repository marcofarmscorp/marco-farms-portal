
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const isEnglish = language === "en";

  const labels = {
    products: isEnglish ? "Products" : "Productos",
    company: isEnglish ? "Company" : "Nosotros",
    promise: isEnglish ? "Our Promise" : "Nuestra promesa",
    contact: isEnglish ? "Contact" : "Contacto",
    quote: isEnglish ? "Request a Quote" : "Solicitar cotización",
  };

  const navLinks = [
    { href: "/products", label: labels.products },
    { href: "/company", label: labels.company },
    { href: "/#promise", label: labels.promise },
    { href: "/#contact", label: labels.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e6ebe9]/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1280px] items-center justify-between gap-3 px-5 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          aria-label="Marco Farms Corp"
        >
          <Image
            src="/logos/logo-primary.png"
            alt="Marco Farms Corp"
            width={180}
            height={55}
            priority
            className="h-auto w-[135px] object-contain sm:w-[155px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-[#526861] transition hover:text-[#0E3B2E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-3">
          {/* LANGUAGE SWITCH */}
          <div
            className="flex items-center gap-1 rounded-full border border-[#e2e9e4] bg-white p-1 text-[11px] font-bold"
            aria-label={isEnglish ? "Select language" : "Seleccionar idioma"}
          >
            <button
              type="button"
              onClick={() => {
                if (!isEnglish) toggleLanguage();
              }}
              aria-pressed={isEnglish}
              className={`rounded-full px-2.5 py-2 transition ${
                isEnglish
                  ? "bg-[#0E3B2E] text-white"
                  : "text-[#526861] hover:bg-[#f1f5f2]"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => {
                if (isEnglish) toggleLanguage();
              }}
              aria-pressed={!isEnglish}
              className={`rounded-full px-2.5 py-2 transition ${
                !isEnglish
                  ? "bg-[#0E3B2E] text-white"
                  : "text-[#526861] hover:bg-[#f1f5f2]"
              }`}
            >
              ES
            </button>
          </div>

          {/* QUOTE BUTTON */}
          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#FFD23F] px-5 py-3 text-center text-[12px] font-bold text-[#0E3B2E] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FFD23F]/30 sm:inline-flex"
          >
            {labels.quote}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e9e4] text-[#0E3B2E] lg:hidden"
          >
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="border-t border-[#e6ebe9] bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#526861] transition hover:bg-[#f3f6f3] hover:text-[#0E3B2E]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#FFD23F] px-5 py-3 text-center text-sm font-bold text-[#0E3B2E]"
            >
              {labels.quote}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
