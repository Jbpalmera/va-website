import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/qlHEg55vkGblj8OC7iBG/webhook-trigger/14eecf4f-e833-43e9-be64-640a6c864463";

export default function Contact({
  bookingDate = "",
  bookingTime = "",
  timezone = "",
}) {
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const payload = {
        full_name: String(fd.get("full_name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        company: String(fd.get("company") || "").trim(),
        service_needed: String(fd.get("service_needed") || "").trim(),
        preferred_hours: String(fd.get("preferred_hours") || "Not sure").trim(),
        location: String(fd.get("location") || "").trim(),
        tasks: String(fd.get("tasks") || "").trim(),
        booking_date: bookingDate,
        booking_time: bookingTime,
        timezone,
        source: "Eminence Website - Schedule Page",
      };

      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`GHL webhook failed: ${res.status}`);

      setStatus("success");
      form.reset();

      // ✅ Redirect correctly (respects /va-website basename)
      setTimeout(() => navigate("/thank-you"), 500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      console.error("Submit error:", err);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
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
      {/* Radial fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Get Matched With a VA
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tell us what you need — we’ll recommend the right assistant
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Whether you need Client Support & Revenue Specialists, a
              Specialized Legal VA, or a Real Estate VA, we’ll help you pick the
              best fit based on your workflow, volume, and goals.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                <p>
                  Confidentiality-first processes. NDA support available upon
                  request.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
                <p>
                  Fast matching. We’ll respond within 24–48 hours to discuss
                  next steps.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                <p>Serving businesses across the US and Canada.</p>
              </div>
            </div>

            {/* Booking summary (optional display) */}
            {bookingDate && bookingTime && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Booking summary
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {bookingDate} — {bookingTime} ({timezone})
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  This is a preferred time request. Our team will confirm
                  availability.
                </p>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-sm font-semibold text-slate-900">
              Request a Free Consultation
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Fill out the form and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    required
                    name="full_name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Work Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Company / Business (optional)
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Service Needed
                  </label>
                  <select
                    required
                    name="service_needed"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Client Support & Revenue Specialist</option>
                    <option>Specialized Legal Virtual Assistant</option>
                    <option>Real Estate Virtual Assistant</option>
                    <option>Not sure — help me choose</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Preferred Hours
                  </label>
                  <select
                    name="preferred_hours"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    defaultValue="Not sure"
                  >
                    <option>Not sure</option>
                    <option>Part-time</option>
                    <option>Full-time</option>
                    <option>Multiple assistants</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Location (optional)
                  </label>
                  <select
                    name="location"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    defaultValue="US"
                  >
                    <option>US</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">
                  What tasks do you want to delegate?
                </label>
                <textarea
                  required
                  name="tasks"
                  rows={4}
                  placeholder="Example: customer support inbox + follow-ups, intake and documentation, CRM updates, appointment setting..."
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  ✅ Submitted! We’ll reach out shortly.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Request Consultation"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted by Eminence VA
                Solutions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
