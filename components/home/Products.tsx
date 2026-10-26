"use client";

import Container from "../ui/Container";
import ProductCarousel from "../ui/ProductCarousel";
import { products } from "../../data/products";
import { useLanguage } from "@/components/providers/LanguageProvider";

const spanishContent: Record<
  string,
  { name: string; description: string }
> = {
  "tahiti-lime": {
    name: "Limón Tahití",
    description:
      "Limones jugosos y de color intenso, con larga vida útil para exportación.",
  },
  mandarin: {
    name: "Mandarina",
    description:
      "Mandarinas dulces, fáciles de pelar y seleccionadas para venta al por mayor.",
  },
  mango: {
    name: "Mango",
    description:
      "Mangos de calidad seleccionados por su tamaño y color uniformes.",
  },
  culantro: {
    name: "Culantro",
    description:
      "Culantro fresco, cosechado y empacado para conservar su frescura.",
  },
  cana: {
    name: "Caña de azúcar",
    description:
      "Caña de azúcar fresca, crujiente y de sabor naturalmente dulce.",
  },
};

export default function Products() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const yearRoundProducts = products.filter(
    (product) => product.yearRound && product.available
  );

  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
          {isEnglish ? "Featured Products" : "Productos destacados"}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {yearRoundProducts.map((product) => {
            const translated = spanishContent[product.id];

            const productName =
              !isEnglish && translated
                ? translated.name
                : product.name;

            const productDescription =
              !isEnglish && translated
                ? translated.description
                : product.description;

            return (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray bg-white transition hover:shadow-md"
              >
                <ProductCarousel
                  images={product.images}
                  name={productName}
                />

                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {productName}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    {productDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
