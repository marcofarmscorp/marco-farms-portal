
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#0E3B2E] pt-[76px] sm:min-h-[820px] lg:min-h-[850px]">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/limes-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* DARK OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071F18]/85 via-[#0E3B2E]/55 to-[#0E3B2E]/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071F18]/45 via-transparent to-[#071F18]/15" />

      {/* SUBTLE DECORATIVE GLOW */}
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-3xl" />

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-[800px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FFD23F]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white sm:text-xs">
              {isEnglish
                ? "GLOBAL FRESH PRODUCE SUPPLIER"
                : "PROVEEDOR GLOBAL DE PRODUCTOS FRESCOS"}
            </span>
          </div>

          <h1 className="max-w-[850px] text-[clamp(43px,7vw,88px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white">
            {isEnglish ? (
              <>
                Supplying Fresh Produce
                <span className="mt-2 block text-[#FFD23F]">
                  with Confidence.
                </span>
              </>
            ) : (
              <>
                Productos frescos
                <span className="mt-2 block text-[#FFD23F]">
                  con confianza.
                </span>
              </>
            )}
          </h1>

          <p className="mt-7 max-w-[620px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {isEnglish
              ? "Fresh produce sourced with care and supplied with consistency for importers, distributors, wholesalers, retailers and food service companies across North America."
              : "Productos frescos seleccionados con cuidado y abastecimiento confiable para importadores, distribuidores, mayoristas, comercios y empresas de servicios alimentarios en Norteamérica."}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/products"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#FFD23F] px-7 py-4 text-sm font-bold text-[#0E3B2E] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {isEnglish ? "Explore Products" : "Explorar productos"}
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-[#0E3B2E]"
            >
              {isEnglish ? "Request a Quote" : "Solicitar cotización"}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:gap-x-7 sm:text-xs">
            <span>USA</span>
            <span className="text-[#FFD23F]">•</span>
            <span>Ecuador</span>
            <span className="text-[#FFD23F]">•</span>
            <span>Colombia</span>
          </div>
        </div>
      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-6 right-6 hidden items-center gap-3 rounded-full border border-white/25 bg-[#0E3B2E]/55 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:flex lg:bottom-8 lg:right-10">
        <span className="h-2 w-2 rounded-full bg-[#8DC63F]" />
        {isEnglish ? "Fresh Supply · Global Reach" : "Frescura · Alcance global"}
      </div>
    </section>
  );
}
