import { motion } from "framer-motion";
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
    quote: "Professional, organized, and a perfect extension of our team.",
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

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

      {/* Soft animated glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#289efd]"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Testimonials
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Trusted by teams that value{" "}
            <span className="bg-gradient-to-r from-[#289efd] to-[#1e7dd8] bg-clip-text text-transparent">
              reliable execution
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-600"
          >
            Here's what business owners and operators say after working with
            Eminence VA Solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm transition-all duration-300 hover:border-[#289efd]/30 hover:shadow-md"
            >
              <p className="text-sm font-bold text-[#289efd]">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-300 hover:border-[#289efd]/30 hover:shadow-2xl"
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
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-[#289efd] backdrop-blur-sm"
                  >
                    <BadgeCheck className="h-4 w-4" />
                    Verified client
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.04 + 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-flex items-center gap-1 rounded-full bg-[#289efd] px-2.5 py-1 text-xs font-semibold text-white shadow-sm"
                  >
                    5.0
                    <span className="text-amber-300">★</span>
                  </motion.div>
                </div>

                {/* Quote */}
                <div className="mt-6 flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                    className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[#289efd] to-[#1e7dd8] shadow-sm"
                  >
                    <Quote className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.04 + 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-sm leading-relaxed text-slate-700"
                  >
                    "{t.quote}"
                  </motion.p>
                </div>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.8 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.04 + 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04 + 0.16,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100 transition-all duration-300 group-hover:ring-[#289efd]/30"
                    />
                    <motion.div
                      className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500"
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04 + 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="min-w-0"
                  >
                    <p className="truncate text-sm font-bold text-slate-900">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced hover accent with glow */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.04 + 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 rounded-b-3xl bg-gradient-to-r from-[#289efd] to-[#1e7dd8] shadow-lg shadow-[#289efd]/50"
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-slate-600"
          >
            Ready to delegate with confidence?
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#289efd] to-[#1e7dd8] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#289efd]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#289efd]/40"
          >
            Schedule a Free Consultation
            <motion.svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}