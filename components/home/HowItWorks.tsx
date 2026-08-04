import Container from "../ui/Container";
import { howItWorksSteps } from "../../data/howItWorks";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <div key={item.step} className="text-center">
              <span className="text-sm font-semibold tracking-[0.2em] text-forest">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-foreground/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}