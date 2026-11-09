"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, CheckCircle2, BookOpen, ShieldCheck, ArrowUpRight } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function DermsEbookPage() {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="pt-28 sm:pt-32 bg-white">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-gold font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Complimentary Whitepaper &amp; Guide
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Download your free DERMS e-book.
          </h1>
          <p className="text-brand-gray/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Essential knowledge and architectural patterns for modern Distributed Energy Resource Management Systems and grid modernization.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-sky/15 text-brand-sky rounded-full text-xs font-semibold">
                <BookOpen size={14} />
                <span>Executive E-Book &bull; PDF Edition</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-dark leading-snug">
                The Executive Guide to Navigating DERMS Architecture &amp; Utility Integration
              </h2>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Designing and implementing a cutting-edge DERMS from the ground up requires navigating complex regulatory standards, technical interoperability, and critical build vs. buy evaluations.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-heading font-bold text-base text-brand-dark">
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

              <div className="p-5 bg-brand-card rounded-xl border border-brand-gray flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand-sky shrink-0" />
                <span className="text-xs text-brand-muted">
                  Authored by clean-tech leaders with two decades of experience across eight-figure utility projects.
                </span>
              </div>
            </div>

            {/* Download Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-card p-8 sm:p-10 rounded-3xl border border-brand-gray shadow-xl">
                {downloaded ? (
                  <div className="space-y-6 text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-brand-sky/15 text-brand-sky flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-2xl text-brand-dark">
                        THANK YOU!!
                      </h3>
                      <p className="text-xs font-mono font-bold text-brand-sky uppercase tracking-wider">
                        YOU CAN DOWNLOAD THE EBOOK HERE:
                      </p>
                      <p className="text-xs text-brand-muted">
                        Thank you for your interest, {name || "valued colleague"}. Click below to access your PDF copy immediately:
                      </p>
                    </div>

                    <a
                      href="https://pandgroup.com/wp-content/uploads/2024/12/DERMS_EBOOK.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-md transition-all shadow-md min-h-[48px]"
                    >
                      <Download size={16} />
                      <span>Download DERMS E-Book (PDF)</span>
                      <ArrowUpRight size={16} />
                    </a>

                    <div className="pt-4 border-t border-brand-gray">
                      <Link
                        href="/contact-us"
                        className="text-xs text-brand-muted hover:text-brand-sky underline"
                      >
                        Want to discuss a custom DERMS assessment? Contact us &rarr;
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl text-brand-dark">
                        Get Instant Free Access
                      </h3>
                      <p className="text-xs text-brand-muted">
                        Enter your information to receive the complete executive guide.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="ebook-name"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="ebook-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Delvin Stephens"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ebook-email"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
                      >
                        Work Email Address *
                      </label>
                      <input
                        id="ebook-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-md transition-all shadow-md min-h-[48px]"
                    >
                      <Download size={16} />
                      <span>Download Free E-Book</span>
                    </button>

                    <p className="text-[11px] text-brand-muted text-center">
                      Zero spam. Direct download access provided immediately.
                    </p>
                  </form>
                )}
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
