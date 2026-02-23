import { CheckCircle2, ArrowRight, Sparkles, Building2, Users } from "lucide-react";

const plans = [
  {
    icon: Users,
    name: "Starter",
    price: "599",
    hours: "40 hrs / month",
    description: "Perfect for founders who need part-time support without the overhead.",
    features: [
      "1 dedicated assistant",
      "40 hours per month",
      "Email & calendar management",
      "Task tracking dashboard",
      "Slack & chat integration",
      "Cancel anytime",
    ],
    cta: "Get Started",
    highlighted: false,
    accentBar: "bg-slate-300",
    hoursBadge: "bg-slate-100 text-slate-600",
  },
  {
    icon: Sparkles,
    name: "Professional",
    price: "999",
    hours: "Full-time · 160 hrs/mo",
    description: "Our most popular plan for growing teams who need daily, reliable support.",
    features: [
      "1 dedicated full-time assistant",
      "160 hours per month",
      "All Starter features",
      "Priority matching",
      "Dedicated account manager",
      "NDA & custom policies",
      "Cancel anytime",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
    accentBar: "bg-blue-400",
    hoursBadge: "bg-blue-500/20 text-blue-200",
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "Custom",
    hours: "Multiple assistants",
    description: "Tailored for agencies and scaling businesses with complex operational needs.",
    features: [
      "Multiple assistants",
      "24/7 team availability",
      "Custom SLAs",
      "End-to-end team management",
      "Advanced security & compliance",
      "Custom billing & invoicing",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
    accentBar: "bg-indigo-400",
    hoursBadge: "bg-indigo-50 text-indigo-600",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50 py-20">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, #f8fafc 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Simple Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            No surprise fees. No long-term lock-ins. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-blue-500 bg-slate-900 text-white shadow-2xl shadow-blue-900/30 lg:-mt-4 lg:pb-4"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {/* Top accent bar */}
                <span className={`absolute top-0 left-0 h-1 w-full ${plan.accentBar}`} />

                {/* Popular badge */}
                {plan.badge && (
                  <div className="flex justify-center pt-5">
                    <span className="rounded-full bg-amber-400 px-4 py-0.5 text-xs font-bold text-slate-900 shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-8 ${plan.badge ? "pt-4" : "pt-8"}`}>

                  {/* Plan icon + name */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      plan.highlighted ? "bg-blue-500/20 text-blue-300" : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" strokeWidth={2} />
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${
                      plan.highlighted ? "text-blue-300" : "text-slate-400"
                    }`}>
                      {plan.name}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1">
                    {plan.price === "Custom" ? (
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className={`text-xl font-bold leading-tight ${plan.highlighted ? "text-blue-300" : "text-slate-400"}`}>$</span>
                        <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                          {plan.price}
                        </span>
                        <span className={`mb-1.5 text-sm ${plan.highlighted ? "text-blue-300" : "text-slate-400"}`}>/mo</span>
                      </>
                    )}
                  </div>

                  {/* Hours badge */}
                  <span className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${plan.hoursBadge}`}>
                    {plan.hours}
                  </span>

                  {/* Description */}
                  <p className={`mt-4 text-sm leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className={`my-6 h-px ${plan.highlighted ? "bg-slate-700" : "bg-slate-100"}`} />

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 flex-none ${
                            plan.highlighted ? "text-emerald-400" : "text-emerald-500"
                          }`}
                          strokeWidth={2.5}
                        />
                        <span className={`text-sm ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/40"
                        : "bg-slate-900 text-white hover:bg-slate-700"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          All plans include the Eminence VA Solutions Workspace App · No setup fees · Cancel anytime
        </p>
      </div>
    </section>
  );
}