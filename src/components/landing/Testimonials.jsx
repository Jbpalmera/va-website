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
    <section className="relative overflow-hidden bg-white py-20">
      {/* Subtle background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 0%, #f8fafc 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Testimonials
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by teams that value{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              reliable execution
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Here’s what business owners and operators say after working with Eminence VA Solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm"
            >
              <p className="text-sm font-bold text-slate-900">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  <BadgeCheck className="h-4 w-4 text-blue-600" />
                  Verified client feedback
                </div>

                <div className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                  5.0
                  <span className="text-amber-300">★</span>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-5 flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-blue-50">
                  <Quote className="h-4 w-4 text-blue-600" strokeWidth={2} />
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  “{t.quote}”
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="truncate text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 w-0 rounded-b-3xl bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-500">
            Ready to delegate with confidence?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}