import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-pine text-sand pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Background radial glow & grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[450px] h-[450px] bg-pine-light/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine-surface/70 border border-lime/25 text-lime text-xs font-semibold uppercase tracking-wider">
              <Zap size={13} className="animate-pulse" aria-hidden="true" />
              <span>Clean-Tech &amp; DERMS Advisory &bull; New York</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-sand leading-[1.08]">
              A smarter grid starts with{" "}
              <span className="text-lime underline decoration-lime/40 decoration-wavy decoration-1 underline-offset-8">
                clearer thinking.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-sand/75 max-w-2xl font-normal leading-relaxed">
              PandGroup is an independent energy consultancy guiding utilities, municipal stakeholders,
              and clean-tech innovators through the architecture of Distributed Energy Resource Management Systems (DERMS),
              microgrid engineering, and regulatory grid transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-hover text-pine font-heading font-bold text-sm tracking-wide uppercase px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-lime/25 min-h-[48px]"
              >
                <span>Request Advisory Consultation</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-pine-surface/60 text-sand border border-sand/20 hover:border-lime/40 text-sm font-medium px-6 py-4 rounded-full transition-all duration-200 min-h-[48px]"
              >
                <span>Explore Core Capabilities</span>
              </a>
            </div>

            {/* Factual trust elements (no fabricated metrics) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-sand/65">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-lime" aria-hidden="true" />
                <span>FERC Order 2222 Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
                <span>CIM Standards (IEC 61968)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
                <span>NYC CLCPA Alignment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase using original PandGroup photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetrical frame styling */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-pine-surface/40">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/Rectangle-19.png"
                    alt="Electrical grid distribution systems and clean energy integration"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-transparent opacity-80" />
                </div>

                {/* Overlaid caption card */}
                <div className="p-6 bg-pine-deep/90 backdrop-blur-md border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-lime font-mono uppercase tracking-wider font-semibold">
                      Grid Architecture Focus
                    </span>
                    <span className="text-sand/50 font-mono">NY-METRO</span>
                  </div>
                  <p className="text-sm text-sand/85 font-medium leading-snug">
                    Bridging utility distribution constraints with flexible DER dispatch, battery storage, and microgrid controls.
                  </p>
                </div>
              </div>

              {/* Decorative secondary badge */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-sand text-pine p-4 rounded-2xl shadow-xl border border-pine-surface/30 max-w-[210px]">
                <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-sage-dark mb-1">
                  Strategic Scope
                </div>
                <div className="text-xs font-semibold text-pine leading-tight">
                  Tailor-Made DERMS &amp; DRMS Advisory
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
