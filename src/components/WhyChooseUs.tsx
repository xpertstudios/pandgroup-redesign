import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-sky/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
              Strategic Partnership
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to modernize your grid architecture?
            </h2>
            <p className="text-brand-offwhite/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              We specialize in tailor-made DERMS solutions, utility integrations, microgrids, and strategic clean-tech consulting to keep your projects on schedule and fully compliant.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all duration-200 shadow-md min-h-[48px]"
            >
              <span>Schedule Free Consultation</span>
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="tel:347-450-3798"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-md border border-white/20 transition-all duration-200 min-h-[48px]"
            >
              <Phone size={15} className="text-brand-sky" />
              <span>Call (347) 450-3798</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
