import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import ExoticFruits from "../components/home/ExoticFruits";
import WhyMarco from "../components/home/WhyMarco";
import Markets from "../components/home/Markets";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <ExoticFruits />
      <WhyMarco />
      <Markets />
      <CTA />
      <Footer />
    </>
  );
}
