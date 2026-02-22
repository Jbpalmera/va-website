import heroImage from "../../assets/va-hero6.png";

function CheckItem({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
        ✓
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex justify-center md:justify-end">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      {/* image wrapper */}
      <div className="relative md:-mr-10 lg:-mr-14 md:-mt-4">
        <img
          src={heroImage}
          alt="Virtual assistant"
          className="
            block
            w-auto
            max-w-none
            object-contain
            h-[280px]
            sm:h-[340px]
            md:h-[420px]
            lg:h-[460px]
            xl:h-[500px]
          "
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-[1350px] px-6 py-8 md:py-10 lg:px-8">
        <div className="grid items-center gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Virtual Assistants for Modern Teams
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Trained, managed, and ready to work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                from day one
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Delegate admin, operations, research, and customer support to a
              dedicated virtual assistant—without the stress of recruiting,
              onboarding, or daily management.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <CheckItem>No setup, no training, no management required</CheckItem>
              <CheckItem>70–80% more cost-efficient than traditional hires</CheckItem>
              <CheckItem>Your assistant works exclusively for you</CheckItem>
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Free Consultation
              </a>
              <a
                href="#pricing"
                className="rounded-full border bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Plans & Pricing
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">RATED</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-amber-500">★★★★★</span> 4.8/5 average reviews
              </span>
              <span className="hidden md:inline">
                Trusted by founders, agencies & growing teams
              </span>
            </div>
          </div>

          {/* Right */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}