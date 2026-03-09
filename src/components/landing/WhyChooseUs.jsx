import { motion } from "framer-motion";

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

const credibilityItems = [
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
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#289efd] to-[#0a3f82] py-20 text-white">
      {/* Soft highlight like your Services header */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_55%,rgba(255,255,255,0.12),transparent_70%)]" />
      </div>

      {/* Animated background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/85"
            >
              Why Eminence VA Solutions?
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Built for Trust, Reliability, and Results
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-10 text-base leading-relaxed text-white/90"
            >
              We help founders and growing teams in the US and Canada delegate
              with confidence. Our assistants are selected based on your needs
              and supported by structured processes so you get consistent,
              professional execution — not guesswork.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeLeft}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: -4, scale: 1.06 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/25 bg-white/15 text-xl backdrop-blur"
                  >
                    {f.icon}
                  </motion.div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">
                      {f.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-white/85">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — credibility card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl border border-white/25 bg-white/10 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            {/* subtle glow border */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-[18px] bg-white/15 blur-[12px]" />

            <div className="relative">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/65"
              >
                What You Get With Eminence
              </motion.p>

              <div className="space-y-4">
                {credibilityItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className="rounded-xl border border-white/20 bg-white/10 p-5"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/80">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.45,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 rounded-xl border border-white/25 bg-white/10 p-5"
              >
                <p className="text-sm font-semibold text-white">
                  Not sure which VA role you need?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/85">
                  Tell us your tasks and workflow — we’ll recommend the best fit
                  (Client Support, Legal VA, or Real Estate VA) and match you
                  with the right assistant.
                </p>
              </motion.div>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.45,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-[#0a3f82] transition hover:opacity-95"
              >
                Schedule a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}