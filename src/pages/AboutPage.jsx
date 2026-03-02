import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
// import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";

import logo from "../assets/logo1.png";
import ceoImage from "../assets/ceo.png";
import cooImage from "../assets/coo.jpeg";

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
              We help founders, startups, and growing businesses delegate smarter,
              operate faster, and scale without hiring full-time overhead.
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
                  workflow. We remove operational bottlenecks so you can focus on growth.
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
              The people behind the vision, operations, and growth of Eminence VA Solutions.
            </p>
          </div>
        </section>

        {/* ================= CEO Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Content LEFT */}
              <div>
                {/* Role Badge */}
                <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  President & Chief Executive Officer
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ramy Elsaeed
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As President and Chief Executive Officer of Eminence VA Solutions, Ramy sets the 
                  company's overall vision, mission, and long-term strategy. He makes final executive 
                  decisions, oversees the executive leadership team, and approves major financial 
                  and operational plans.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Ramy represents the company publicly and legally, leads high-level partnerships, 
                  and drives the company's continued expansion across industries. His leadership 
                  emphasizes accountability, performance, and building long-term client relationships 
                  built on measurable value.
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

              {/* Placeholder Image LEFT
              <div className="flex items-center justify-center">
                <div className="w-[420px] h-[520px] rounded-2xl shadow-xl mx-auto bg-slate-100 flex flex-col items-center justify-center gap-4 border border-slate-200">
                  <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-400">Photo Coming Soon</p>
                </div>
              </div> */}

              {/* Content RIGHT */}
              <div>
                {/* Role Badge */}
                <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Vice President — External Affairs
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  AMANIY AHMAD
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As Vice President of External Affairs, Amaniy oversees marketing, branding, and 
                  public relations for Eminence VA Solutions. She manages strategic partnerships 
                  and alliances, leads client acquisition and business development, and supervises 
                  advertising and promotional campaigns.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Amaniy is responsible for maintaining the company's public image and developing 
                  external growth strategies that position Eminence VA Solutions as the premier 
                  choice for businesses seeking elite virtual talent.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= COO Section ================= */}
        <section className="bg-slate-50 py-20 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Content LEFT */}
              <div>
                {/* Role Badge */}
                <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                  VP Internal Affairs & Chief Operating Officer
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Mark Jhon "MJ" Vallena
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  As Vice President of Internal Affairs and Chief Operating Officer, MJ holds a 
                  dual executive role responsible for all internal operations and daily management 
                  of the company. He implements company strategy set by the CEO, manages internal 
                  departments and team performance, and develops and enforces policies and procedures.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  MJ ensures service quality and client satisfaction, oversees compliance and 
                  operational standards, and manages workflow systems and efficiency. He reports 
                  operational performance directly to the CEO, building scalable systems that 
                  allow the company to grow without compromising excellence.
                </p>
              </div>

              {/* Image RIGHT */}
              <div>
                <img
                  src={cooImage}
                  alt="Mark Jhon MJ Vallena - VP Internal Affairs & COO of Eminence VA Solutions"
                  className="w-[420px] h-[520px] object-cover object-top rounded-2xl shadow-xl mx-auto"
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