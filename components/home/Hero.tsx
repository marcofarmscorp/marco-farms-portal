import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-forest">
            Global Fresh Produce Supplier
          </p>

          <h1 className="text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Supplying Fresh Produce
            <br />
            with Confidence.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-foreground/70">
            Building reliable supply chains for importers, distributors,
            retailers and food service companies through premium fresh produce
            and trusted partnerships.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button className="rounded-full bg-petroleum px-8 py-4 font-medium text-white transition hover:opacity-90">
              Explore Products
            </button>

            <button className="rounded-full border border-forest px-8 py-4 font-medium text-forest transition hover:bg-forest hover:text-white">
              Request a Quote
            </button>

          </div>
s
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl">

          <img
            src="/images/hero/hero-main.jpg"
            alt="Fresh Produce"
            className="h-[520px] w-full object-cover"
          />

        </div>
      </Container>
    </section>
  );
}