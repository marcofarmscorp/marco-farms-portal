import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-forest py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Your business, always supplied.
            </h2>
            <p className="mt-2 text-base leading-7 text-white/70">
              That&apos;s our commitment. Let&apos;s talk about your fresh
              produce needs.
            </p>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-citrus px-8 py-4 font-medium text-forest-dark transition hover:opacity-90"
          >
            Talk to Us
          </a>
        </div>
      </Container>
    </section>
  );
}
