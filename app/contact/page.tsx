import Header from "../../components/layout/Header";
import Footer from "../../components/home/Footer";
import Container from "../../components/ui/Container";
import { contact } from "../../config/contact";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="bg-light py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Request a Quote
            </h1>
            <p className="mt-4 text-base leading-7 text-foreground/60">
              Tell us what you need and we&apos;ll get back to you with a
              tailored proposal. You can also reach us directly.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
              <a
                href={contact.emailLink}
                className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-white"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <form
            action={contact.emailLink}
            method="get"
            className="mx-auto mt-14 max-w-2xl space-y-5 rounded-2xl border border-gray bg-white p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="mt-1 w-full rounded-lg border border-gray px-4 py-3 text-sm outline-none focus:border-petroleum"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-gray px-4 py-3 text-sm outline-none focus:border-petroleum"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray px-4 py-3 text-sm outline-none focus:border-petroleum"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-gray px-4 py-3 text-sm outline-none focus:border-petroleum"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">
                What are you looking for?
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray px-4 py-3 text-sm outline-none focus:border-petroleum"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-petroleum py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Send Request
            </button>
          </form>
        </Container>
      </section>

      <Footer />
    </>
  );
}