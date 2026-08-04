import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-petroleum py-14">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-white">
              MARCOS FARM CORP
            </p>
            <p className="mt-1 text-sm text-white/60">
              Reliable Supply. Fresh Partnerships.
            </p>
          </div>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Marcos Farm Corp. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}