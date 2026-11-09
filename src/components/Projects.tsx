"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Zap, BatteryCharging, Building2 } from "lucide-react";

const projects = [
  {
    title: "The Bronx Clean Mobility Hub",
    category: "Infrastructure & Fleet Electrification",
    description:
      "A flagship multi-use hub integrating high-speed multi-megawatt EV charging, utility-scale battery energy storage (BESS), and localized solar generation to relieve grid congestion in the South Bronx.",
    stats: [
      { label: "Storage Capacity", val: "10 MWh" },
      { label: "DC Fast Chargers", val: "24 Ports" },
      { label: "Solar Canopy", val: "850 kW" },
    ],
    icon: <BatteryCharging className="w-5 h-5 text-gold" />,
    badge: "Urban Flagship",
    image: "/images/Rectangle-19.png",
  },
  {
    title: "Commercial Urban Microgrid Fleet",
    category: "Distributed Energy Resources",
    description:
      "Turnkey microgrid architectures retrofitted across constrained commercial footprints in New York City, enabling demand response participation and islanding resiliency during peak grid stress.",
    stats: [
      { label: "Demand Response", val: "100% Automated" },
      { label: "Peak Shaving", val: "Up to 34%" },
      { label: "Uptime Guarantee", val: "99.98%" },
    ],
    icon: <Zap className="w-5 h-5 text-gold" />,
    badge: "Grid Resiliency",
    image: "/images/Rectangle-20.png",
  },
  {
    title: "Regional Utility DERMS Architecture",
    category: "Utility Integration & Compliance",
    description:
      "End-to-end CIM-compliant DERMS software architecture evaluation, build-vs-buy roadmap, and FERC Order 2222 integration strategy for major regional distribution providers.",
    stats: [
      { label: "Interconnection", val: "FERC 2222" },
      { label: "Assets Aggregated", val: "15,000+" },
      { label: "Standard", val: "IEC CIM 61968" },
    ],
    icon: <Building2 className="w-5 h-5 text-gold" />,
    badge: "Enterprise Utility",
    image: "/images/Rectangle-21.png",
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Proven Execution & Concept Initiatives
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-midnight mb-6">
            Pioneering Clean Energy Infrastructure
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            Delivering next-level engineering, economics, and architectural blueprints for utilities, developers, and municipal stakeholders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} group flex flex-col bg-ivory rounded-2xl overflow-hidden border border-slate-light/25 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-midnight/90 backdrop-blur-md text-gold border border-gold/30 text-xs font-semibold px-3 py-1 rounded-full">
                  {proj.badge}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 text-gold font-medium text-xs tracking-wider uppercase">
                  {proj.icon}
                  <span>{proj.category}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-midnight mb-3 group-hover:text-gold transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6 flex-1">
                  {proj.description}
                </p>

                <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-slate-light/20 bg-white/60 rounded-xl px-3">
                  {proj.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-[var(--font-heading)] font-bold text-sm text-midnight">
                        {stat.val}
                      </div>
                      <div className="text-[10px] text-slate uppercase tracking-wider mt-0.5 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between text-midnight font-semibold text-sm group-hover:text-gold transition-colors"
                >
                  <span>Request Full Case Study</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

