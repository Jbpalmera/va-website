import {
  MessageSquare, Users, ClipboardCheck, Rocket, ArrowRight, MoveRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You're Building",
    description:
      "Share your business goals, the tasks you need done, tools you use, and the kind of assistant you're looking for. Takes less than 10 minutes.",
    detail: "Free 15-min consultation",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    glow: "shadow-blue-500/20",
    bar: "from-blue-500 to-blue-400",
  },
  {
    number: "02",
    icon: Users,
    title: "We Find Great Candidates",
    description:
      "Our recruitment team hand-sources candidates from a vetted talent pool matched specifically to your requirements and company culture.",
    detail: "From 10,000+ vetted VAs",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    glow: "shadow-violet-500/20",
    bar: "from-violet-500 to-violet-400",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "We Interview & Assess For You",
    description:
      "Every candidate is interviewed, skills-tested, and background-checked — so you don't spend hours screening. We present only the top picks.",
    detail: "Multi-step vetting process",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    glow: "shadow-emerald-500/20",
    bar: "from-emerald-500 to-emerald-400",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Top Talent Joins Your Team",
    description:
      "Your assistant is onboarded, trained on your workflows, and ready to hit the ground running from day one. No ramp-up time needed.",
    detail: "Ready from day one",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    glow: "shadow-amber-500/20",
    bar: "from-amber-500 to-amber-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-blue-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            From your first call to your first task completed, we handle
            everything in between.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">

                {/* Arrow connector — desktop only */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-10 z-10 hidden lg:flex items-center justify-center">
                    <MoveRight className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
                  </div>
                )}

                <div
                  className={`group relative flex flex-col flex-1 overflow-hidden rounded-2xl border bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${step.accentBorder} ${step.glow}`}
                >
                  {/* Top gradient bar */}
                  <span className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${step.bar}`} />

                  {/* Icon */}
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${step.accentBg} ${step.accentBorder}`}>
                    <Icon className={`h-5 w-5 ${step.accentColor}`} strokeWidth={2} />
                  </div>

                  {/* Step label */}
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-600">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 text-base font-bold leading-snug text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>

                  {/* Detail pill */}
                  <div className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${step.accentBg} ${step.accentBorder} ${step.accentColor}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {step.detail}
                  </div>

                  {/* Hover sweep */}
                  <span className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${step.bar}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <p className="text-sm text-slate-500">No commitment required, start with a free consultation</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}