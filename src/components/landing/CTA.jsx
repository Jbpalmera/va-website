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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#289efd] to-[#1e7dd8] px-8 py-14 sm:px-12 lg:px-16 shadow-2xl shadow-[#289efd]/30">
          
          {/* Enhanced background layers */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          />
          
          {/* Glowing orbs */}
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          
          {/* Top accent bar */}
          <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-white/30 via-white/50 to-white/30" />

          {/* Content */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            
            {/* LEFT */}
            <div className="min-w-0">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Limited-Time Offer
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight drop-shadow-lg">
                Start with a{" "}
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
                Talk to an Eminence VA Solutions expert, tell us what you need, and we'll match you with
                the perfect virtual assistant — no obligation, no credit card required.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {trust.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2 text-sm text-white/90">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20">
                      <Icon className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2.5} />
                    </div>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full">
              <div className="group rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-white/15 hover:shadow-2xl">
                {/* Card header */}
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <CalendarDays className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-base font-bold text-white">Book Your Free Session</p>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  15-minute call. No pressure. Walk away with a clear plan.
                </p>

                {/* Primary CTA */}
                <Link
                  to="/schedule"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#289efd] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/95"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                {/* Secondary CTA */}
                <a
                  href="#pricing"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  View Pricing
                </a>

                {/* Social proof */}
                <div className="mt-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-center text-xs text-white/80">
                    Joined by <span className="font-bold text-white">5,000+ businesses</span> this year
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}