// src/pages/ThankYou.jsx
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-[900px] px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-200">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-sm font-semibold text-slate-600">Submission received</p>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Thank you! We’ll reach out shortly.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Your consultation request has been submitted successfully. Our team will review your
            details and contact you within{" "}
            <span className="font-semibold">24–48 hours</span>.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">What happens next?</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                We’ll confirm your preferred schedule (or offer the next best time).
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                We’ll recommend the right VA profile based on your needs.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                You’ll get clear next steps for onboarding and kickoff.
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700 sm:w-auto"
            >
              Back to Home
            </Link>

            <Link
              to="/schedule"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Book another time
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            We’re excited to connect with you! If you don’t see our email within 48 hours,
            please take a quick look at your <span className="font-semibold">spam or junk folder</span> —
            sometimes messages accidentally land there. If it’s still missing, feel free to reach
            out to us directly and we’ll be happy to assist.
          </p>
        </div>
      </main>
    </div>
  );
}