import Image from "next/image";
import Link from "next/link";

export default function SugarcanePromo() {
  return (
    <section
      aria-labelledby="sugarcane-promo-title"
      className="overflow-hidden bg-white"
    >
      {/* Brand strip beneath the existing site header */}
      <div className="flex min-h-16 items-center justify-center bg-gradient-to-r from-[#004b38] via-[#075c3d] to-[#003e32] px-4 py-4 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-white sm:text-sm">
        <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#c8ed22]" />
        Fresh Supply <span className="mx-3 text-[#c8ed22]">•</span> Global Reach
      </div>

      {/* Main promotional banner */}
      <div className="relative isolate min-h-[700px] overflow-hidden bg-[#f5f7ed] sm:min-h-[660px] lg:min-h-[590px]">
        <Image
          src="/Images/promotions/cana-roja-hero.webp"
          alt="Freshly harvested red sugarcane bundled in the field"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[center_54%]"
        />

        {/* Keeps the offer readable while allowing the original photo to dominate */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f7ed] via-[#f5f7ed]/95 to-[#f5f7ed]/10 sm:bg-[linear-gradient(90deg,#f5f7ed_0%,rgba(245,247,237,0.96)_35%,transparent_58%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[700px] flex-col px-6 pb-8 pt-8 sm:min-h-[660px] sm:px-10 sm:pt-10 lg:min-h-[590px] lg:justify-center lg:px-14 lg:py-12">
          <div className="max-w-[560px]">
            <span className="inline-flex rounded-full bg-[#c8ed22] px-6 py-2 text-sm font-extrabold uppercase tracking-wide text-[#004b38]">
              Special Offer
            </span>

            <h2
              id="sugarcane-promo-title"
              className="mt-4 text-5xl font-black leading-[0.94] tracking-tight text-[#004b38] sm:text-6xl lg:text-7xl"
            >
              Sugarcane
            </h2>

            <p className="mt-4 text-xl font-bold leading-tight text-[#07543e] sm:text-2xl">
              Fresh, Natural and Versatile
            </p>
            <div className="mt-3 h-1 w-44 bg-[#c8ed22]" />

            <div className="mt-5 flex items-end gap-3 text-[#004b38]">
              <span className="text-7xl font-black leading-none tracking-tight sm:text-8xl">
                $13
              </span>
              <span className="mb-2 text-2xl font-extrabold sm:text-3xl">USD</span>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#00634f] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#004f40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00634f]"
            >
              Request Availability
              <span aria-hidden="true" className="text-2xl leading-none">→</span>
            </Link>
          </div>

          {/* Variety callouts: both use the supplied product photographs */}
          <div className="mt-8 flex w-full justify-end gap-4 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0 sm:w-auto sm:flex-col sm:gap-5 lg:right-10 lg:top-8 lg:bottom-auto">
            <div className="flex max-w-[48%] flex-col items-center sm:max-w-none">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-[5px] border-white shadow-xl sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <Image
                  src="/Images/promotions/cana-verde-detail.webp"
                  alt="Green sugarcane stalks"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <span className="-mt-3 rounded-full bg-[#00634f] px-4 py-2 text-center text-xs font-extrabold text-white shadow-lg sm:text-sm">
                Green Sugarcane
              </span>
            </div>

            <div className="flex max-w-[48%] flex-col items-center sm:max-w-none">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-[5px] border-white shadow-xl sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <Image
                  src="/Images/promotions/cana-roja-detail.webp"
                  alt="Red and purple sugarcane stalks"
                  fill
                  sizes="160px"
                  className="object-cover object-center"
                />
              </div>
              <span className="-mt-3 rounded-full bg-[#941b3b] px-4 py-2 text-center text-xs font-extrabold text-white shadow-lg sm:text-sm">
                Red Sugarcane
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marco Farms brand promise */}
      <div className="relative overflow-hidden bg-[#004b38] px-5 py-6 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4 md:items-center">
          <div className="flex items-center gap-3 border-white/35 md:border-r md:pr-4">
            <span aria-hidden="true" className="text-3xl text-[#c8ed22]">♧</span>
            <span className="text-sm font-semibold sm:text-base">Premium Quality</span>
          </div>
          <div className="flex items-center gap-3 md:border-r md:border-white/35 md:pr-4">
            <span aria-hidden="true" className="text-3xl text-[#c8ed22]">↔</span>
            <span className="text-sm font-semibold sm:text-base">Reliable Supply</span>
          </div>
          <div className="flex items-center gap-3 border-white/35 md:border-r md:pr-4">
            <span aria-hidden="true" className="text-3xl text-[#c8ed22]">◎</span>
            <span className="text-sm font-semibold sm:text-base">Global Reach</span>
          </div>
          <p className="text-sm font-medium leading-snug sm:text-base">
            Supplying Fresh Produce <span className="font-bold text-[#ffd43b]">with Confidence</span>
          </p>
        </div>
      </div>
    </section>
  );
}
