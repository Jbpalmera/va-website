import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const trust = [
  { icon: CheckCircle2, label: "No setup fees" },
  { icon: Shield, label: "Cancel anytime" },
  { icon: Zap, label: "Ready from day one" },
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
  hidden: { opacity: 0, x: -28 },
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
  hidden: { opacity: 0, x: 28 },
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

export default function CTA() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1350px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#289efd] to-[#1e7dd8] px-8 py-14 shadow-2xl shadow-[#289efd]/30 sm:px-12 lg:px-16"
        >
          {/* Enhanced background layers */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.16, 0.28, 0.16] }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />

          {/* Top accent bar */}
          <motion.span
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-white/30 via-white/50 to-white/30"
          />

          {/* Content */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="min-w-0"
            >
              <motion.span
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-white"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                Limited-Time Offer
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl"
              >
                Start with a{" "}
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/90"
              >
                Talk to an Eminence VA Solutions expert, tell us what you need,
                and we'll match you with the perfect virtual assistant — no
                obligation, no credit card required.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                variants={stagger}
                className="mt-8 flex flex-wrap items-center gap-5"
              >
                {trust.map(({ icon: Icon, label }) => (
                  <motion.span
                    key={label}
                    variants={fadeLeft}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20">
                      <Icon
                        className="h-3.5 w-3.5 text-emerald-300"
                        strokeWidth={2.5}
                      />
                    </div>
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:shadow-2xl"
              >
                {/* Card header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-2 flex items-center gap-2.5"
                >
                  <motion.div
                    whileHover={{ rotate: -4, scale: 1.06 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
                  >
                    <CalendarDays
                      className="h-5 w-5 text-white"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <p className="text-base font-bold text-white">
                    Book Your Free Session
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-6 text-sm leading-relaxed text-white/80"
                >
                  15-minute call. No pressure. Walk away with a clear plan.
                </motion.p>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to="/schedule"
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#289efd] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/95"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.a
                  href="#pricing"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  View Pricing
                </motion.a>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-center text-xs text-white/80">
                    Joined by{" "}
                    <span className="font-bold text-white">
                      5,000+ businesses
                    </span>{" "}
                    this year
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}