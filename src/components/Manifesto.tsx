import { ArrowRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-sand text-pine relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Eyebrow Label */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="inline-block text-sage-dark font-mono text-xs uppercase tracking-widest font-semibold">
                Advisory Philosophy
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-pine tracking-tight leading-snug">
                Demystifying clean energy complexity.
              </h2>
              <p className="text-sm text-sage-dark leading-relaxed">
                Clean tech is not held back by a shortage of ambitious targets. It is held back by fragmented software architectures, misaligned tariffs, and generic consulting playbooks.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-pine hover:text-sage-dark transition-colors"
                >
                  <span>Connect with our practice</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Large Editorial Statement */}
          <div className="lg:col-span-8 space-y-8">
            <blockquote className="font-heading font-medium text-2xl sm:text-3xl lg:text-4xl text-pine leading-tight sm:leading-tight">
              &ldquo;Your Distributed Energy Resource Management System is the cornerstone of an efficient, future-proof grid. Designing and deploying it from the ground up demands technical precision—not marketing buzzwords.&rdquo;
            </blockquote>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-sand-dark text-sm sm:text-base text-pine/80 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base text-pine">
                  Engineered from Field Realities
                </h3>
                <p>
                  We bring two decades of hands-on leadership directing clean-tech architectures across North America. We evaluate whether your organization truly needs custom enterprise software or modular, commercially available components.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base text-pine">
                  Unified Standards &amp; Interoperability
                </h3>
                <p>
                  Through CIM-based (IEC 61968) frameworks and compliance protocols for FERC 2222, we architect data ecosystems that seamlessly integrate with internal SCADA, ADMS, and distribution assets without vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

