"use client";

import {
ShieldCheck,
MessageCircle,
Clock,
Users,
ClipboardCheck,
} from "lucide-react";
import Container from "../ui/Container";
import { whyMarcoPillars } from "../../data/whyMarcosFarmCorp";
import { useLanguage } from "@/components/providers/LanguageProvider";

const icons = {
ShieldCheck,
MessageCircle,
Clock,
Users,
ClipboardCheck,
};

const spanishTranslations: Record<
  string,
  { title: string; description: string }
> = {
"Quality Assurance": {
title: "Garantía de calidad",
description:
"Productos seleccionados cuidadosamente para cumplir con los estándares de calidad.",
},
"Reliable Communication": {
title: "Comunicación confiable",
description:
"Comunicación clara y constante para coordinar cada pedido.",
},
"Year-Round Availability": {
title: "Disponibilidad todo el año",
description:
"Suministro confiable de productos agrícolas durante todo el año.",
},
"Long-Term Partnerships": {
title: "Relaciones a largo plazo",
description:
"Construimos relaciones comerciales duraderas basadas en la confianza.",
},
"Export-Ready Operations": {
title: "Operaciones listas para exportación",
description:
"Coordinación y preparación de pedidos para los mercados internacionales.",
},
};

export default function WhyMarco() {
const { language } = useLanguage();
const isEnglish = language === "en";

return (
<section className="bg-light py-24">
<Container>
<h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
{isEnglish ? "Why Marco Farms" : "Por qué Marco Farms"}
</h2>

    <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
      {whyMarcoPillars.map((pillar) => {
        const Icon = icons[pillar.icon as keyof typeof icons];

        const translated = spanishTranslations[pillar.title];

        const title =
          !isEnglish && translated ? translated.title : pillar.title;

        const description =
          !isEnglish && translated
            ? translated.description
            : pillar.description;

        return (
          <div key={pillar.title} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
              <Icon className="h-9 w-9 text-petroleum" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-foreground">
              {title}
            </h3>

            <p className="mt-2 text-base leading-7 text-foreground/60">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  </Container>
</section>

);
}
