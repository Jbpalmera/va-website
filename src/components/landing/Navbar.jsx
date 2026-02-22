import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services",  href: "#services"  },
  { label: "Use Cases", href: "#usecases"  },
  { label: "Pricing",   href: "#pricing"   },
  { label: "FAQ",       href: "#faq"       },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <span className="text-base font-bold text-slate-900">YourBrand</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#signin"
            className="text-sm text-slate-600 transition hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Get Started
          </a>
        </div>

        {/* Mobile — Get Started + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-700"
          >
            Get Started
          </a>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-[1350px] flex-col px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition hover:text-slate-900 last:border-0"
              >
                {link.label}
              </a>
            ))}
            {/* Sign In at bottom of mobile menu */}
            <a
              href="#signin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 pt-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}