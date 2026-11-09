import { CheckCircle2, ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    phase: "Phase I: System Assessment & Feasibility",
    description:
      "Deep-dive technical assessment of existing distribution infrastructure, SCADA/ADMS interfaces, regulatory compliance gaps (FERC 2222, state clean-tech laws), and baseline asset connectivity.",
    points: [
      "Interconnection and hosting capacity analysis",
      "SCADA & distribution system gap diagnostics",
      "Regulatory & compliance baseline mapping",
    ],
  },
  {
    step: "02",
    phase: "Phase II: Architectural Strategy & Decision Matrix",
    description:
      "Developing the vendor-neutral technical specifications. We build transparent 'build vs. buy' evaluations, CIM semantic schemas, and Capex/Opex investment roadmaps tailored to your organizational goals.",
    points: [
      "Rigorous build vs. buy software evaluation",
      "Common Information Model (CIM) schema design",
      "Microgrid and BESS economic modeling",
    ],
  },
  {
    step: "03",
    phase: "Phase III: Implementation Oversight & Market Integration",
    description:
      "Hands-on program oversight ensuring smooth utility operations, data validation, market participation rules, and seamless ongoing scalability across the clean energy transition.",
    points: [
      "Vendor RFP specification & technical vetting",
      "Testing protocols & field commissioning oversight",
      "Demand response & wholesale market enrollment",
    ],
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 sm:py-28 lg:py-36 bg-pine text-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-lime font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Our Methodology
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sand tracking-tight leading-tight">
            How we translate complex grid challenges into working systems.
          </h2>
          <p className="text-base sm:text-lg text-sand/75 mt-4 leading-relaxed">
            A structured, three-stage advisory lifecycle built to minimize deployment risk and maximize long-term infrastructure value.
          </p>
        </div>

        {/* Chronological Process Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {STAGES.map((stg) => (
            <div
              key={stg.step}
              className="bg-pine-surface/50 border border-pine-surface hover:border-lime/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-lime uppercase tracking-widest bg-pine-deep px-3 py-1 rounded-full border border-pine-surface">
                    STAGE {stg.step}
                  </span>
                  <span className="text-sand/30 font-mono text-2xl font-bold">
                    /{stg.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-sand mb-4 group-hover:text-lime transition-colors leading-snug">
                  {stg.phase}
                </h3>

                <p className="text-xs sm:text-sm text-sand/70 leading-relaxed mb-6">
                  {stg.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-2.5">
                {stg.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-sand/80">
                    <CheckCircle2 size={14} className="text-lime shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-pine-deep border border-pine-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-sand">
              Need an independent technical review of an existing proposal?
            </h4>
            <p className="text-xs sm:text-sm text-sand/65 mt-1">
              We provide objective third-party audits of utility RFP submissions, software architectures, and microgrid feasibility studies.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-lime hover:bg-lime-hover text-pine font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors shrink-0 min-h-[44px]"
          >
            <span>Request an Audit</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

