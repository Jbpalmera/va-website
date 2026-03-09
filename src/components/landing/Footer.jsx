import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";

const footerLinks = {
  Services: [
    { label: "Law Firms", href: "#services" },
    { label: "Credit Repair Companies", href: "#services" },
    { label: "Business Funding & Financial", href: "#services" },
    { label: "Debt Relief & Settlement", href: "#services" },
    { label: "Real Estate & Investors", href: "#services" },
    { label: "Tax Preparation & Accounting", href: "#services" },
    { label: "Startups & Growing Businesses", href: "#services" },
    { label: "Spanish-Speaking Markets", href: "#services" },
  ],
  Company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeNav = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionNav = (hash) => {
    const id = hash.replace("#", "");

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderFooterLink = (item) => {
    if (item.href === "/") {
      return (
        <button
          type="button"
          onClick={handleHomeNav}
          className="text-left text-sm text-white/80 transition-colors hover:text-white"
        >
          {item.label}
        </button>
      );
    }

    if (item.href.startsWith("#")) {
      return (
        <button
          type="button"
          onClick={() => handleSectionNav(item.href)}
          className="text-left text-sm text-white/80 transition-colors hover:text-white"
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        to={item.href}
        className="text-sm text-white/80 transition-colors hover:text-white"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#289efd]/20 bg-gradient-to-b from-[#289efd] to-[#0a3f82] text-white">
      {/* Gradient highlight effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
      </div>

      {/* Background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block rounded-xl bg-white p-4 shadow-lg ring-2 ring-white/10">
              <img
                src={logo}
                alt="Eminence VA Solutions Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/90">
              Trained, managed virtual assistants ready to work from day one.
              Structured systems. Elite virtual talent. Built for growing
              businesses.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+18888691744"
                className="block text-sm text-white/85 transition-colors hover:text-white"
              >
                (888) 869-1744
              </a>
              <a
                href="mailto:support@eminencevasolutions.com"
                className="block break-all text-sm text-white/85 transition-colors hover:text-white"
              >
                support@eminencevasolutions.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61585033890665"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.75-1.58 1.52V12h2.69l-.43 2.88h-2.26v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/eminencevasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.25-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@eminencevasolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M16.5 2a5.5 5.5 0 004.5 4.5v3a8.5 8.5 0 01-4.5-1.2v6.2a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.05a3 3 0 10 3 3V2h2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.56 2.53 4.56 5.82V24h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.87 0-3.31 2.24-3.31 4.56V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
                {heading}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>{renderFooterLink(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-white/70 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Eminence VA Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() => handleSectionNav("#contact")}
              className="transition-colors hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}