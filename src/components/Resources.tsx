"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BookOpen, Download, ArrowRight, FileText } from "lucide-react";

const articles = [
  {
    title: "Can New York City Really Go 100% Renewables?",
    excerpt:
      "An in-depth breakdown of high-density grid constraints, transmission bottleneck challenges, and the vital role of Distributed Energy Resource Management Systems (DERMS).",
    image: "/images/Rectangle-11-1.png",
    category: "Regulatory & Grid Trends",
    readTime: "7 min read",
  },
  {
    title: "What is the Climate Leadership and Community Protection Act (CLCPA)?",
    excerpt:
      "A strategic guide for developers, utilities, and commercial real estate owners preparing for New York's aggressive decarbonization and emissions mandates.",
    image: "/images/Rectangle-12-1.png",
    category: "Policy & Compliance",
    readTime: "9 min read",
  },
];

export default function Resources() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resources" ref={sectionRef} className="py-24 md:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Knowledge Center & Lead Insights
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-midnight mb-6">
            Publications, Whitepapers & Insights
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            Essential analysis and actionable frameworks designed to guide energy executives through the fast-evolving regulatory landscape.
          </p>
        </div>

        {/* Featured E-Book Lead Magnet Banner */}
        <div className="reveal bg-gradient-to-r from-midnight to-midnight-light border border-white/10 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <BookOpen size={14} />
                <span>Featured Whitepaper & E-Book</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold leading-snug">
                The Architect&apos;s Blueprint to DERMS & FERC 2222 Integration
              </h3>
              <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
                Learn the architectural patterns required to deploy interoperable CIM-based DERMS platforms without vendor lock-in. Includes real-world build-vs-buy decision matrix and Capex/Opex benchmarks.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-white/50 pt-2">
                <span>✓ 42 Pages</span>
                <span>•</span>
                <span>✓ Executive PDF</span>
                <span>•</span>
                <span>✓ Zero Spam Guaranteed</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <h4 className="font-semibold text-sm text-gold uppercase tracking-wider">Download Free Copy</h4>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-midnight font-bold py-3 px-4 rounded-lg text-sm transition-all shadow-lg hover:shadow-gold/20"
                >
                  <Download size={16} />
                  <span>Get Immediate Access</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Featured Editorial Articles Retaining Actual Site Thumbnails */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((art, i) => (
            <article
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl overflow-hidden border border-slate-light/20 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-midnight/90 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                  {art.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-slate mb-3">
                  <FileText size={14} className="text-gold" />
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-midnight mb-3 leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6 flex-1">
                  {art.excerpt}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-midnight font-bold text-sm hover:text-gold transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

