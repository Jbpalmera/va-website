import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
// import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";

import logo from "../assets/logo1.png";
import ceoImage from "../assets/ceo-ramy.jpeg";
import amaniyImage from "../assets/amaniy.jpeg";
import nicoImage from "../assets/nico.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            {/* Bigger Logo */}
            <img
              src={logo}
              alt="Eminence VA Solutions Logo"
              className="mx-auto mb-10 w-72 sm:w-96 object-contain"
            />

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Eminence VA Solutions
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We help founders, startups, and growing businesses delegate
              smarter, operate faster, and scale without hiring full-time
              overhead.
            </p>
          </div>
        </section>

        {/* ================= Mission & Vision ================= */}
        <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Our mission is simple — give businesses access to reliable,
                  highly-trained assistants who integrate seamlessly into their
                  workflow. We remove operational bottlenecks so you can focus
                  on growth.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We envision a future where businesses of all sizes can scale
                  efficiently without operational limitations. By combining
                  talented virtual assistants with structured systems, we help
                  companies grow with confidence.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-10 shadow-sm text-center">
                <p className="text-xl font-semibold text-slate-900">
                  Structured Systems. Elite Virtual Talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Executive Leadership Header ================= */}
        <section className="bg-slate-50 pt-20 pb-4 sm:pt-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Leadership
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Executive Leadership Team
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
              The people behind the vision, operations, and growth of Eminence
              VA Solutions.
            </p>
          </div>
        </section>

        {/* ================= CEO Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Content LEFT */}
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  President & Chief Executive Officer
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ramy Elsaeed
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As President and Chief Executive Officer of Eminence VA
                  Solutions, Ramy sets the company's overall vision, mission,
                  and long-term strategy. He makes final executive decisions,
                  oversees the executive leadership team, and approves major
                  financial and operational plans.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Ramy represents the company publicly and legally, leads
                  high-level partnerships, and drives the company's continued
                  expansion across industries. His leadership emphasizes
                  accountability, performance, and building long-term client
                  relationships built on measurable value.
                </p>
              </div>

              {/* Image RIGHT */}
              <div>
                <img
                  src={ceoImage}
                  alt="Ramy Elsaeed - President & CEO of Eminence VA Solutions"
                  className="w-[420px] h-[520px] object-cover object-top rounded-2xl shadow-xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= VP External Affairs Section ================= */}
        <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Image LEFT */}
              <div>
                <img
                  src={amaniyImage}
                  alt="Amaniy Ahmad - Vice President External Affairs & CFO of Eminence VA Solutions"
                  className="w-[420px] h-[520px] object-cover object-top rounded-2xl shadow-xl mx-auto"
                />
              </div>

              {/* Content RIGHT */}
              <div>
                <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Vice President — External Affairs & Chief Financial Officer
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  AMANIY AHMAD
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As Vice President of External Affairs and Chief Financial
                  Officer, Amaniy oversees the company’s marketing, branding,
                  and strategic partnerships while also directing financial
                  strategy and fiscal oversight.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Amaniy manages budgeting, financial planning, and performance
                  reporting while leading client acquisition and external growth
                  strategies, positioning Eminence VA Solutions for scalable,
                  responsible expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BDM Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Content LEFT */}
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Business Development Manager
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Nico Paolo Taruc
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Our Business Development Manager is responsible for
                  identifying new growth opportunities, building strategic
                  partnerships, and expanding our client base.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  The BDM works closely with potential clients to understand
                  their needs, present tailored solutions, and guide them
                  through the onboarding process. This role focuses on
                  strengthening relationships, generating new business, and
                  helping drive the company’s long-term growth and success.
                </p>
              </div>

              {/* Image RIGHT */}
              <div>
                <img
                  src={nicoImage}
                  alt="Nico Paolo Taruc - Business Development Manager of Eminence VA Solutions"
                  className="w-[420px] h-auto object-contain rounded-2xl shadow-xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* <FloatingChat /> */}
      <BackToTop />
    </div>
  );
}
