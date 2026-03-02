import {
  MessageSquare,
  Users,
  ClipboardCheck,
  Rocket,
  ArrowRight,
  MoveRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You're Building",
    description:
      "Share your business goals, the tasks you need done, tools you use, and the kind of assistant you're looking for. Takes less than 10 minutes.",
    detail: "Free 15-min consultation",
  },
  {
    number: "02",
    icon: Users,
    title: "We Find Great Candidates",
    description:
      "Our recruitment team hand-sources candidates from a vetted talent pool matched specifically to your requirements and company culture.",
    detail: "From 10,000+ vetted VAs",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "We Interview & Assess For You",
    description:
      "Every candidate is interviewed, skills-tested, and background-checked — so you don't spend hours screening. We present only the top picks.",
    detail: "Multi-step vetting process",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Top Talent Joins Your Team",
    description:
      "Your assistant is onboarded, trained on your workflows, and ready to hit the ground running from day one. No ramp-up time needed.",
    detail: "Ready from day one",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-[#289efd] to-[#0a3f82] py-24 text-white"
    >
      {/* Soft highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            From your first call to your first task completed, we handle
            everything in between.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-12 z-10 hidden lg:flex items-center justify-center">
                    <MoveRight className="h-5 w-5 text-white/50" strokeWidth={2} />
                  </div>
                )}

                <div className="group relative flex flex-col flex-1 overflow-hidden rounded-2xl border border-white/25 bg-white/[0.08] backdrop-blur-xl p-7 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:border-white/40 hover:bg-white/[0.12]">
                  
                  {/* Step number badge */}
                  <div className="absolute top-7 right-7 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    <span className="text-sm font-bold text-white/70">{step.number}</span>
                  </div>

                  {/* Icon container */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/25 shadow-lg backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold leading-tight text-white pr-8">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-white/80 mb-5">
                    {step.description}
                  </p>

                  {/* Detail badge */}
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 border border-white/25 px-3.5 py-2 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    <span className="text-xs font-medium text-white">{step.detail}</span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-white via-blue-200 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
                  
                  {/* Subtle corner gradient */}
                  <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm text-white/80 font-medium">
            No commitment required, start with a free consultation
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a3f82] shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-blue-50"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}