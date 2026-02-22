import {
  Home, Stethoscope, User, Briefcase,
  Megaphone, Phone, BookOpen, Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Real Estate Assistant",
    description: "Property listings, client follow-ups, and scheduling handled end-to-end.",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentHover: "group-hover:bg-blue-600",
    badgeBg: "bg-blue-100 text-blue-700",
    bar: "bg-blue-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Assistant",
    description: "Coordinate appointments, data-entry, and insurance filing with ease.",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100",
    accentHover: "group-hover:bg-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-700",
    bar: "bg-emerald-500",
  },
  {
    icon: User,
    title: "Personal Assistant",
    description: "Manages your calendar both at work and outside of it, around the clock.",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    accentHover: "group-hover:bg-violet-600",
    badgeBg: "bg-violet-100 text-violet-700",
    bar: "bg-violet-500",
  },
  {
    icon: Briefcase,
    title: "Executive Assistant",
    description: "Expert-tier talent for presentations, proposals, and high-level tasks.",
    accentColor: "text-slate-700",
    accentBg: "bg-slate-100",
    accentBorder: "border-slate-200",
    accentHover: "group-hover:bg-slate-700",
    badgeBg: "bg-slate-200 text-slate-700",
    bar: "bg-slate-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing VA",
    description: "Experts in PPC ads, email marketing, social media, and growth strategies.",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-100",
    accentHover: "group-hover:bg-rose-600",
    badgeBg: "bg-rose-100 text-rose-700",
    bar: "bg-rose-500",
  },
  {
    icon: Phone,
    title: "Sales Development Rep",
    description: "Engages prospects, grows your pipeline, and drives consistent revenue.",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-100",
    accentHover: "group-hover:bg-amber-600",
    badgeBg: "bg-amber-100 text-amber-700",
    bar: "bg-amber-500",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Assistant",
    description: "Tracks expenses, maintains your books, and reconciles statements monthly.",
    accentColor: "text-cyan-600",
    accentBg: "bg-cyan-50",
    accentBorder: "border-cyan-100",
    accentHover: "group-hover:bg-cyan-600",
    badgeBg: "bg-cyan-100 text-cyan-700",
    bar: "bg-cyan-500",
  },
  {
    icon: Headphones,
    title: "Customer Service Rep",
    description: "Responsive, professional support for queries, complaints, and feedback.",
    accentColor: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100",
    accentHover: "group-hover:bg-indigo-600",
    badgeBg: "bg-indigo-100 text-indigo-700",
    bar: "bg-indigo-500",
  },
];

export default function MoreServices() {
  return (
    <section id="more-va" className="relative overflow-hidden bg-white py-20">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            25+ Specialized Plans
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            More Virtual Assistant{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            We offer 25+ distinct plans across sales, marketing, customer service,
            and operations. Speak to an expert to find your perfect fit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${s.accentBorder}`}
              >
                {/* Top accent bar */}
                <span className={`absolute top-0 left-0 h-0.5 w-full ${s.bar}`} />

                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${s.accentBg} ${s.accentBorder} ${s.accentColor}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-sm font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-xs leading-relaxed text-slate-500">
                  {s.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 self-start rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${s.badgeBg} hover:gap-2.5`}
                >
                  Book a Call
                  <ArrowRight className="h-3 w-3" />
                </a>

                {/* Hover bottom sweep line */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${s.bar}`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}