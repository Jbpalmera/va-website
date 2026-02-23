import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The bilingual aspect and the flexibility has been incredibly beneficial for us. Our assistant handles both English and Spanish clients seamlessly.",
    name: "Isaiah Brooks",
    company: "Tron Solar",
    initials: "IB",
    role: "Founder & CEO",
    avatarBg: "bg-blue-600",
    accentBorder: "border-blue-100",
    accentBar: "bg-blue-500",
    quoteBg: "bg-blue-50",
    quoteText: "text-blue-500",
  },
  {
    quote: "I've been with Wing for about two years and my assistants are all fantastic. They've become an indispensable part of our daily operations.",
    name: "Ashley Jones",
    company: "La Jolla Group",
    initials: "AJ",
    role: "Operations Director",
    avatarBg: "bg-violet-600",
    accentBorder: "border-violet-100",
    accentBar: "bg-violet-500",
    quoteBg: "bg-violet-50",
    quoteText: "text-violet-500",
  },
  {
    quote: "Eminence VA Solutions general and executive assistants are extremely talented and affordable. Best decision we made for our growing team.",
    name: "Andrew Wolfe",
    company: "Drone Brothers",
    initials: "AW",
    role: "Co-Founder",
    avatarBg: "bg-emerald-600",
    accentBorder: "border-emerald-100",
    accentBar: "bg-emerald-500",
    quoteBg: "bg-emerald-50",
    quoteText: "text-emerald-500",
  },
  {
    quote: "I have 4 assistants from Wing and they have really turned my business around. The quality and reliability is unmatched.",
    name: "Hannah Francois",
    company: "Honey Nation Inc.",
    initials: "HF",
    role: "Business Owner",
    avatarBg: "bg-rose-600",
    accentBorder: "border-rose-100",
    accentBar: "bg-rose-500",
    quoteBg: "bg-rose-50",
    quoteText: "text-rose-500",
  },
  {
    quote: "The recruitment process was absolutely wonderful. I recommend Wing to every entrepreneur I know who needs operational support.",
    name: "Carlos Baltazar",
    company: "Provida Family Medicine",
    initials: "CB",
    role: "Medical Director",
    avatarBg: "bg-amber-600",
    accentBorder: "border-amber-100",
    accentBar: "bg-amber-500",
    quoteBg: "bg-amber-50",
    quoteText: "text-amber-500",
  },
  {
    quote: "I can't recommend them enough. They are absolutely incredible. The onboarding was smooth and our VA was productive from week one.",
    name: "TJ Jorgensen",
    company: "TJ21 Media Group",
    initials: "TJ",
    role: "Creative Director",
    avatarBg: "bg-cyan-600",
    accentBorder: "border-cyan-100",
    accentBar: "bg-cyan-500",
    quoteBg: "bg-cyan-50",
    quoteText: "text-cyan-500",
  },
];

const stats = [
  { value: "4.8★", label: "Average Rating" },
  { value: "5,000+", label: "Businesses Served" },
  { value: "98%", label: "Client Retention" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f8fafc 1px, transparent 1px), linear-gradient(to bottom, #f8fafc 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Client Stories
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Real Results, Real{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Hear how our assistants help businesses thrive every single day.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-10 border-y border-slate-100 py-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${t.accentBorder}`}
            >
              {/* Top accent bar */}
              <span className={`absolute top-0 left-0 h-0.5 w-full ${t.accentBar}`} />

              {/* Quote icon */}
              <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl ${t.quoteBg}`}>
                <Quote className={`h-4 w-4 ${t.quoteText}`} strokeWidth={2} />
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote text */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${t.avatarBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                </div>
              </div>

              {/* Hover sweep */}
              <span className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${t.accentBar}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}