import Link from "next/link";
import { Download, CheckCircle2, BookOpen, ShieldCheck, ArrowUpRight } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "DERMS Whitepaper & E-Book — PandGroup",
  description:
    "Download the free executive guide: The Architect's Blueprint to DERMS & FERC 2222 Integration by PandGroup.",
};

export default function DermsEbookPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-sky/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Complimentary Whitepaper &amp; Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Download your free DERMS e-book.
          </h1>
          <p className="text-brand-offwhite/85 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Essential knowledge and architectural patterns for modern Distributed Energy Resource Management Systems and grid modernization.
          </p>
        </div>
      </section>

      {/* Main Content & Direct Honest Access */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-sky/15 text-brand-sky rounded-full text-xs font-semibold">
                <BookOpen size={14} />
                <span>Executive E-Book &bull; Official PandGroup Publication</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy leading-snug">
                The Executive Guide to Navigating DERMS Architecture &amp; Utility Integration
              </h2>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Designing and implementing a cutting-edge DERMS from the ground up requires navigating complex regulatory standards, technical interoperability, and critical build vs. buy evaluations.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-heading font-bold text-base text-brand-navy">
                  What You Will Discover Inside:
                </h3>
                <ul className="space-y-2.5 text-sm text-brand-muted">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand-sky shrink-0 mt-0.5" />
                    <span>How to evaluate &lsquo;build vs. buy&rsquo; decisions for software and hardware DERMS solutions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand-sky shrink-0 mt-0.5" />
                    <span>Navigating FERC Order 2222 compliance and opening wholesale markets to distributed resources.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand-sky shrink-0 mt-0.5" />
                    <span>Establishing modular CIM-based ecosystems to integrate internal SCADA, ADMS, and telemetry.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand-sky shrink-0 mt-0.5" />
                    <span>Microgrid topologies and battery energy storage (BESS) sizing principles.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-border flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand-sky shrink-0" />
                <span className="text-xs text-brand-muted">
                  Authored by clean-tech leaders with two decades of experience across eight-figure utility projects.
                </span>
              </div>
            </div>

            {/* Direct Instant Access Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-offwhite p-8 sm:p-10 rounded-3xl border border-brand-border shadow-lg space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-sky/15 text-brand-sky flex items-center justify-center">
                  <Download size={28} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-brand-navy">
                    Instant Document Access
                  </h3>
                  <p className="text-xs font-mono font-bold text-brand-sky uppercase tracking-wider">
                    DIRECT VERIFIED RESOURCE:
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Access the genuine original PandGroup DERMS e-book immediately without registration barriers:
                  </p>
                </div>

                <a
                  href="https://pandgroup.com/wp-content/uploads/2024/12/DERMS_EBOOK.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-md transition-all shadow-md min-h-[48px]"
                >
                  <Download size={16} />
                  <span>Download DERMS E-Book (PDF)</span>
                  <ArrowUpRight size={16} />
                </a>

                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href="/contact-us"
                    className="text-xs text-brand-slate hover:text-brand-sky font-semibold block"
                  >
                    Want custom advisement for your utility project? Contact us &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
