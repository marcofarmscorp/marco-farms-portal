import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import PumpkinPromo from "@/components/home/PumpkinPromo";
import Products from "@/components/home/Products";
import WhyMarco from "@/components/home/WhyMarco";
import Markets from "@/components/home/Markets";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

const SHOW_PUMPKIN_PROMO = true;

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {SHOW_PUMPKIN_PROMO && <PumpkinPromo />}

        <Products />
        <WhyMarco />
        <Markets />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
