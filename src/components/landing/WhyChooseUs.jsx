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
    <section className="relative overflow-hidden py-20 text-white bg-gradient-to-b from-[#289efd] to-[#0a3f82]">
      {/* Soft highlight like your Services header */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_55%,rgba(255,255,255,0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/85">
              Why Eminence VA Solutions?
            </p>

            <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built for Trust, Reliability, and Results
            </h2>

            <p className="mb-10 text-base leading-relaxed text-white/90">
              We help founders and growing teams in the US and Canada delegate with confidence.
              Our assistants are selected based on your needs and supported by structured processes
              so you get consistent, professional execution — not guesswork.
            </p>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/25 bg-white/15 text-xl backdrop-blur">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-white/85">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — credibility card */}
          <div className="relative rounded-2xl border border-white/25 bg-white/10 p-8 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]">
            {/* subtle glow border */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-[18px] bg-white/15 blur-[12px]" />

            <div className="relative">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/65">
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
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/20 bg-white/10 p-5"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-white/25 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white">
                  Not sure which VA role you need?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/85">
                  Tell us your tasks and workflow — we’ll recommend the best fit (Client Support,
                  Legal VA, or Real Estate VA) and match you with the right assistant.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-[#0a3f82] transition hover:opacity-95"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}