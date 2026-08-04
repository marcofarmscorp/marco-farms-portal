import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/home/Footer";
import Container from "../../components/ui/Container";
import { products } from "../../data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-24">
        <Container>
          <h1 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Our Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-foreground/60">
            A full view of what we grow and source, including items available
            year-round and seasonal produce.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray bg-white transition hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-light">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-foreground/40">
                      Photo coming soon
                    </div>
                  )}
                  <span
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${
                      product.available
                        ? "bg-forest text-white"
                        : "bg-gray text-foreground/60"
                    }`}
                  >
                    {product.available ? "Available" : "Out of season"}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    {product.description}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-petroleum">
                    {product.yearRound ? "Year-round" : "Seasonal"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
