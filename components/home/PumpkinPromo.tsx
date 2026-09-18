import Image from "next/image";
import Link from "next/link";

export default function PumpkinPromo() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#f3f6e9]">
        <div className="grid min-h-[330px] grid-cols-1 lg:grid-cols-[0.85fr_1.35fr_0.8fr]">

          {/* TEXT / OFFER */}
          <div className="flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-12">
            <span className="mb-3 w-fit rounded-full bg-[#d9ee45] px-4 py-1.5 text-sm font-bold tracking-wide text-[#005b48]">
              SPECIAL OFFER
            </span>

            <h2 className="text-5xl font-bold leading-none tracking-tight text-[#005b48] sm:text-6xl">
              Pumpkin
            </h2>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-bold leading-none text-[#005b48] sm:text-7xl">
                $8
              </span>

              <span className="text-2xl font-bold text-[#187c5b]">
                USD
              </span>
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
              Limited availability
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#00634f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#004f40]"
            >
              Request Availability
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* CENTRAL PUMPKIN IMAGE */}
          <div className="relative min-h-[300px] overflow-hidden bg-[#e9e8dd]">
            <Image
              src="/Images/pumpkin-cut.jpeg"
              alt="Fresh pumpkin"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f6e9]/20 via-transparent to-transparent" />
          </div>

          {/* SECONDARY PHOTO */}
          <div className="relative min-h-[250px] overflow-hidden bg-[#5c1717]">
            <Image
              src="/Images/pumpkin-bags.jpeg"
              alt="Pumpkins packed for distribution"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>
      </div>
    </section>
  );
}
