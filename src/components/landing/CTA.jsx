import { ArrowRight, CheckCircle2, CalendarDays, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const trust = [
  { icon: CheckCircle2, label: "No setup fees" },
  { icon: Shield, label: "Cancel anytime" },
  { icon: Zap, label: "Ready from day one" },
];

export default function CTA() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1350px] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 sm:px-12 lg:px-16">
          
          {/* Background layers */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-indigo-700/30 blur-3xl" />
          <span className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

          {/* Content */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            
            {/* LEFT */}
            <div className="min-w-0">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                Limited-Time Offer
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                Start with a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                Talk to an Eminence VA Solutions expert, tell us what you need, and we’ll match you with
                the perfect virtual assistant — no obligation, no credit card required.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {trust.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2 text-sm text-slate-300">
                    <Icon className="h-4 w-4 text-emerald-400" strokeWidth={2.5} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-7 backdrop-blur-sm shadow-lg">
                <div className="mb-1 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-400" strokeWidth={2} />
                  <p className="text-sm font-bold text-white">Book Your Free Session</p>
                </div>

                <p className="mb-6 text-xs leading-relaxed text-slate-300">
                  15-minute call. No pressure. Walk away with a clear plan.
                </p>

                <Link
                  to="/schedule"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#pricing"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  View Pricing
                </a>

                <p className="mt-5 text-center text-xs text-slate-400">
                  Joined by <span className="font-semibold text-slate-200">5,000+ businesses</span> this year
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}