const products = [
  "Tahiti Lime",
  "Mango",
  "Mandarin",
  "Guanabana",
  "Mamey",
  "Passion Fruit",
  "Rambutan",
  "Dragon Fruit",
  "Pink Waba",
  "Thai Waba",
  "Calaloo",
  "Cilantro",
  "Chipilin",
  "Hierba Mora",
  "Green Plantain",
  "Sugar Cane",
  "Red Sugar Cane",
];

function ProductRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max items-center ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...products, ...products].map((product, index) => (
        <div
          key={`${product}-${index}`}
          className="mx-3 flex items-center gap-3 whitespace-nowrap"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0E3B2E]">
            {product}
          </span>

          <span className="text-[#8DC63F]">✦</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductMarquee() {
  return (
    <section className="overflow-hidden border-y border-[#e6ebe9] bg-[#F8FAF8] py-5">
      <ProductRow />

      <div className="mt-4 opacity-40">
        <ProductRow reverse />
      </div>
    </section>
  );
}
