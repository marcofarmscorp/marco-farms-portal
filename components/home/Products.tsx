import Container from "../ui/Container";
import ProductCarousel from "../ui/ProductCarousel";
import { products } from "../../data/products";

export default function Products() {
  const yearRoundProducts = products.filter(
    (product) => product.yearRound && product.available
  );

  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {yearRoundProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray bg-white transition hover:shadow-md"
            >
              <ProductCarousel
                images={product.images}
                name={product.name}
              />

              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}