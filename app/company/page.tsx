import Link from "next/link";

import Header from "../../components/layout/Header";
import Footer from "../../components/home/Footer";
import Container from "../../components/ui/Container";

const services = [
  {
    title: "Fresh Produce Sourcing",
    text: "We connect buyers with fresh fruits and vegetables selected according to market needs and product availability.",
  },
  {
    title: "Wholesale Supply",
    text: "Our business is designed to serve professional buyers looking for dependable fresh produce supply.",
  },
  {
    title: "Buyer-Focused Service",
    text: "We work closely with customers to understand specifications, availability, volumes, and delivery requirements.",
  },
];

const customers = [
  "Supermarkets",
  "Restaurants",
  "Wholesale Buyers",
  "Food-Service Businesses",
];

const pillars = [
  {
    number: "01",
    title: "Quality",
    text: "We focus on sourcing fresh produce that meets the quality standards expected by professional buyers.",
  },
  {
    number: "02",
    title: "Consistency",
    text: "Reliable supply starts with organized sourcing, clear communication, and attention to product availability.",
  },
  {
    number: "03",
    title: "Partnership",
    text: "We build long-term relationships with buyers by understanding their needs and communicating with clarity.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#123B2A]">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D9A441]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#1E5960]/20 blur-3xl" />

          <Container>
            <div className="relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
              <div className="max-w-2xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                  About Marcos Farm Corp
                </p>

                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Fresh produce,
                  <span className="block text-[#E5C76B]">
                    built around trust.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
                  Marcos Farm Corp is a B2B fresh produce company focused on
                  connecting professional buyers with quality fruits and
                  vegetables through reliable sourcing and responsive service.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#123B2A] transition hover:bg-[#F3F4F1]"
                  >
                    Explore Our Products
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative mx-auto max-w-[520px]">
                  <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9A441]/10 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                    <div className="flex aspect-[4/5] items-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#315C43] via-[#214D38] to-[#102F24] p-8">
                      <div>
                        <div className="mb-4 h-1 w-14 rounded-full bg-[#D9A441]" />

                        <p className="max-w-sm text-2xl font-medium leading-snug text-white">
                          Supplying Fresh Produce with Confidence.
                        </p>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                          Quality products. Reliable sourcing. Long-term
                          relationships.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Marcos Farm
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#123B2A]">
                      Fresh Produce Supplier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* WHO WE ARE */}
        <section className="bg-[#F5F6F3] py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E5960]">
                  Who We Are
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#123B2A] sm:text-4xl">
                  Connecting fresh produce with the businesses that need it.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-slate-600">
                  Marcos Farm Corp is a fresh produce company built around a
                  simple idea: professional buyers deserve a dependable
                  partner for their produce needs.
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  We operate with a B2B focus, serving businesses that require
                  fresh fruits and vegetables for their operations. Our approach
                  combines product sourcing, quality awareness, communication,
                  and a commitment to building long-term business relationships.
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  From tropical and specialty produce to everyday fresh
                  products, our goal is to make sourcing more straightforward,
                  transparent, and reliable for our customers.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E5960]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#123B2A] sm:text-4xl">
                A practical approach to fresh produce supply.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We focus on the parts of the supply relationship that matter
                most to professional buyers: product, availability,
                communication, and service.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1E5960]/30 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123B2A] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#123B2A]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* WHO WE SERVE */}
        <section className="bg-[#123B2A] py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D9A441]">
                  Who We Serve
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built for professional buyers.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                  Marcos Farm Corp is focused on business-to-business
                  relationships. We work with organizations that purchase
                  fresh produce as part of their retail, food-service, or
                  wholesale operations.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {customers.map((customer) => (
                  <div
                    key={customer}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 transition hover:bg-white/10"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-sm font-bold text-[#123B2A]">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-white">
                      {customer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-[#F5F6F3] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E5960]">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#123B2A] sm:text-4xl">
                Relationships matter as much as the product.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We believe dependable supply is built through consistency,
                communication, and an understanding of each buyer&apos;s needs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm"
                >
                  <span className="text-sm font-bold tracking-widest text-[#D9A441]">
                    {pillar.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-[#123B2A]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {pillar.text}
                  </p>

                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#123B2A]/5" />
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* PRODUCTS CONNECTION */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="overflow-hidden rounded-[2rem] bg-[#EEF1ED]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E5960]">
                    Our Produce
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#123B2A] sm:text-4xl">
                    Explore our fresh produce selection.
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                    Discover the fruits and vegetables currently included in
                    our product portfolio. Availability may vary according to
                    season and market conditions.
                  </p>

                  <Link
                    href="/products"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123B2A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4D38]"
                  >
                    View Products
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="relative min-h-[280px] overflow-hidden bg-[#1E5960]">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D9A441]/20" />
                  <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-[#123B2A]/30" />

                  <div className="relative flex h-full items-center justify-center p-10">
                    <div className="text-center">
                      <p className="text-5xl font-semibold text-white/90">
                        Fresh
                      </p>

                      <p className="mt-2 text-2xl font-light text-white/60">
                        Produce
                      </p>

                      <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#D9A441]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-white pb-24">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#123B2A] px-8 py-14 text-center sm:px-12 sm:py-16">
              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-[#D9A441]/10" />

              <div className="relative mx-auto max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D9A441]">
                  Let&apos;s Work Together
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Looking for a fresh produce supplier?
                </h2>

                <p className="mt-5 text-base leading-7 text-white/70">
                  Tell us about your business and your produce needs. Our team
                  is ready to start the conversation.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#123B2A] transition hover:bg-[#F3F4F1]"
                >
                  Contact Marcos Farm
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
