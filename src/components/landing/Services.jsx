import {
  Mail, CalendarDays, Plane,
  Search, ShoppingCart, FileSpreadsheet,
  LayoutDashboard, Receipt, Timer,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    label: "01",
    title: "Communication\n& Scheduling",
    tagline: "Never miss a meeting or message again",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-blue-500",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    borderAccent: "border-blue-100",
    chipBg: "bg-blue-600/20",
    tasks: [
      { icon: CalendarDays, label: "Calendar Management" },
      { icon: Mail,         label: "Email & Call Handling" },
      { icon: Plane,        label: "Travel Arrangements" },
    ],
  },
  {
    label: "02",
    title: "Research &\nAdministrative",
    tagline: "Insights and docs, ready when you need them",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-indigo-500",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-600",
    borderAccent: "border-indigo-100",
    chipBg: "bg-indigo-500/20",
    tasks: [
      { icon: Search,          label: "Research & Reports" },
      { icon: ShoppingCart,    label: "Order Products & Supplies" },
      { icon: FileSpreadsheet, label: "Spreadsheets & Docs" },
    ],
  },
  {
    label: "03",
    title: "Business\nOperations",
    tagline: "Keep your systems tight and running smooth",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
    borderAccent: "border-emerald-100",
    chipBg: "bg-emerald-500/20",
    tasks: [
      { icon: LayoutDashboard, label: "CRM Updates" },
      { icon: Receipt,         label: "Expenses & Invoicing" },
      { icon: Timer,           label: "Billable Hours Tracking" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          {/* <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            What We Handle
          </span> */}
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Tasks You Can{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Delegate Today
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-blue-100 opacity-60"
              />
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500">
            From inbox zero to CRM updates — your assistant is trained and ready
            to take these off your plate from day one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${cat.borderAccent}`}
            >
              {/* Gradient header */}
              <div className={`relative bg-gradient-to-br ${cat.gradient} px-7 pt-8 pb-12`}>
                {/* Number watermark */}
                <span className="absolute right-4 top-3 text-7xl font-black leading-none text-white/10 select-none">
                  {cat.label}
                </span>

                {/* Icon row */}
                <div className="flex items-center gap-2.5">
                  {cat.tasks.map(({ icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm"
                    >
                      <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
                    </div>
                  ))}
                </div>

                {/* Title & tagline */}
                <h3 className="mt-5 whitespace-pre-line text-2xl font-extrabold leading-tight text-white">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/70">{cat.tagline}</p>
              </div>

              {/* Wave cutout */}
              <div className="relative -mt-5 bg-white">
                <svg
                  viewBox="0 0 400 20"
                  preserveAspectRatio="none"
                  className="absolute -top-5 left-0 h-10 w-full"
                  aria-hidden
                >
                  <path d="M0,20 C133,0 266,0 400,20 L400,20 L0,20 Z" className="fill-white" />
                </svg>
              </div>

              {/* Task list */}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-3">
                <ul className="space-y-2.5">
                  {cat.tasks.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 ${cat.lightBg} ${cat.borderAccent}`}
                    >
                      <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white shadow-sm ${cat.lightText}`}>
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                {/* Hover CTA */}
                <a
                  href="#more-va"
                  className={`mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 ${cat.lightText}`}
                >
                  See more tasks
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-2.5">
          <p className="text-sm text-slate-400">
            And much more — we cover 25+ task categories
          </p>
          <a
            href="#more-va"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
          >
            View All Tasks
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}