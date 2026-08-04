import Container from "../ui/Container";
import { contact } from "../../config/contact";

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

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-citrus px-8 py-4 font-medium text-forest-dark transition hover:opacity-90"
            >
              Chat on WhatsApp
            </a>

            <a
              href={contact.emailLink}
              className="whitespace-nowrap rounded-full border border-white px-8 py-4 font-medium text-white transition hover:bg-white hover:text-forest"
            >
              Email Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}