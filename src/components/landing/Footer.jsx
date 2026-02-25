import logo from "../../assets/logo.png";

const links = {
  Services: [
    "General VA",
    "Executive Assistant",
    "Real Estate VA",
    "Healthcare VA",
    "Digital Marketing VA",
    "Sales Dev Rep",
  ],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0b172a] text-slate-300">
      <div className="mx-auto max-w-[1350px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block rounded-xl bg-white p-4 shadow-md">
              <img
                src={logo}
                alt="Eminence VA Solutions Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              Trained, managed virtual assistants ready to work from day one.
              Structured systems. Elite virtual talent. Built for growing
              businesses.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/EmineceVASolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.75-1.58 1.52V12h2.69l-.43 2.88h-2.26v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Instagram (replace with real URL if you have it) */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:text-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.25-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
                </svg>
              </a>

              {/* TikTok (replace with real URL if you have it) */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M16.5 2a5.5 5.5 0 004.5 4.5v3a8.5 8.5 0 01-4.5-1.2v6.2a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.05a3 3 0 10 3 3V2h2z" />
                </svg>
              </a>

              {/* LinkedIn (replace with real URL if you have it) */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.56 2.53 4.56 5.82V24h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.87 0-3.31 2.24-3.31 4.56V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-200">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-slate-400 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Eminence VA Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}