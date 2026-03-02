import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const plans = [
  {
    icon: Users,
    name: "Starter",
    price: "Flexible",
    hours: "Part-time support",
    description:
      "Ideal for founders who need dependable help a few hours a day — without hiring overhead.",
    features: [
      "1 dedicated assistant",
      "Part-time monthly hours",
      "Email & calendar support",
      "Task tracking & reporting",
      "Slack / chat coordination",
      "Month-to-month flexibility",
    ],
    cta: "Book a Free Consultation",
    highlighted: false,
    accentBar: "bg-slate-300",
    hoursBadge: "bg-slate-100 text-slate-600",
    options: [
      {
        key: "starter-hourly",
        label: "Hourly",
        value: "$8–$10/hr",
        bestFor: "Light support, ad-hoc tasks, and flexible hours.",
        details: [
          "Best for light support and ad-hoc tasks",
          "Pay only for hours used",
          "Inbox + calendar + admin support",
          "Flexible workload based on needs",
        ],
      },
      {
        key: "starter-weekly",
        label: "Weekly",
        value: "Start at $349/week",
        bestFor: "Founders who need consistent weekly coverage without full-time commitment.",
        details: [
          "Consistent weekly coverage",
          "Ideal for ongoing tasks & coordination",
          "Includes weekly reporting & task tracking",
          "Flexible weekly scope based on needs",
        ],
      },
      {
        key: "starter-monthly",
        label: "Monthly",
        value: " Start at $999/month",
        bestFor: "Best value for stable part-time support and steady execution.",
        details: [
          "Best value for steady part-time support",
          "Consistent availability & execution",
          "Monthly reporting + performance check-ins",
          "Month-to-month flexibility",
        ],
      },
    ],
  },
  {
    icon: Sparkles,
    name: "Professional",
    price: "Flexible",
    hours: "Full-time support",
    description:
      "Best for growing teams that need daily, reliable execution and consistent coverage.",
    features: [
      "1 dedicated full-time assistant",
      "Full-time monthly hours",
      "Everything in Starter",
      "Priority matching",
      "Ongoing performance support",
      "NDA available upon request",
      "Month-to-month flexibility",
    ],
    cta: "Get Matched With a VA",
    highlighted: true,
    badge: "Most Popular",
    accentBar: "bg-white/30",
    hoursBadge: "bg-white/20 text-white",
    options: [
      {
        key: "pro-basic",
        label: "Basic",
        value: "Core coverage",
        bestFor: "Stable daily execution and dependable coverage.",
        details: [
          "Admin + scheduling + coordination",
          "Standard success support",
          "Ideal for consistent day-to-day execution",
        ],
      },
      {
        key: "pro-advance",
        label: "Advance",
        value: "Specialized support",
        bestFor: "Teams that need role specialization and stronger reporting.",
        details: [
          "Adds specialized workflows (Sales/Marketing/Operations)",
          "Priority matching",
          "Enhanced reporting & process alignment",
        ],
      },
      {
        key: "pro-elite",
        label: "Elite",
        value: "High-performance",
        bestFor: "High-output teams that want the best matching + fastest onboarding.",
        details: [
          "Top-tier matching + priority onboarding",
          "SOP integration + operational structure",
          "Highest success support level",
        ],
      },
    ],
  },
  {
    icon: Building2,
    name: "Competitor Pricing",
    price: "Custom",
    hours: "Multiple assistants",
    description:
      "Compare typical competitor pricing and see why our managed support model delivers more value.",
    features: [
      "Competitor rate comparison",
      "Hidden cost breakdown (recruiting + churn)",
      "Managed performance support",
      "Security-first processes",
      "Coverage options & scalability",
      "Dedicated success support",
      "Custom billing options",
    ],
    cta: "Talk to an Expert",
    highlighted: false,
    accentBar: "bg-slate-300",
    hoursBadge: "bg-indigo-50 text-indigo-600",
    options: [
      {
        key: "competitor-view",
        label: "View",
        value: "Comparison",
        bestFor: "Teams comparing providers and wanting full transparency.",
        details: [
          "Competitors often charge extra for management and replacements",
          "Many don't include structured reporting or performance support",
          "We provide managed assistants + systems + accountability",
        ],
      },
    ],
  },
];

