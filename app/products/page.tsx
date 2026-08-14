import Header from "../../components/layout/Header";
import Footer from "../../components/home/Footer";
import Container from "../../components/ui/Container";
import ProductCarousel from "../../components/ui/ProductCarousel";
import { products } from "../../data/products";

export default function ProductsPage() {
  const yearRoundProducts = products.filter(
    (product) => product.yearRound && product.available
  );

  const seasonalProducts = products.filter(
    (product) => !product.yearRound
  );

  const firstFourYearRound = yearRoundProducts.slice(0, 4);
  const additionalYearRound = yearRoundProducts.slice(4);

  return (
    <>
      <Header />

      <section className="bg-white py-24">
        <Container>
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Our Products
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/60">
              A full view of what we grow and source, including items
              available year-round and seasonal produce.
            </p>
          </div>

          {/* Available Year-Round */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-semibold text-foreground">
              Available Year-Round
            </h2>

            {/* First four products */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {firstFourYearRound.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-visible rounded-2xl border border-gray bg-white transition duration-300 hover:shadow-md"
                >
                  <div className="relative">
                    <ProductCarousel
                      images={product.images}
                      name={product.name}
                    />

                    <span className="absolute right-3 top-3 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-white">
                      Available
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-foreground/60">
                      {product.description}
                    </p>

                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-petroleum">
                      Year-round
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Year-Round Products */}
            {additionalYearRound.length > 0 && (
              <div className="mt-8 flex justify-center gap-8">
                {additionalYearRound.map((product) => (
                  <div
                    key={product.id}
                    className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                  >
                    <div
                    className="group relative overflow-visible rounded-2xl border border-gray bg-white transition duration-300 hover:shadow-md"
                    >
                      <div className="relative">
                        <ProductCarousel
                          images={product.images}
                          name={product.name}
                        />

                        <span className="absolute right-3 top-3 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-white">
                          Available
                        </span>
                      </div>

                      <div className="p-4">
                        <h3 className="text-base font-semibold text-foreground">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-foreground/60">
                          {product.description}
                        </p>

                        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-petroleum">
                          Year-round
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Seasonal Products */}
          <div className="mt-20 border-t border-gray pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Seasonal Produce
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-foreground/60">
                Available during select seasons.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {seasonalProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-gray bg-white transition duration-300 hover:shadow-md"
                >
                  <div className="relative">
                    <ProductCarousel
                      images={product.images}
                      name={product.name}
                    />

                    <span className="absolute right-3 top-3 rounded-full bg-gray px-3 py-1 text-xs font-semibold text-foreground/60">
                      Out of season
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-foreground/60">
                      {product.description}
                    </p>

                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-petroleum">
                      Seasonal
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}