import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import SugarcanePromo from "@/components/home/SugarcanePromo";
import Products from "@/components/home/Products";
import WhyMarco from "@/components/home/WhyMarco";
import Markets from "@/components/home/Markets";
import ClientsProjected from "@/components/home/ClientsProjected";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SugarcanePromo />
        <Products />
        <WhyMarco />
        <Markets />
        <ClientsProjected />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