function Modal({ open, onClose, planName, label, price, bestFor, bullets = [] }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Enhanced backdrop with blur */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" />

      {/* Modal with gradient matching PromoVideo */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-[#289efd] to-[#0a3f82] shadow-2xl">
        {/* Gradient highlight effects - matching PromoVideo */}
        <div className="pointer-events-none absolute inset-0">
          {/* Soft top highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
          {/* Subtle side glow */}
          <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
        </div>

        {/* Subtle pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Header - Reduced padding */}
        <div className="relative flex items-start justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div>
            <div className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-white" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                {planName} • {label}
              </span>
            </div>
            <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white">
              Pricing Details
            </h3>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white hover:scale-105"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* Content - Reduced padding */}
        <div className="relative px-6 py-5">
          {/* Price emphasis - More compact */}
          <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-white/80">Selected Rate</p>
                  <p className="mt-1.5 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
                    {price}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Most Chosen
                </span>
              </div>

              {bestFor && (
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Best for
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white">{bestFor}</p>
                </div>
              )}
            </div>
          </div>

          {/* Included features - More compact */}
          <div className="mt-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                What's Included
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <ul className="space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-400/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs leading-relaxed text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons - More compact */}
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#289efd] shadow-xl transition-all hover:scale-[1.02] hover:bg-white/95"
            >
              Continue to Consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Close
            </button>
          </div>

          {/* Disclaimer - More compact */}
          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] leading-relaxed text-white/70">
              <span className="font-semibold text-white/90">Note:</span> Final pricing may
              vary depending on role complexity, hours required, and specialization needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureList({ features, highlighted, planKey, expanded, setExpanded }) {
  const showCount = 4;
  const isExpanded = !!expanded[planKey];
  const visible = isExpanded ? features : features.slice(0, showCount);
  const hasMore = features.length > showCount;

  return (
    <div>
      <ul className="space-y-2.5">
        {visible.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 flex-none ${
                highlighted ? "text-white" : "text-emerald-500"
              }`}
              strokeWidth={2.5}
            />
            <span
              className={`text-[13px] leading-relaxed ${
                highlighted ? "text-white/90" : "text-slate-600"
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => ({ ...prev, [planKey]: !prev[planKey] }))}
          className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold transition-all hover:gap-3 ${
            highlighted ? "text-white/90 hover:text-white" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View all features <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    planName: "",
    label: "",
    price: "",
    bestFor: "",
    bullets: [],
  });

  const [expanded, setExpanded] = useState({});

  const openModal = ({ planName, label, value, details, bestFor }) => {
    setModalData({
      planName,
      label,
      price: value,
      bestFor,
      bullets: details || [],
    });
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50 py-16">
      {/* Enhanced grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(40, 158, 253, 0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#289efd]" />
            Flexible Plans
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans &{" "}
            <span className="bg-gradient-to-r from-[#289efd] to-[#1e7dd8] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Select a rate or tier to view detailed inclusions and pricing context.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-[#289efd]/30 bg-gradient-to-b from-[#289efd] to-[#0a3f82] text-white shadow-2xl shadow-[#289efd]/25 lg:-mt-4 lg:scale-105"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-slate-300"
                }`}
              >
                {/* Accent bar */}
                <span className={`absolute top-0 left-0 h-1.5 w-full ${plan.accentBar}`} />

                {/* Highlighted card with gradient effects - matching PromoVideo */}
                {plan.highlighted && (
                  <>
                    {/* Gradient highlight effects */}
                    <div className="pointer-events-none absolute inset-0">
                      {/* Soft top highlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
                      {/* Subtle side glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
                    </div>
                    
                    {/* Dot pattern */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-5"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </>
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="flex justify-center pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`relative flex flex-1 flex-col p-7 ${plan.badge ? "pt-4" : "pt-7"}`}>
                  {/* Icon + name */}
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                        plan.highlighted
                          ? "bg-white/20 text-white backdrop-blur-sm"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${
                        plan.highlighted ? "text-white/90" : "text-slate-400"
                      }`}
                    >
                      {plan.name}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-4xl font-extrabold tracking-tight ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price === "Custom" ? "Custom" : "Flexible"}
                    </span>
                    <span
                      className={`mb-1.5 text-xs font-medium ${
                        plan.highlighted ? "text-white/80" : "text-slate-400"
                      }`}
                    >
                      pricing
                    </span>
                  </div>

                  {/* Hours badge */}
                  <span
                    className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold ${plan.hoursBadge}`}
                  >
                    {plan.hours}
                  </span>

                  {/* Description */}
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      plan.highlighted ? "text-white/90" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Options selector */}
                  {plan.options?.length > 0 && (
                    <div className="mt-5">
                      <p
                        className={`mb-3 text-xs font-medium ${
                          plan.highlighted ? "text-white/80" : "text-slate-400"
                        }`}
                      >
                        Click a button below to view pricing details
                      </p>

                      <div className="grid grid-cols-3 gap-2">
                        {plan.options.map((opt) => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() =>
                              openModal({
                                planName: plan.name,
                                label: opt.label,
                                value: opt.value,
                                details: opt.details,
                                bestFor: opt.bestFor,
                              })
                            }
                            className={`group/btn rounded-xl border px-3 py-2.5 text-left transition-all ${
                              plan.highlighted
                                ? "border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-[1.02]"
                                : "border-slate-200 bg-slate-50 hover:bg-white hover:border-[#289efd]/30 hover:shadow-md"
                            }`}
                          >
                            <div
                              className={`text-xs font-bold ${
                                plan.highlighted ? "text-white" : "text-slate-700"
                              }`}
                            >
                              {opt.label}
                            </div>
                            <div
                              className={`mt-1 text-[11px] leading-tight ${
                                plan.highlighted ? "text-white/80" : "text-slate-500"
                              }`}
                            >
                              {opt.value}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Divider */}
                  <div
                    className={`my-5 h-px ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        : "bg-slate-100"
                    }`}
                  />

                  {/* Features */}
                  <FeatureList
                    features={plan.features}
                    highlighted={plan.highlighted}
                    planKey={plan.name}
                    expanded={expanded}
                    setExpanded={setExpanded}
                  />

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`group/cta mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? "bg-white text-[#289efd] shadow-white/20 hover:bg-white/95"
                        : "bg-[#289efd] text-white shadow-[#289efd]/30 hover:bg-[#1e7dd8]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Pricing varies by hours, role complexity, and specialization (Legal / Real Estate /
          Client Support).
        </p>
      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={modalData.planName}
        label={modalData.label}
        price={modalData.price}
        bestFor={modalData.bestFor}
        bullets={modalData.bullets}
      />
    </section>
  );
}