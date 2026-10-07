"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[116px] lg:pt-[130px]">
      
      <div className="mx-auto grid min-h-[720px] max-w-[1280px] items-center gap-12 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">

        {/* TEXT */}
        <div className="relative z-10 max-w-[620px]">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#8DC63F]" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-[#0D3B45]">
              GLOBAL FRESH PRODUCE SUPPLIER
            </span>
          </div>

          <h1 className="max-w-[650px] text-[clamp(48px,6vw,82px)] font-extrabold leading-[0.96] tracking-[-0.055em] text-[#0E3B2E]">
            Supplying Fresh Produce{" "}
            <span className="relative inline-block">
              <span className="relative z-10">with Confidence.</span>
              <span className="absolute bottom-[4px] left-0 right-0 z-0 h-[12px] bg-[#FFD23F]" />
            </span>
          </h1>

          <p className="mt-7 max-w-[540px] text-[17px] leading-8 text-[#5A716A]">
            Fresh produce sourced with care and supplied with consistency
            for importers, distributors, wholesalers, retailers and food
            service companies across North America.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-[#FFD23F] px-7 py-4 text-[14px] font-bold text-[#0E3B2E] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD23F]/25"
            >
              Explore Products
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-[#0E3B2E] bg-white px-7 py-4 text-[14px] font-bold text-[#0E3B2E] transition hover:-translate-y-1 hover:bg-[#0E3B2E] hover:text-white"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7A8B85]">
            <span>USA</span>
            <span className="text-[#8DC63F]">•</span>
            <span>Ecuador</span>
            <span className="text-[#8DC63F]">•</span>
            <span>Colombia</span>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F4F7F5]" />

          <div className="relative h-[440px] overflow-hidden rounded-[36px] bg-[#E9EFEA] shadow-[0_30px_80px_rgba(14,59,46,0.12)] sm:h-[520px] lg:h-[600px]">

            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/limes-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Fresh Tahiti limes"
            />

            {/* Very light overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/20 via-transparent to-transparent" />

            {/* Small floating label */}
            <div className="absolute bottom-5 left-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E3B2E] backdrop-blur-md">
              Tahiti Lime
            </div>

            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0E3B2E] backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8DC63F]" />
              Fresh Supply
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
