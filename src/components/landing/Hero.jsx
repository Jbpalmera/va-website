import heroImage from "../../assets/va-hero2.png";

function CheckItem({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 text-xs">
        ✓
      </span>
      <span className="text-slate-700 text-sm">{children}</span>
    </li>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#efeefe] overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-6 lg:gap-10 py-10 md:py-12 lg:py-16">
          {/* LEFT SIDE */}
          <div className="w-full text-center md:text-left">
            {/* Badge */}
            <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Empowering Your Business with Elite Virtual Talent
            </p>

            {/* Headline */}
            <h1
              className="
                mt-5 font-bold tracking-tight text-slate-900
                leading-[1.08]
                text-[1.75rem] sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.75rem] xl:text-[3.05rem]
                max-w-[740px] mx-auto md:mx-0
              "
            >
              Scale Your Business with Reliable
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
                Virtual Assistant Support
              </span>{" "}
              You Can Trust
            </h1>

            {/* Checklist */}
            <ul className="mt-6 space-y-2.5 text-left inline-flex flex-col">
              <CheckItem>
                Reliable VAs trained for day-to-day business operations
              </CheckItem>
              <CheckItem>
                Cost-effective support without full-time overhead
              </CheckItem>
              <CheckItem>
                Flexible outsourcing that scales with your business
              </CheckItem>
            </ul>

            {/* Left CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-[#289efd] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#062d60]"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 md:justify-start">
              <span className="font-semibold text-slate-700">SERVING</span>
              <span>US & Canada businesses</span>
              <span className="hidden sm:inline text-slate-400">·</span>
              <span className="hidden sm:inline">
                Built for founders, startups & growing teams
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Glow Effects */}
            <div className="pointer-events-none absolute -right-10 top-10 -z-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl hidden md:block" />
            <div className="pointer-events-none absolute -left-10 bottom-0 -z-10 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl hidden md:block" />

            {/* Image Wrapper */}
            <div className="relative inline-block">
              <img
                src={heroImage}
                alt="Eminence VA Solutions virtual assistant support"
                className="
                  w-full
                  max-w-[260px]
                  sm:max-w-[320px]
                  md:max-w-none
                  md:w-auto
                  md:h-[400px]
                  lg:h-[450px]
                  xl:h-[490px]
                  object-contain
                "
              />

              {/* OVERLAP BUTTON ON WAIST/BELT AREA */}
              <a
                href="#services"
                className="
    absolute
    left-1/2
    -translate-x-1/2
    top-[84%]
    z-10
    rounded-full
    bg-[#062d60]
    px-4 sm:px-6 md:px-10 lg:px-14
    py-2 sm:py-2.5 md:py-3
    text-[10px] sm:text-xs md:text-sm
    font-semibold
    text-white
    shadow-lg
    transition
    hover:bg-[#289efd]
    whitespace-nowrap
  "
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
