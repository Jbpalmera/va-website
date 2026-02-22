export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <span className="text-base font-bold">YourBrand</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-slate-600 transition hover:text-slate-900" href="#services">Services</a>
          <a className="text-slate-600 transition hover:text-slate-900" href="#usecases">Use Cases</a>
          <a className="text-slate-600 transition hover:text-slate-900" href="#pricing">Pricing</a>
          <a className="text-slate-600 transition hover:text-slate-900" href="#faq">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a className="hidden text-sm text-slate-600 transition hover:text-slate-900 md:inline" href="#signin">
            Sign In
          </a>
          <a
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            href="#contact"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}