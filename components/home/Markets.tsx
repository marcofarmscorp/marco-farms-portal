import Container from "../ui/Container";
import { markets } from "../../data/markets";

export default function Markets() {
  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Markets We Serve
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
          {markets.map((market) => (
            <div
              key={market.code}
              className="rounded-2xl border border-gray bg-white p-10 text-center"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-forest">
                {market.code}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {market.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-foreground/60">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
