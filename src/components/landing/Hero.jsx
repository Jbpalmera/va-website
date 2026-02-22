import heroImage from "../../assets/va-hero6.png";

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
    <section className="bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">

        {/* ── Mobile: stack vertically | Desktop: two columns ── */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-6 lg:gap-10 py-10 md:py-12 lg:py-16">

          {/* ── LEFT: Text content ─────────────────────────── */}
          <div className="w-full text-center md:text-left">

            {/* Badge */}
            <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Virtual Assistants for Modern Teams
            </p>

            {/* Headline */}
            <h1 className="mt-4 text-[1.75rem] leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
              Trained, managed, and ready to work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                from day one
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-base max-w-lg mx-auto md:mx-0">
              Delegate admin, operations, research, and customer support to a
              dedicated virtual assistant — without the stress of recruiting,
              onboarding, or daily management.
            </p>

            {/* Check list */}
            <ul className="mt-6 space-y-2.5 text-left inline-flex flex-col">
              <CheckItem>No setup, no training, no management required</CheckItem>
              <CheckItem>70–80% more cost-efficient than traditional hires</CheckItem>
              <CheckItem>Your assistant works exclusively for you</CheckItem>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Free Consultation
              </a>
              <a
                href="#pricing"
                className="rounded-full border bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Plans & Pricing
              </a>
            </div>

            {/* Rating strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 md:justify-start">
              <span className="font-semibold text-slate-700">RATED</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-amber-500">★★★★★</span>
                4.8/5 average reviews
              </span>
              <span className="hidden sm:inline text-slate-400">·</span>
              <span className="hidden sm:inline">Trusted by founders, agencies & teams</span>
            </div>
          </div>

          {/* ── RIGHT: Hero image ──────────────────────────── */}
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Glows — hidden on mobile to avoid overflow */}
            <div className="pointer-events-none absolute -right-10 top-10 -z-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl hidden md:block" />
            <div className="pointer-events-none absolute -left-10 bottom-0 -z-10 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl hidden md:block" />

            <img
              src={heroImage}
              alt="Virtual assistant"
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
          </div>

        </div>
      </div>
    </section>
  );
}