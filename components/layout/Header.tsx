export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-forest-dark">
          Marco Farms
        </h1>

        <nav className="hidden md:flex gap-10 text-foreground/70">

          <a href="#">Home</a>

          <a href="#">Company</a>

          <a href="#">Products</a>

          <a href="#">Contact</a>

        </nav>

        <button className="bg-petroleum hover:opacity-90 text-white px-6 py-3 rounded-full transition">

          Client Portal

        </button>

      </div>
    </header>
  );
}
