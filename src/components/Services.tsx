import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    title: "DERMS & DRMS Architecture & Design",
    description:
      "Crafting tailor-made DERMS solutions that optimize grid reliability, enable bidirectional energy flow, and streamline the integration of distributed generation, battery storage, and solar assets.",
    image: "/images/Rectangle-19.png",
    imageAlt: "Electrical grid engineering and distributed energy resource infrastructure",
    bullets: [
      "Custom DERMS / DRMS functional specifications",
      "Utility ADMS & SCADA integration roadmap",
      "IEC CIM 61968 semantic data modeling",
      "Demand response program architecture",
    ],
  },
  {
    number: "02",
    title: "Strategic Advisement & Clean-Tech Strategy",
    description:
      "Advising utilities, municipal leaders, and clean-tech developers on high-stakes technology decisions, build-vs-buy software trade-offs, and multi-year decarbonization roadmaps.",
    image: "/images/Rectangle-20.png",
    imageAlt: "Clean energy strategy, grid planning, and technological modernization",
    bullets: [
      "Rigorous build vs. buy evaluation matrices",
      "FERC Order 2222 compliance & market design",
      "Microgrid feasibility and BESS sizing",
      "Capex / Opex financial modeling for clean tech",
    ],
  },
  {
    number: "03",
    title: "Renewable Services Marketing & Adoption",
    description:
      "Formulating market entry, commercialization, and adoption frameworks to accelerate the deployment of clean energy systems across commercial, industrial, and municipal sectors.",
    image: "/images/Rectangle-21.png",
    imageAlt: "Renewable clean tech marketing, solar adoption, and urban sustainability projects",
    bullets: [
      "Go-to-market strategies for DER developers",
      "Regional compliance alignment (NY CLCPA)",
      "Stakeholder engagement for urban clean tech",
      "Commercial tariff & incentive structuring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-sand-light text-pine border-t border-sand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-sage-dark font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Core Service Offerings
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-pine tracking-tight leading-tight">
            Consulting capabilities tailored for a distributed power grid.
          </h2>
          <p className="text-base sm:text-lg text-sage-dark mt-4 leading-relaxed">
            Every engagement delivers clear engineering rigor, vendor-neutral roadmaps, and actionable operational blueprints.
          </p>
        </div>

        {/* 3-Column Service Cards with original images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <article
              key={svc.number}
              className="bg-sand rounded-3xl overflow-hidden border border-sand-dark hover:border-pine/30 transition-all duration-300 flex flex-col group hover:shadow-xl hover:shadow-pine/5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-pine-light">
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/60 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 bg-sand/90 backdrop-blur-md text-pine font-mono font-bold text-xs px-3 py-1 rounded-full border border-sand-dark">
                  {svc.number}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-pine mb-4 group-hover:text-pine-light transition-colors leading-snug">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-sage-dark leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Bullets */}
                <div className="pt-4 border-t border-sand-dark mt-auto space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sage-dark font-semibold block mb-2">
                    Key Deliverables
                  </span>
                  {svc.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-pine/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-pine group-hover:text-pine-light pt-2"
                >
                  <span>Discuss Requirements</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
