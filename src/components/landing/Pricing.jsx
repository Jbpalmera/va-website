import React, { useId, useEffect, useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  X,
  ChevronDown,
  ChevronUp,
  Clock3,
  ShieldCheck,
} from "lucide-react";

/** Metallic gold gradient for Lucide (stroke-based) SVG icons */
function MetallicGoldIcon({ Icon, className = "", strokeWidth = 2.5 }) {
  const gid = useId();

  return (
    <Icon
      className={className}
      strokeWidth={strokeWidth}
      stroke={`url(#gold-${gid})`}
      fill="none"
    >
      <defs>
        <linearGradient id={`gold-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7E7A1" />
          <stop offset="28%" stopColor="#E3C766" />
          <stop offset="55%" stopColor="#C9A227" />
          <stop offset="78%" stopColor="#9E7C12" />
          <stop offset="100%" stopColor="#F7E7A1" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

const plans = [
  {
    icon: Clock3,
    name: "Flexible Part-Time Support",
    price: "Flexible",
    hours: "Part-time assistance",
    description:
      "Designed for businesses that need reliable support for a few hours per day or for specific operational tasks.",
    features: [
      "Ideal for startups, small businesses, and lean teams",
      "Email and calendar management",
      "Administrative assistance",
      "CRM updates and task tracking",
      "Client communication support",
      "Lead generation or outreach assistance",
      "Reporting and operational coordination",
      "Customized engagement based on workload and hours needed",
      "Cost-efficient support without unnecessary overhead",
    ],
    cta: "Book a Free Consultation",
    highlighted: false,
    accentBar: "bg-slate-300",
    hoursBadge: "bg-slate-100 text-slate-600",
    options: [
      {
        key: "part-time-overview",
        label: "Overview",
        value: "Flexible & negotiable",
        bestFor:
          "Businesses that need occasional support without committing to a full-time assistant.",
        details: [
          "Flexible service structure based on workload",
          "Support can be adjusted by hours and task type",
          "No rigid package limitations",
          "Built for efficient support with lower overhead",
        ],
      },
      {
        key: "part-time-support",
        label: "Support Includes",
        value: "Core operational help",
        bestFor:
          "Teams needing dependable admin and communication support a few hours at a time.",
        details: [
          "Email and calendar management",
          "Administrative assistance",
          "CRM updates and task tracking",
          "Client communication support",
          "Lead generation or outreach assistance",
          "Reporting and operational coordination",
        ],
      },
      {
        key: "part-time-fit",
        label: "Best For",
        value: "Startups & small teams",
        bestFor:
          "Startups, small businesses, or teams requiring occasional support.",
        details: [
          "Best for startups and small businesses",
          "Useful for recurring but lighter workloads",
          "Great for businesses testing delegation before scaling",
          "Supports growth without full-time hiring",
        ],
      },
    ],
  },
  {
    icon: Users,
    name: "Dedicated Full-Time Support",
    price: "Flexible",
    hours: "Full-time daily support",
    description:
      "For growing businesses that require consistent daily assistance and a dedicated assistant integrated into their workflow.",
    features: [
      "1 dedicated Virtual Assistant assigned to your team",
      "Full-time operational support",
      "CRM management and process coordination",
      "Client onboarding and follow-ups",
      "Administrative and operational task execution",
      "Performance tracking and reporting",
      "Matched based on your business needs and required skill set",
      "Designed for consistent daily execution and team integration",
    ],
    cta: "Get Matched With a VA",
    highlighted: true,
    badge: "Most Popular",
    accentBar: "bg-white/30",
    hoursBadge: "bg-white/20 text-white",
    options: [
      {
        key: "full-time-overview",
        label: "Overview",
        value: "Flexible & negotiable",
        bestFor:
          "Growing companies that need a dedicated assistant integrated into daily operations.",
        details: [
          "Dedicated assistant matched to your business",
          "Consistent daily operational coverage",
          "Structured support for ongoing workflows",
          "Flexible setup based on role complexity and business needs",
        ],
      },
      {
        key: "full-time-support",
        label: "Support Includes",
        value: "Daily execution",
        bestFor:
          "Teams that need reliable day-to-day execution across admin and operations.",
        details: [
          "Full-time operational support",
          "CRM management and process coordination",
          "Client onboarding and follow-ups",
          "Administrative and operational task execution",
          "Performance tracking and reporting",
        ],
      },
      {
        key: "full-time-fit",
        label: "Best For",
        value: "Growing businesses",
        bestFor:
          "Companies looking to scale operations while maintaining efficiency.",
        details: [
          "Ideal for growing companies",
          "Provides stable execution and coverage",
          "Reduces bottlenecks in operations",
          "Supports scale without adding internal hiring complexity",
        ],
      },
    ],
  },
  {
    icon: Building2,
    name: "Managed Team Support",
    price: "Custom",
    hours: "Multiple assistants / custom setup",
    description:
      "Custom-built support structures for businesses that need multiple assistants or specialized operational teams.",
    features: [
      "Multiple Virtual Assistants with specialized roles",
      "Structured workflow and task management",
      "Operational oversight and coordination",
      "Performance monitoring and reporting",
      "Secure processes for handling sensitive information",
      "Custom-built structure aligned with client requirements",
      "Ideal for law firms, financial service companies, real estate firms, and scaling organizations",
    ],
    cta: "Talk to an Expert",
    highlighted: false,
    accentBar: "bg-slate-300",
    hoursBadge: "bg-indigo-50 text-indigo-600",
    options: [
      {
        key: "managed-overview",
        label: "Overview",
        value: "Custom solutions",
        bestFor:
          "Organizations that need multiple assistants or department-style support.",
        details: [
          "Custom team structure based on your operational needs",
          "Built for scale and specialized roles",
          "Suitable for more complex internal workflows",
          "Designed to reduce the burden of hiring internally",
        ],
      },
      {
        key: "managed-support",
        label: "Support Includes",
        value: "Structured team support",
        bestFor:
          "Businesses that need coordination, oversight, and multiple support functions.",
        details: [
          "Multiple Virtual Assistants with specialized roles",
          "Structured workflow and task management",
          "Operational oversight and coordination",
          "Performance monitoring and reporting",
          "Secure processes for sensitive information",
        ],
      },
      {
        key: "managed-fit",
        label: "Best For",
        value: "Firms with growing demands",
        bestFor:
          "Law firms, financial service companies, real estate firms, and businesses with increasing operational demands.",
        details: [
          "Ideal for organizations with growing workload complexity",
          "Useful when one assistant is no longer enough",
          "Enables scalable support with accountability",
          "Reduces internal hiring and management pressure",
        ],
      },
    ],
  },
];

const pricingFactors = [
  "Scope of work",
  "Required hours",
  "Level of specialization",
  "Operational complexity",
];

const simpleTerms = [
  {
    title: "Flexible Support",
    description: "Part-time assistance when needed",
  },
  {
    title: "Dedicated Support",
    description: "Full-time assistant integrated into your team",
  },
  {
    title: "Managed Teams",
    description: "Multiple assistants with structured operational support",
  },
];

function Modal({
  open,
  onClose,
  planName,
  label,
  price,
  bestFor,
  bullets = [],
}) {
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
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-[#289efd] to-[#0a3f82] shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

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

        <div className="relative px-6 py-5">
          <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-white/80">
                    Selected Option
                  </p>
                  <p className="mt-1.5 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
                    {price}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Flexible
                </span>
              </div>

              {bestFor && (
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Best for
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white">
                    {bestFor}
                  </p>
                </div>
              )}
            </div>
          </div>

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
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-emerald-300"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-xs leading-relaxed text-white/90">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

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

          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] leading-relaxed text-white/70">
              <span className="font-semibold text-white/90">Note:</span> Final
              pricing is determined by scope of work, required hours, level of
              specialization, and operational complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureList({
  features,
  highlighted,
  planKey,
  expanded,
  setExpanded,
}) {
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
          onClick={() =>
            setExpanded((prev) => ({ ...prev, [planKey]: !prev[planKey] }))
          }
          className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold transition-all hover:gap-3 ${
            highlighted
              ? "text-white/90 hover:text-white"
              : "text-slate-500 hover:text-slate-900"
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

  const GOLD_TEXT =
    "bg-gradient-to-br from-[#F7E7A1] via-[#C9A227] to-[#9E7C12] bg-clip-text text-transparent";

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 py-16"
    >
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#289efd]" />
            Flexible Service Plans
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Flexible &{" "}
            <span className="bg-gradient-to-r from-[#289efd] to-[#1e7dd8] bg-clip-text text-transparent">
              Negotiable Pricing
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            We offer flexible service structures designed to align with your
            workload, budget, and growth goals instead of locking you into rigid
            packages.
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
                <span
                  className={`absolute top-0 left-0 h-1.5 w-full ${plan.accentBar}`}
                />

                {plan.highlighted && (
                  <>
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
                    </div>

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

                {plan.badge && (
                  <div className="flex justify-center pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`relative flex flex-1 flex-col p-7 ${
                    plan.badge ? "pt-4" : "pt-7"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062d60] shadow-sm ring-1 ring-white/10">
                      <MetallicGoldIcon
                        Icon={Icon}
                        className="h-5 w-5"
                        strokeWidth={2.4}
                      />
                    </div>

                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${
                        plan.highlighted ? "text-white/90" : "text-slate-400"
                      }`}
                    >
                      {plan.name}
                    </p>
                  </div>

                  {plan.highlighted ? (
                    <div className="flex items-end gap-3 flex-wrap">
                      <span className="inline-flex items-center rounded-xl bg-[#062d60] px-4 py-2 shadow-sm ring-1 ring-white/10">
                        <span
                          className={`text-4xl font-extrabold tracking-tight ${GOLD_TEXT}`}
                        >
                          {plan.price}
                        </span>
                      </span>
                      <span className="mb-1.5 text-xs font-medium text-white/80">
                        pricing
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-end gap-3 flex-wrap">
                      <span className="inline-flex items-center rounded-xl bg-[#289efd] px-4 py-2 shadow-sm">
                        <span className="text-4xl font-extrabold tracking-tight text-white">
                          {plan.price}
                        </span>
                      </span>
                      <span className="mb-1.5 text-xs font-medium text-slate-400">
                        pricing
                      </span>
                    </div>
                  )}

                  <span
                    className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold ${plan.hoursBadge}`}
                  >
                    {plan.hours}
                  </span>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      plan.highlighted ? "text-white/90" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {plan.options?.length > 0 && (
                    <div className="mt-5">
                      <p
                        className={`mb-3 text-xs font-medium ${
                          plan.highlighted ? "text-white/80" : "text-slate-400"
                        }`}
                      >
                        Click a button below to view details
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
                                plan.highlighted
                                  ? "text-white"
                                  : "text-slate-700"
                              }`}
                            >
                              {opt.label}
                            </div>
                            <div
                              className={`mt-1 text-[11px] leading-tight ${
                                plan.highlighted
                                  ? "text-white/80"
                                  : "text-slate-500"
                              }`}
                            >
                              {opt.value}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className={`my-5 h-px ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        : "bg-slate-100"
                    }`}
                  />

                  <FeatureList
                    features={plan.features}
                    highlighted={plan.highlighted}
                    planKey={plan.name}
                    expanded={expanded}
                    setExpanded={setExpanded}
                  />

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

        {/* Transparent & Competitive Pricing */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Transparent & Competitive Pricing
              </span>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
                Pricing Built Around Your Actual Needs
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                We believe pricing should be fair, transparent, and aligned with
                the value provided. Final pricing is determined by the factors
                below so you only pay for the level of support your business
                truly needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pricingFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                    <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* In simple terms */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {simpleTerms.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Final pricing varies based on workload, hours required, specialization,
          and operational complexity.
        </p>
      </div>

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