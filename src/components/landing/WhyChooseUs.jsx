const features = [
  {
    icon: "📅",
    title: "Flexible Monthly Engagement",
    description:
      "Work month-to-month with a plan that fits your workload. Scale hours up or down as your business changes.",
  },
  {
    icon: "🧩",
    title: "Specialized Roles, Not Generic VAs",
    description:
      "Choose support aligned to your workflow — Client Support & Revenue, Legal Admin, or Real Estate operations.",
  },
  {
    icon: "🔒",
    title: "Confidentiality & NDAs",
    description:
      "We offer NDA support and privacy-first processes to protect sensitive information and client data.",
  },
  {
    icon: "⚙️",
    title: "Process-Driven, Accountable Support",
    description:
      "We focus on clear SOPs, task tracking, and consistent communication so work stays organized and measurable.",
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
              Why Eminence VA Solutions?
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built for Trust, Reliability, and Results
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-300">
              We help founders and growing teams in the US and Canada delegate with confidence.
              Our assistants are selected based on your needs and supported by structured processes
              so you get consistent, professional execution — not guesswork.
            </p>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-700 text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — credibility card */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              What You Get With Eminence
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Clear onboarding & role alignment",
                  desc: "We map tasks, workflows, and expectations so your VA integrates smoothly.",
                },
                {
                  title: "Communication that stays consistent",
                  desc: "Structured updates and task tracking so nothing falls through the cracks.",
                },
                {
                  title: "Support that scales with your business",
                  desc: "Start part-time, move full-time, or expand into multiple roles when ready.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-blue-800/40 bg-blue-900/20 p-5">
              <p className="text-sm font-semibold text-blue-200">
                Not sure which VA role you need?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Tell us your tasks and workflow — we’ll recommend the best fit (Client Support,
                Legal VA, or Real Estate VA) and match you with the right assistant.
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