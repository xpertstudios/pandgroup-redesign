import { Cpu, Network, Zap, Compass } from "lucide-react";

const FOCUS_PILLARS = [
  {
    icon: <Cpu className="w-5 h-5 text-lime" aria-hidden="true" />,
    title: "DERMS & DRMS Architecture",
    description: "Tailored Distributed Energy Resource Management System designs and vendor-neutral build vs. buy evaluations.",
  },
  {
    icon: <Network className="w-5 h-5 text-lime" aria-hidden="true" />,
    title: "Utility & Microgrid Integration",
    description: "Interconnection modeling, Common Information Model (CIM) ecosystems, and localized islanding resilience.",
  },
  {
    icon: <Zap className="w-5 h-5 text-lime" aria-hidden="true" />,
    title: "Virtual Power Plants (VPP)",
    description: "Aggregating battery storage, rooftop solar, and EV infrastructure for regional wholesale market participation.",
  },
  {
    icon: <Compass className="w-5 h-5 text-lime" aria-hidden="true" />,
    title: "Regulatory Modernization",
    description: "Navigating FERC Order 2222, NY ISO tariffs, and state-level decarbonization mandates (CLCPA).",
  },
];

export default function FocusStrip() {
  return (
    <section id="focus" className="relative bg-pine-deep text-sand border-y border-pine-surface/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-lime font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
              Core Technical Focus
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-sand tracking-tight">
              Pillars of modern grid modernization.
            </h2>
          </div>
          <p className="text-sm text-sand/65 max-w-md">
            Directing complex capital, engineering specifications, and regulatory frameworks toward operational stability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-pine/60 hover:bg-pine border border-pine-surface/70 hover:border-lime/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-pine-surface/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-sand group-hover:text-lime transition-colors mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-sage-light">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-lime/60 group-hover:text-lime transition-colors">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

