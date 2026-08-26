import { ShieldCheck, MessageCircle, Clock, Users, ClipboardCheck } from "lucide-react";
import Container from "../ui/Container";
import { whyMarcoPillars } from "../../data/whyMarcosFarmCorp";

const icons = {
  ShieldCheck,
  MessageCircle,
  Clock,
  Users,
  ClipboardCheck,
};

export default function WhyMarco() {
  return (
    <section className="bg-light py-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Why Marco Farms
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {whyMarcoPillars.map((pillar) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
              <Icon className="h-9 w-9 text-petroleum" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
               {pillar.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-foreground/60">
               {pillar.description}
                </p>    
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
