import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "/about" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // "services", "pricing", etc.

  const location = useLocation();
  const navigate = useNavigate();

  const sectionIds = useMemo(
    () => navLinks.filter((l) => l.href.startsWith("#")).map((l) => l.href.slice(1)),
    []
  );

  // Highlight active section on landing page while scrolling
  useEffect(() => {
    if (location.pathname !== "/") return;

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        // tweak this if your navbar height differs
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname, sectionIds]);

  const handleSectionNav = (hash) => {
    const id = hash.replace("#", "");
    setMenuOpen(false);

    // If NOT on landing page, go home with hash; Landing page will scroll on mount
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      return;
    }

    // If already on landing, smooth scroll immediately
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const linkBase =
    "text-slate-600 transition hover:text-slate-900";
  const linkActive =
    "text-slate-900 font-semibold";

  const mobileLinkBase =
    "border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition hover:text-slate-900 last:border-0";
  const mobileLinkActive =
    "text-slate-900";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* Logo (go home + smooth scroll top) */}
        <Link
          to="/"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <div className="h-9 w-9 rounded-xl bg-slate-900" />
          <span className="text-base font-bold text-slate-900">
            Eminence VA Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => {
            // Route link (/about)
            if (link.href.startsWith("/")) {
              return (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              );
            }

            // Section link (#services etc.)
            const id = link.href.slice(1);
            const isActiveSection = location.pathname === "/" && activeSection === id;

            return (
              <button
                key={link.label}
                onClick={() => handleSectionNav(link.href)}
                className={`${linkBase} ${isActiveSection ? linkActive : ""}`}
                type="button"
              >
                {link.label}
              </button>
            );
          })}
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
            {navLinks.map((link) => {
              // Route link
              if (link.href.startsWith("/")) {
                return (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              }

              // Section link
              const id = link.href.slice(1);
              const isActiveSection = location.pathname === "/" && activeSection === id;

              return (
                <button
                  key={link.label}
                  onClick={() => handleSectionNav(link.href)}
                  className={`${mobileLinkBase} ${isActiveSection ? mobileLinkActive : ""}`}
                  type="button"
                >
                  {link.label}
                </button>
              );
            })}

            {/* Sign In */}
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