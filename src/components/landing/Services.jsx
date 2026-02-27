import { Headphones, Scale, Home, ArrowRight, MessagesSquare, FileText, Users } from "lucide-react";

const categories = [
  {
    // label: "01",
    title: "Client Support\n& Revenue Specialists",
    tagline: "Strengthen relationships, improve response time, grow revenue",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-blue-500",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    borderAccent: "border-blue-100",
    tasks: [
      { icon: Headphones, label: "Customer Support & Inbox Coverage" },
      { icon: MessagesSquare, label: "Live Chat + Ticket Management" },
      { icon: Users, label: "Follow-ups, Retention & Lead Support" },
    ],
  },
  {
    // label: "02",
    title: "Specialized\nLegal Virtual Assistants",
    tagline: "Structured legal admin support for fast-moving casework",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-indigo-500",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-600",
    borderAccent: "border-indigo-100",
    tasks: [
      { icon: FileText, label: "Intake, Documentation & Case Admin" },
      { icon: MessagesSquare, label: "Client Communication & Scheduling" },
      { icon: Scale, label: "Workflow Support for US Legal Practices" },
    ],
  },
  {
    // label: "03",
    title: "Real Estate\nVirtual Assistants",
    tagline: "Stay organized, respond faster, and close deals easier",
    gradient: "from-slate-800 to-slate-700",
    accentBar: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
    borderAccent: "border-emerald-100",
    tasks: [
      { icon: Home, label: "Listing Coordination & Admin Support" },
      { icon: Users, label: "Lead Management + CRM Updates" },
      { icon: MessagesSquare, label: "Appointment Setting & Follow-ups" },
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
            Our Services
          </span> */}

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Specialized VA Support Built For{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Growing Businesses
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-blue-100 opacity-60"
              />
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-500">
            Eminence VA Solutions provides trained, reliable virtual assistants for
            teams in the US and Canada — focused on customer support, legal workflows,
            and real estate operations.
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
              <div
                className={`relative bg-gradient-to-br ${cat.gradient} px-7 pt-8 pb-12`}
              >
                {/* Number watermark */}
                <span className="absolute right-4 top-3 text-7xl font-black leading-none text-white/10 select-none">
                  {cat.label}
                </span>

                {/* Icon row (fixed height) */}
                <div className="flex h-10 items-center gap-2.5">
                  {cat.tasks.map(({ icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm"
                    >
                      <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
                    </div>
                  ))}
                </div>

                {/* Title + tagline (fixed block height for alignment) */}
                <div className="mt-5 min-h-[112px]">
                  <h3 className="whitespace-pre-line text-2xl font-extrabold leading-tight text-white">
                    {cat.title}
                  </h3>

                  {/* Force consistent 2-line area */}
                  <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-2 min-h-[40px]">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Wave cutout */}
              <div className="relative -mt-5 bg-white">
                <svg
                  viewBox="0 0 400 20"
                  preserveAspectRatio="none"
                  className="absolute -top-5 left-0 h-10 w-full"
                  aria-hidden
                >
                  <path
                    d="M0,20 C133,0 266,0 400,20 L400,20 L0,20 Z"
                    className="fill-white"
                  />
                </svg>
              </div>

              {/* Task list */}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-5">
                <ul className="space-y-2.5">
                  {cat.tasks.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 ${cat.lightBg} ${cat.borderAccent}`}
                    >
                      <span
                        className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white shadow-sm ${cat.lightText}`}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                {/* CTA pinned to bottom for perfect alignment */}
                <div className="mt-auto pt-5">
                  <a
                    href="#contact"
                    className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 ${cat.lightText}`}
                  >
                    Book a Free Consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom accent bar */}
              <span className={`absolute bottom-0 left-0 h-1 w-full ${cat.accentBar} opacity-10`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-2.5">
          <p className="text-sm text-slate-400">
            Not sure which service fits? We’ll help you choose the right VA plan.
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