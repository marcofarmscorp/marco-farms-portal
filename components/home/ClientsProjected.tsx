"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const customerTypes = [
  {
    number: "01",
    en: "Supermarkets",
    es: "Supermercados",
    descriptionEn:
      "Fresh produce supply for supermarket chains and independent retailers.",
    descriptionEs:
      "Abastecimiento de productos frescos para cadenas de supermercados y comercios independientes.",
    tagEn: "RETAIL",
    tagEs: "COMERCIO MINORISTA",
  },
  {
    number: "02",
    en: "Distributors",
    es: "Distribuidores",
    descriptionEn:
      "Reliable sourcing for businesses serving regional and local markets.",
    descriptionEs:
      "Abastecimiento confiable para empresas que atienden mercados regionales y locales.",
    tagEn: "DISTRIBUTION",
    tagEs: "DISTRIBUCIÓN",
  },
  {
    number: "03",
    en: "Importers & Wholesalers",
    es: "Importadores y mayoristas",
    descriptionEn:
      "Fresh agricultural products for wholesale and international trade operations.",
    descriptionEs:
      "Productos agrícolas frescos para operaciones mayoristas y comercio internacional.",
    tagEn: "WHOLESALE",
    tagEs: "VENTA AL POR MAYOR",
  },
  {
    number: "04",
    en: "Grocery Stores",
    es: "Tiendas de comestibles",
    descriptionEn:
      "Product options to expand fresh fruit and vegetable selections.",
    descriptionEs:
      "Opciones de productos para ampliar la oferta de frutas y vegetales frescos.",
    tagEn: "LOCAL MARKETS",
    tagEs: "MERCADOS LOCALES",
  },
  {
    number: "05",
    en: "Restaurants & Food Service",
    es: "Restaurantes y servicios de alimentación",
    descriptionEn:
      "Fresh ingredients for restaurants, kitchens and food service operators.",
    descriptionEs:
      "Ingredientes frescos para restaurantes, cocinas y operadores de servicios de alimentación.",
    tagEn: "FOOD SERVICE",
    tagEs: "SERVICIOS DE ALIMENTACIÓN",
  },
];

export default function ClientsProjected() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="projected-clients"
      className="bg-[#F6F8F5] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="mb-12 max-w-[720px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#8DC63F]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#526861]">
              {isEnglish ? "WHO WE SERVE" : "A QUIÉNES ATENDEMOS"}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E3B2E] sm:text-4xl lg:text-5xl">
            {isEnglish
              ? "Built for businesses that depend on fresh produce."
              : "Para empresas que dependen de productos frescos."}
          </h2>

          <p className="mt-5 max-w-[650px] text-base leading-7 text-[#5A716A] sm:text-lg">
            {isEnglish
              ? "We aim to build reliable supply relationships with buyers across the fresh produce industry."
              : "Buscamos construir relaciones de abastecimiento confiables con compradores de la industria de productos frescos."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customerTypes.map((customer) => (
            <article
              key={customer.number}
              className="group flex min-h-[225px] flex-col rounded-2xl border border-[#E3EAE4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B7CCB9] hover:shadow-xl hover:shadow-[#0E3B2E]/5 sm:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-[#8DC63F]">
                  {customer.number}
                </span>
                <span className="rounded-full bg-[#F1F5EF] px-3 py-1.5 text-[9px] font-bold tracking-wider text-[#526861]">
                  {isEnglish ? customer.tagEn : customer.tagEs}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[#0E3B2E]">
                {isEnglish ? customer.en : customer.es}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#65766F]">
                {isEnglish
                  ? customer.descriptionEn
                  : customer.descriptionEs}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0E3B2E] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {isEnglish
                ? "Looking for a fresh produce supplier?"
                : "¿Buscas un proveedor de productos frescos?"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/75">
              {isEnglish
                ? "Let's discuss your sourcing needs."
                : "Conversemos sobre tus necesidades de abastecimiento."}
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center rounded-full bg-[#FFD23F] px-6 py-3.5 text-sm font-bold text-[#0E3B2E] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {isEnglish ? "Contact Our Team" : "Contactar al equipo"}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

