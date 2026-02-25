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
    accentBar: "bg-blue-400",
    hoursBadge: "bg-blue-500/20 text-blue-200",
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
    accentBar: "bg-indigo-400",
    hoursBadge: "bg-indigo-50 text-indigo-600",
    options: [
      {
        key: "competitor-view",
        label: "View",
        value: "Comparison",
        bestFor: "Teams comparing providers and wanting full transparency.",
        details: [
          "Competitors often charge extra for management and replacements",
          "Many don’t include structured reporting or performance support",
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b172a] shadow-2xl">
        {/* Top glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-blue-500/25 to-transparent" />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 px-6 pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              {planName} • {label}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
              Pricing Details
            </h3>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Price emphasis */}
        <div className="relative mt-5 px-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white/70">Selected Rate</p>

                {/* PRICE */}
                <p className="mt-1 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  {price}
                </p>
              </div>

              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
                Most chosen
              </span>
            </div>

            {bestFor && (
              <div className="rounded-xl bg-black/20 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Best for
                </p>
                <p className="mt-1 text-sm text-white/80">{bestFor}</p>
              </div>
            )}
          </div>
        </div>

        {/* Included */}
        <div className="relative px-6 py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
            Included
          </p>

          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                <span className="text-sm leading-relaxed text-white/80">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
            >
              Continue to Consultation
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Final pricing may vary depending on role complexity and hours required.
          </p>
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
      <ul className="space-y-2">
        {visible.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 flex-none ${
                highlighted ? "text-emerald-400" : "text-emerald-500"
              }`}
              strokeWidth={2.5}
            />
            <span className={`text-[13px] ${highlighted ? "text-slate-200" : "text-slate-600"}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => ({ ...prev, [planKey]: !prev[planKey] }))}
          className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold transition ${
            highlighted ? "text-blue-200 hover:text-white" : "text-slate-500 hover:text-slate-900"
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

  // ✅ FIXED openModal (passes price)
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
      {/* grid */}
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
            "radial-gradient(ellipse 70% 50% at 50% 0%, #f8fafc 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Flexible Plans
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-500">
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
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-blue-500 bg-slate-900 text-white shadow-2xl shadow-blue-900/25 lg:-mt-3"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {/* accent */}
                <span className={`absolute top-0 left-0 h-1 w-full ${plan.accentBar}`} />

                {/* badge */}
                {plan.badge && (
                  <div className="flex justify-center pt-4">
                    <span className="rounded-full bg-amber-400 px-4 py-0.5 text-xs font-bold text-slate-900 shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`flex flex-1 flex-col p-6 ${plan.badge ? "pt-3" : "pt-6"}`}>
                  {/* icon + name */}
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        plan.highlighted
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${
                        plan.highlighted ? "text-blue-300" : "text-slate-400"
                      }`}
                    >
                      {plan.name}
                    </p>
                  </div>

                  {/* price */}
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-3xl font-extrabold tracking-tight ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price === "Custom" ? "Custom" : "Flexible"}
                    </span>
                    <span
                      className={`mb-1 text-xs ${
                        plan.highlighted ? "text-blue-300" : "text-slate-400"
                      }`}
                    >
                      pricing
                    </span>
                  </div>

                  {/* hours badge */}
                  <span
                    className={`mt-2 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${plan.hoursBadge}`}
                  >
                    {plan.hours}
                  </span>

                  {/* description */}
                  <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  {/* selector */}
                  {plan.options?.length > 0 && (
                    <div className="mt-4">
                      <p className={`mb-2 text-[11px] font-semibold uppercase tracking-widest ${plan.highlighted ? "text-white/60" : "text-slate-400"}`}>
                        Select {plan.name === "Starter" ? "a rate" : "a tier"}
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
                            className={`rounded-xl border px-3 py-2 text-left transition ${
                              plan.highlighted
                                ? "border-white/10 bg-white/5 hover:bg-white/10"
                                : "border-slate-200 bg-slate-50 hover:bg-white"
                            }`}
                          >
                            <div className={`text-xs font-semibold ${plan.highlighted ? "text-white" : "text-slate-700"}`}>
                              {opt.label}
                            </div>
                            <div className={`mt-1 text-[11px] ${plan.highlighted ? "text-white/70" : "text-slate-500"}`}>
                              {opt.value}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* divider */}
                  <div className={`my-4 h-px ${plan.highlighted ? "bg-slate-700" : "bg-slate-100"}`} />

                  {/* features (collapsed by default) */}
                  <FeatureList
                    features={plan.features}
                    highlighted={plan.highlighted}
                    planKey={plan.name}
                    expanded={expanded}
                    setExpanded={setExpanded}
                  />

                  {/* CTA pinned to bottom */}
                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/30"
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

        <p className="mt-6 text-center text-xs text-slate-400">
          Pricing varies by hours, role complexity, and specialization (Legal / Real Estate / Client Support).
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