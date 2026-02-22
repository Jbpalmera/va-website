const features = [
  {
    icon: "📅",
    title: "No Obligation Monthly Subscription",
    description:
      "Flexible payment options including monthly invoicing, annual plans, or customized schedules to fit your financial needs.",
  },
  {
    icon: "🔒",
    title: "NDAs and Custom Talent Policies",
    description:
      "Protect your intellectual property with robust NDAs and customizable talent policies tailored to your organization.",
  },
  {
    icon: "🛡️",
    title: "Data Security and Compliance",
    description:
      "We adhere to stringent compliance standards and employ advanced security measures to safeguard your sensitive business data.",
  },
  {
    icon: "🌐",
    title: "End-to-End Teams, 24/7",
    description:
      "Build complete teams with supervisory roles and around-the-clock availability to keep operations running across any time zone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
      <div className="mx-auto max-w-[1350px] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why YOURBRAND
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why You Should Choose Us
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-400">
              Our assistants are hand-picked based on your unique requirements and
              supported by a team of professionals who onboard, train, and supervise
              them on an ongoing basis. We're a fully managed, one-stop solution for
              your talent needs.
            </p>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-700 text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative stats card */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Enterprise-Grade Talent Services
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "25+", label: "Specialized Plans" },
                { value: "4.8★", label: "Average Rating" },
                { value: "5,000+", label: "Businesses Served" },
                { value: "24/7", label: "Team Availability" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-center"
                >
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-blue-800/50 bg-blue-900/30 p-5">
              <p className="text-sm font-semibold text-blue-300">
                Tailored for Founders at Every Stage
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Whether you're a solopreneur or scaling a 200-person company, Wing
                flexes with your needs — no long-term commitments required.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
