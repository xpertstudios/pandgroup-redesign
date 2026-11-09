import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Network, LineChart, Lightbulb, BookOpen } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sky/15 border border-brand-sky/30 text-brand-sky text-xs font-heading font-semibold uppercase tracking-wider">
                <span>Utility Integrations &bull; Microgrids &bull; Virtual Power Plants (VPP)</span>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                Tailor-made <span className="text-brand-sky">DERMS solutions</span> for an evolving grid.
              </h1>

              <p className="text-base sm:text-lg text-brand-gray/90 max-w-2xl leading-relaxed">
                Your Distributed Energy Resource Management System (DERMS) is the cornerstone of an efficient, future-proof grid in today&apos;s rapidly evolving energy landscape. At Pandgroup, we specialize in crafting solutions that optimize grid stability, enhance energy reliability, and facilitate the seamless integration of renewable resources.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-md transition-all shadow-md min-h-[48px]"
                >
                  <span>Request Free Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/derms-ebook"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-heading font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all shadow-md min-h-[48px]"
                >
                  <BookOpen size={16} />
                  <span>Download Free E-Book</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-brand-gray/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-sky" />
                  <span>FERC 2222 Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-sky" />
                  <span>CIM-Based Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-sky" />
                  <span>New York State CLCPA Support</span>
                </div>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-white/5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Rectangle-19.png"
                    alt="DERMS and grid management technology"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 bg-brand-dark/95 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-sky uppercase tracking-wider block">
                    Core Specialization
                  </span>
                  <p className="text-sm text-brand-gray leading-snug">
                    Designing and implementing cutting-edge DERMS from the ground up for utilities, microgrids, and clean-tech operators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
              Our Services
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight">
              Comprehensive Clean Energy Consulting
            </h2>
            <p className="text-brand-muted text-base mt-3">
              Tailored services designed to guide clients through complex financial, operational, and regulatory landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Strategic Advisement */}
            <div className="bg-brand-card rounded-2xl border border-brand-gray hover:border-brand-sky/40 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                  <LineChart size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Strategic Advisement
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Developing and implementing long-term strategies to achieve renewable technology and carbon-neutrality goals. Guiding clients through financial, operational, and regulatory landscapes in the clean tech sector.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline pt-4 border-t border-brand-gray"
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Card 2: Renewable Services Marketing */}
            <div className="bg-brand-card rounded-2xl border border-brand-gray hover:border-brand-sky/40 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Renewable Services Marketing
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Assisting companies in creating go-to-market strategies that promote sustainable energy sources. Encouraging the adoption of solar, wind, and hydropower solutions across consumer, corporate, and governmental sectors.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline pt-4 border-t border-brand-gray"
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Card 3: Consultation */}
            <div className="bg-brand-card rounded-2xl border border-brand-gray hover:border-brand-sky/40 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                  <Network size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Technology Consultation
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Keeping clients current on cutting-edge technologies, data analytics, and best practices in modern energy systems. Helping firms navigate regulatory transitions like the CLCPA.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline pt-4 border-t border-brand-gray"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-28 bg-brand-gray text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/Web-photo-1.png"
                    alt="Delvin Del Stephens - Founder of PandGroup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-brand-dark text-white">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h3>
                  <p className="text-brand-sky text-xs font-semibold uppercase tracking-wider mt-1">
                    Founder &bull; PandGroup
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
                Executive Leadership
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
                Over two decades leading eight-figure clean tech projects.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                <p>
                  Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading multiple (8) eight-figure clean tech, client projects focused on DRMS and DERMS architecture. Del has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for technology solutions.
                </p>
                <p>
                  Pursuing market-leading DRMS and DERMS strategies in the Carolinas, coupled with FERC 2222 compliance, lies at the heart of his recent endeavors. Del has a strong understanding of the financial process of the commercial and regulated clean tech space.
                </p>
                <p>
                  Del holds a Master&apos;s in Energy Management from the New York Institute of Technology (NYIT) and is a guest lecturer at Columbia University&apos;s Ph.D. Electrical Engineering Department.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowUpRight size={15} />
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
    </>
  );
}
