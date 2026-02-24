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
    Structured systems. Elite virtual talent. Built for growing businesses.
  </p>

  <div className="mt-6 flex gap-3">
    {["𝕏", "in", "f"].map((icon) => (
      <a
        key={icon}
        href="#"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-slate-400 transition hover:bg-slate-700 hover:text-white"
      >
        {icon}
      </a>
    ))}
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
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row text-slate-400">
          <p className="text-xs">
            © {new Date().getFullYear()} Eminence VA Solutions. All rights reserved.
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