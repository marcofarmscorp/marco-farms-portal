export default function Hero() {
  return (
    <section className="py-28 text-center bg-white">

      <p className="uppercase tracking-[6px] text-forest font-semibold">
        Fresh Agricultural Products
      </p>

      <h2 className="text-6xl font-bold text-foreground mt-8 leading-tight">
        Connecting Colombian Farms
        <br />
        with International Markets
      </h2>

      <p className="text-foreground/70 mt-10 max-w-2xl mx-auto text-xl">
        Marco Farms supplies premium fresh agricultural products to
        distributors, wholesalers, supermarkets and restaurants across
        North America.
      </p>

      <div className="flex justify-center gap-6 mt-12">

        <button className="bg-petroleum text-white px-10 py-4 rounded-full hover:opacity-90 transition">
          Explore Products
        </button>

        <button className="border border-forest text-forest px-10 py-4 rounded-full hover:bg-forest hover:text-white transition">
          Request a Quote
        </button>

      </div>

    </section>
  );
}
