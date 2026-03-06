import React, { useId } from "react";
import {
  Scale,
  Home,
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  ShieldCheck,
  Calculator,
  Landmark,
  Languages,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

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

const industries = [
  {
    title: "Law Firms",
    tagline: "Reliable legal admin for fast-moving practices.",
    icon: Scale,
    services: ["Lemon Law", "Immigration Law", "ADA Compliance", "Civil Litigation"],
  },
  {
    title: "Credit Repair Companies",
    tagline: "Scale your credit repair operations efficiently.",
    icon: BadgeDollarSign,
    services: ["Credit Report Analysis", "Dispute Letters", "Client Onboarding", "CRM Management"],
  },
  {
    title: "Business Funding & Financial",
    tagline: "Support funding workflows and client readiness.",
    icon: Landmark,
    services: ["Profile Review", "Funding Applications", "Lender Coordination", "Doc Verification"],
  },
  {
    title: "Debt Relief & Settlement",
    tagline: "Structured support for enrollment and documentation.",
    icon: ShieldCheck,
    services: ["Debt Settlement", "Debt Management Plans", "Restructuring", "Program Enrollment"],
  },
  {
    title: "Real Estate & Investors",
    tagline: "Lead handling and transaction coordination.",
    icon: Home,
    services: ["Cold Calling & Lead Gen", "Seller Qualification", "Transaction Coordination", "CRM Management"],
  },
  {
    title: "Tax Preparation & Accounting",
    tagline: "Dependable admin support during tax season.",
    icon: Calculator,
    services: ["Client Intake", "W-2 / 1099 Data Entry", "Bookkeeping Prep", "Tax Season Admin"],
  },
  {
    title: "Startups & Growing Businesses",
    tagline: "Flexible support without full-time overhead.",
    icon: BriefcaseBusiness,
    services: ["Customer Support", "Appointment Setting", "Lead Generation", "Admin Assistance"],
  },
  {
    title: "Spanish-Speaking Markets",
    tagline: "Bilingual support that expands your client reach.",
    icon: Languages,
    services: ["Bilingual VAs", "Law Firm Support", "Real Estate Support", "Financial Services"],
  },
];

const shortList = [
  "Law Firms",
  "Credit Repair Companies",
  "Business Funding Firms",
  "Debt Relief Companies",
  "Real Estate Agencies & Investors",
  "Tax Preparation Firms",
  "Financial Consulting Firms",
  "Startups & Growing Businesses",
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#e8f1fc] py-24">
      {/* Grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dde8f5 1px, transparent 1px), linear-gradient(to bottom, #dde8f5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#289efd]" />
            Industries We Serve
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Specialized VA Support For{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                High-Trust Industries
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-blue-100 opacity-60"
              />
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Our Virtual Assistants are trained for specialized industries that demand
            reliability, confidentiality, and operational excellence.
          </p>
        </div>

        {/* Cards — 4-col grid, all cards identical structure */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Top gradient band */}
                <div className="relative flex-none bg-gradient-to-br from-[#289efd] to-[#0a3f82] px-5 pt-5 pb-9">
                  <span className="absolute right-3 top-2 select-none text-[64px] font-black leading-none text-white/10">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062d60] shadow ring-1 ring-white/10">
                    <MetallicGoldIcon Icon={Icon} className="h-[18px] w-[18px]" strokeWidth={2.4} />
                  </div>

                  {/* Fixed-height text block so all headers are same size */}
                  <div className="mt-4 h-[76px]">
                    <h3 className="text-[16px] font-extrabold leading-snug text-white line-clamp-2">
                      {industry.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/70 line-clamp-2">
                      {industry.tagline}
                    </p>
                  </div>
                </div>

                {/* Wave divider */}
                <div className="-mt-4 flex-none">
                  <svg viewBox="0 0 400 16" preserveAspectRatio="none" className="h-4 w-full" aria-hidden>
                    <path d="M0,16 C133,0 266,0 400,16 L400,16 L0,16 Z" fill="white" />
                  </svg>
                </div>

                {/* Body — always exactly 4 rows */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                  <ul className="space-y-2">
                    {industry.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-lg border border-blue-50 bg-[#f0f6ff] px-3 py-2.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 flex-none text-[#289efd]" strokeWidth={2.5} />
                        <span className="text-[12px] font-semibold leading-none text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover CTA */}
                  <div className="mt-4 h-5">
                    <a
                      href="#contact"
                      className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      Book Free Consultation
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short list panel */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Quick Overview
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
                We Commonly Work With
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Our assistants are matched to organizations that need confidentiality,
                responsiveness, and structured operational support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {shortList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white text-emerald-500 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="text-sm text-slate-400">
            Need help choosing the right industry-specific VA support model?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
          >
            Get Matched With a VA
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}