"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#17382D] pt-[76px]">
      {/* VIDEO DE FONDO A TODO LO ANCHO */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/limes-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      />

      {/* DEGRADADO: OSCURECE MÁS EL LADO DEL TEXTO */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0E3027]/85 via-[#0E3027]/55 to-[#0E3027]/10" />

      {/* CONTENIDO */}
      <div className="mx-auto flex min-h-[644px] max-w-[1280px] items-center px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-[720px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#8DC63F]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-white">
              {isEnglish
                ? "GLOBAL FRESH PRODUCE SUPPLIER"
                : "PROVEEDOR GLOBAL DE PRODUCTOS FRESCOS"}
            </span>
          </div>

          <h1 className="max-w-[700px] text-[clamp(44px,6.5vw,82px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
            {isEnglish ? (
              <>
                Supplying Fresh Produce{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">with Confidence.</span>
                  <span className="absolute bottom-[4px] left-0 right-0 z-0 h-[10px] bg-[#FFD23F]" />
                </span>
              </>
            ) : (
              <>
                Productos frescos{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">con confianza.</span>
                  <span className="absolute bottom-[4px] left-0 right-0 z-0 h-[10px] bg-[#FFD23F]" />
                </span>
              </>
            )}
          </h1>

          <p className="mt-7 max-w-[590px] text-base leading-8 text-white/90 sm:text-lg">
            {isEnglish
              ? "Fresh produce sourced with care and supplied with consistency for importers, distributors, wholesalers, retailers and food service companies across North America."
              : "Productos frescos seleccionados con cuidado y suministrados con consistencia para importadores, distribuidores, mayoristas, comercios y empresas de servicios alimentarios en Norteamérica."}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-[#FFD23F] px-7 py-4 text-sm font-bold text-[#0E3B2E] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              {isEnglish ? "Explore Products" : "Explorar productos"}
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-white/80 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-[#0E3B2E]"
            >
              {isEnglish ? "Request a Quote" : "Solicitar cotización"}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
            <span>USA</span>
            <span className="text-[#FFD23F]">•</span>
            <span>Ecuador</span>
            <span className="text-[#FFD23F]">•</span>
            <span>Colombia</span>
          </div>
        </div>
      </div>

      {/* INDICADOR INFERIOR */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFD23F]" />
    </section>
  );
}
