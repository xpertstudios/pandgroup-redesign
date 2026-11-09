import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";

const ARTICLES = [
  {
    title: "Can New York City Really Go 100% Renewables?",
    excerpt:
      "A technical examination of transmission congestion into the New York City load pocket (Zone J), interconnection queues, and why localized DERMS, battery storage, and microgrids are indispensable to reaching 100% clean power.",
    image: "/images/Rectangle-11-1.png",
    imageAlt: "Can New York City Really Go 100% Renewables article cover",
    category: "Grid Modernization",
    href: "https://pandgroup.com/",
    topics: ["NY ISO Zone J", "Urban Microgrids", "Transmission Limits"],
  },
  {
    title: "What is the Climate Leadership and Community Protection Act (CLCPA)?",
    excerpt:
      "Understanding New York State's landmark climate statute: statutory targets for 70% renewable electricity by 2030, zero-emission electricity by 2040, and the regulatory implications for commercial facilities and utilities.",
    image: "/images/Rectangle-12-1.png",
    imageAlt: "What is the Climate Leadership and Community Protection Act article cover",
    category: "Regulatory Policy",
    href: "https://pandgroup.com/",
    topics: ["CLCPA Mandates", "Emissions Compliance", "Utility Targets"],
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 sm:py-28 lg:py-36 bg-sand text-pine border-t border-sand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sage-dark font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
              Thought Leadership &amp; Analysis
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-pine tracking-tight leading-tight">
              Energy insights from the frontlines.
            </h2>
          </div>
          <p className="text-sm text-sage-dark max-w-md">
            Direct perspectives on regulatory shifts, grid constraints, and emerging distributed architectures written for energy decision-makers.
          </p>
        </div>

        {/* 2-Column Editorial Grid featuring original article covers */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="bg-sand-light rounded-3xl overflow-hidden border border-sand-dark hover:border-pine/30 transition-all duration-300 flex flex-col group hover:shadow-xl hover:shadow-pine/5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-pine-deep">
                <Image
                  src={art.image}
                  alt={art.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-pine/90 backdrop-blur-md text-lime text-xs font-mono font-semibold px-3 py-1 rounded-full border border-lime/30">
                  {art.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {art.topics.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-sage-dark bg-sand px-2.5 py-1 rounded-md border border-sand-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-pine mb-3 group-hover:text-pine-light transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-sage-dark leading-relaxed mb-6 flex-1">
                  {art.excerpt}
                </p>

                <div className="pt-4 border-t border-sand-dark flex items-center justify-between">
                  <a
                    href={art.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-pine group-hover:text-pine-light min-h-[44px]"
                  >
                    <BookOpen size={15} aria-hidden="true" />
                    <span>Read Original Publication</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </a>
                  <span className="text-[11px] font-mono text-sage-dark">
                    PandGroup Archive
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

