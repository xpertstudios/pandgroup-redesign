import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpen, Award, LineChart, Lightbulb, Network, ArrowUpRight } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Us — PandGroup Clean Energy Advisory",
  description:
    "Learn about PandGroup, our founder Delvin Del Stephens, and our specialized clean tech and DERMS architecture advisory services.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Page Header Banner */}
      <section className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-sky/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            About Pandgroup
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Pioneering clean tech, DERMS architecture, and grid modernization.
          </h1>
          <p className="text-brand-offwhite/85 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            We help utilities, commercial operators, and energy innovators design scalable architectures, handle build vs. buy decisions, and achieve carbon neutrality.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-brand-offwhite">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/Web-photo-1.png"
                    alt="Delvin Stephens - Founder of PandGroup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-brand-navy text-white">
                  <h2 className="font-heading font-bold text-2xl text-white">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h2>
                  <p className="text-brand-sky text-xs font-semibold uppercase tracking-wider mt-1">
                    Founder &bull; Principal Energy Architect
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
                Executive Leadership
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                Two Decades of Clean Tech Leadership
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                <p>
                  Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading multiple eight-figure clean-tech client projects focused on DRMS and DERMS architecture. Del has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for technology solutions.
                </p>
                <p>
                  Pursuing market-leading DRMS and DERMS strategies in the Carolinas, coupled with FERC 2222 compliance, lies at the heart of his practice. He possesses deep expertise in the commercial and regulated financial structures shaping the clean energy transition.
                </p>
                <p>
                  His leadership in establishing modular CIM-based clean tech ecosystems has been pivotal for integrating internal applications and enhancing grid telemetry. Leveraging product management and market design experience across the North American energy sector, Del ensures technical excellence and long-term operational resilience.
                </p>
                <p>
                  Del holds a Master&apos;s in Energy Management from the New York Institute of Technology (NYIT) and is a guest lecturer at Columbia University&apos;s Ph.D. Electrical Engineering Department.
                </p>
              </div>

              {/* Verified Credentials Badges */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-brand-offwhite border border-brand-border rounded-xl p-4 space-y-1.5">
                  <GraduationCap size={20} className="text-brand-sky" />
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wide">NYIT Master&apos;s</div>
                  <p className="text-xs text-brand-muted">Energy Management</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-border rounded-xl p-4 space-y-1.5">
                  <BookOpen size={20} className="text-brand-purple" />
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wide">Columbia Univ.</div>
                  <p className="text-xs text-brand-muted">Ph.D. Guest Lecturer</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-border rounded-xl p-4 space-y-1.5">
                  <Award size={20} className="text-brand-sky" />
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wide">8-Figure Projects</div>
                  <p className="text-xs text-brand-muted">DRMS &amp; DERMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 sm:py-28 bg-brand-offwhite text-brand-slate border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
              Our Core Services
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              What We Do Best
            </h2>
            <p className="text-brand-muted text-base mt-3">
              Independent, technically grounded consulting tailored to utilities and clean-tech leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6">
                  <LineChart size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  Strategic Advisement
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Navigating the commercial clean tech sector, structuring regulatory and financial processes, and building scalable technology roadmaps that de-risk major capital investments.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
                >
                  <span>Request Advisement</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center mb-6">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  Renewable Services Marketing
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Crafting go-to-market strategies that promote sustainable energy sources across solar, wind, battery storage, and hydropower sectors, driving widespread adoption.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-purple hover:text-brand-purplelight"
                >
                  <span>Request Strategy</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6">
                  <Network size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  Technology Consultation
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Advanced software architectures, CIM data schemas, and regulatory compliance alignment (CLCPA, FERC 2222) ensuring interoperability across internal systems.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Clients Component */}
      <Clients />

      {/* Why Choose Us CTA Component */}
      <WhyChooseUs />
    </div>
  );
}
