import { Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "The bilingual aspect and the flexibility has been incredibly beneficial for us. Our assistant handles both English and Spanish clients seamlessly.",
    name: "Isaiah Brooks",
    company: "Tron Solar",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Our assistants have become an indispensable part of our daily operations. Reliable, professional, and consistent support.",
    name: "Ashley Jones",
    company: "La Jolla Group",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Eminence VA Solutions assistants are extremely talented and affordable. Best decision we made for our growing team.",
    name: "Andrew Wolfe",
    company: "Drone Brothers",
    role: "Co-Founder",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    quote:
      "The quality and reliability have helped us scale without operational stress. Highly recommended.",
    name: "Hannah Francois",
    company: "Honey Nation Inc.",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "The onboarding process was smooth and structured. Our assistant was productive from week one.",
    name: "Carlos Baltazar",
    company: "Provida Family Medicine",
    role: "Medical Director",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote:
      "Professional, organized, and a perfect extension of our team.",
    name: "TJ Jorgensen",
    company: "TJ21 Media Group",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

const stats = [
  { value: "US & Canada", label: "Primary Markets" },
  { value: "Dedicated VAs", label: "Role-aligned support" },
  { value: "Flexible", label: "Month-to-month options" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#efeefe] py-20">
      {/* Enhanced background with gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(40, 158, 253, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#289efd]" />
            Testimonials
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by teams that value{" "}
            <span className="bg-gradient-to-r from-[#289efd] to-[#1e7dd8] bg-clip-text text-transparent">
              reliable execution
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Here's what business owners and operators say after working with Eminence VA Solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm transition-all duration-300 hover:border-[#289efd]/30 hover:shadow-md"
            >
              <p className="text-sm font-bold text-[#289efd]">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#289efd]/30 hover:shadow-2xl"
            >
              {/* Animated gradient background on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(40, 158, 253, 0.05) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-[#289efd] backdrop-blur-sm">
                    <BadgeCheck className="h-4 w-4" />
                    Verified client
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-[#289efd] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    5.0
                    <span className="text-amber-300">★</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[#289efd] to-[#1e7dd8] shadow-sm">
                    <Quote className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700">
                    "{t.quote}"
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100 transition-all duration-300 group-hover:ring-[#289efd]/30"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced hover accent with glow */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 w-0 rounded-b-3xl bg-gradient-to-r from-[#289efd] to-[#1e7dd8] shadow-lg shadow-[#289efd]/50 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-slate-600">
            Ready to delegate with confidence?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#289efd] to-[#1e7dd8] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#289efd]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#289efd]/40"
          >
            Schedule a Free Consultation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}