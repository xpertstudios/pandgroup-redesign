import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Network, LineChart, Lightbulb, Zap } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      {/* 1. CINEMATIC SPLIT HERO */}
      <section className="relative bg-brand-navy text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-sky/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-purple/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-brand-sky/15 border border-brand-sky/30 text-brand-sky text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider max-w-full">
                <Zap size={13} aria-hidden="true" className="shrink-0" />
                <span className="truncate sm:whitespace-normal">DERMS &bull; Microgrids &bull; Virtual Power Plants</span>
              </div>

              <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
                A smarter grid starts with{" "}
                <span className="text-brand-sky inline-block">clearer thinking.</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-offwhite/85 max-w-2xl font-normal leading-relaxed">
                PandGroup is an independent energy consultancy guiding utilities, municipal leaders, and clean-tech operators through tailor-made DERMS architecture, demand response optimization, and regulatory grid transformation.
              </p>

              {/* Primary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-md transition-all shadow-md hover:shadow-brand-sky/20 min-h-[48px]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/25 hover:border-brand-sky/50 text-xs font-heading font-bold uppercase tracking-wider px-6 py-4 rounded-md transition-all min-h-[48px]"
                >
                  <span>Explore Expertise</span>
                </Link>
              </div>

              {/* Factual Trust Indicators */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-brand-offwhite/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-sky" />
                  <span>FERC 2222 Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-sky" />
                  <span>CIM-Based Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-sky" />
                  <span>NYC CLCPA Alignment</span>
                </div>
              </div>
            </div>

            {/* Right Media Composition with Original Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-brand-navydark">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Rectangle-19.png"
                    alt="Electrical distribution and clean energy grid systems"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navydark via-transparent to-transparent opacity-85" />
                </div>
                <div className="p-6 bg-brand-navydark/95 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-heading font-bold text-brand-sky uppercase tracking-wider">
                      Grid Modernization
                    </span>
                    <span className="text-brand-offwhite/50 font-mono text-[11px]">
                      NEW YORK
                    </span>
                  </div>
                  <p className="text-sm text-brand-offwhite/85 leading-snug">
                    Designing and implementing cutting-edge DERMS from the ground up to turn complex grid challenges into scalable, reliable architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-brand-offwhite text-brand-slate border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
              Our Core Services
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Tailored consulting across every stage of the clean energy transition.
            </h2>
            <p className="text-brand-muted text-base mt-3 leading-relaxed">
              We turn complex software evaluations, regulatory filings, and distributed energy integrations into clear operational blueprints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl border border-brand-border hover:border-brand-sky/50 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-0.5 duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                  <LineChart size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  Strategic Advisement
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  We help your organization develop and implement strategies to achieve renewable technology goals. With expert guidance and insights, we help clients make informed decisions in commercial and regulated clean-tech markets.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky group-hover:text-brand-skyhover pt-4 border-t border-brand-border"
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl border border-brand-border hover:border-brand-sky/50 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-0.5 duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  Renewable Services Marketing
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  We help your business create a strategy that promotes sustainable energy sources, such as solar, wind, and hydropower, to encourage their adoption by consumers, enterprise businesses, and municipal agencies.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-purple group-hover:text-brand-purplelight pt-4 border-t border-brand-border"
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl border border-brand-border hover:border-brand-sky/50 transition-all p-8 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-0.5 duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                  <Network size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  DERMS &amp; Technology Consultation
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  We help your company stay current with cutting-edge energy management technologies, data analytics, and best practices in an ever-evolving regulatory landscape including FERC Order 2222 and the NY CLCPA.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky group-hover:text-brand-skyhover pt-4 border-t border-brand-border"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRE-DEVELOPMENT PROJECTS */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
                Project Initiatives
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
                Pre-Development Infrastructure Concepts
              </h2>
            </div>
            <Link
              href="/our-projects"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
            >
              <span>Explore All Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border flex flex-col group hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] w-full bg-brand-navy">
                <Image
                  src="/images/slide5_img0.png"
                  alt="Urban Retail Microgrids"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-sky text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand-sky/30">
                  Concept &bull; NYC Waterfront
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    Urban Retail Microgrids
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    A proposed predevelopment project retrofitting existing commercial factory space into an urban food hall with battery storage, rooftop solar, and EV fast charging across Red Hook and Carroll Gardens.
                  </p>
                </div>
                <Link
                  href="/our-projects"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover pt-3 border-t border-brand-border/60"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border flex flex-col group hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] w-full bg-brand-navy">
                <Image
                  src="/images/slide4_img0.png"
                  alt="The Bronx Mobility Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-sky text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand-sky/30">
                  Concept &bull; Transit Infrastructure
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    The Bronx Mobility Hub
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    Proposing a full-yard platform above Concourse Yard that preserves transit operations while generating clean solar power, fast EV charging, and potential 10 MW battery storage.
                  </p>
                </div>
                <Link
                  href="/our-projects"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover pt-3 border-t border-brand-border/60"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border flex flex-col group hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] w-full bg-brand-navy">
                <Image
                  src="/images/Rectangle-3.png"
                  alt="Zero Carbon Adventures"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-sky text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand-sky/30">
                  Concept &bull; Catskills Off-Grid
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    Zero Carbon Adventures
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    Sunset Camp reimagines sustainable outdoor hospitality in the Catskills, combining thoughtful design with carbon-free off-grid renewable power.
                  </p>
                </div>
                <Link
                  href="/our-projects"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover pt-3 border-t border-brand-border/60"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SECTION */}
      <section className="py-20 sm:py-28 bg-brand-offwhite text-brand-slate border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/Web-photo-1.png"
                    alt="Delvin Del Stephens - Founder of PandGroup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-brand-navy text-white">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h3>
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
                  Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading multiple eight-figure clean-tech client projects focused on DRMS and DERMS architecture. He has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for software and hardware energy solutions.
                </p>
                <p>
                  Pursuing market-leading DRMS and DERMS strategies, coupled with FERC 2222 compliance, lies at the heart of his practice. His leadership in establishing modular CIM-based clean tech ecosystems has been pivotal for integrating internal utility applications and enhancing data collection.
                </p>
                <p>
                  Del holds a Master&apos;s in Energy Management from the New York Institute of Technology (NYIT) and is a guest lecturer at Columbia University&apos;s Ph.D. Electrical Engineering Department.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
                >
                  <span>Learn More About PandGroup</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL INSIGHTS */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
                Industry Insights
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
                Latest Publications
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
            >
              <span>View All Articles</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-all flex flex-col group">
              <Link href="/can-new-york-city-really-go-100-renewables" className="relative aspect-[16/10] w-full block bg-brand-navy">
                <Image
                  src="/images/Rectangle-11-1.png"
                  alt="Can New York City Really Go 100% Renewables"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-sky transition-colors">
                  <Link href="/can-new-york-city-really-go-100-renewables">
                    Can New York City Really Go 100% Renewables?
                  </Link>
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                  There are roughly 8.3 million people living in NYC within a 300 square mile area. As a result, NYC is one of the toughest cities to find open real estate for development...
                </p>
                <Link
                  href="/can-new-york-city-really-go-100-renewables"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>

            <article className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-all flex flex-col group">
              <Link href="/what-is-the-climate-leadership-and-community-protection-act" className="relative aspect-[16/10] w-full block bg-brand-navy">
                <Image
                  src="/images/Rectangle-12-1.png"
                  alt="What is the Climate Leadership and Community Protection Act"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-sky transition-colors">
                  <Link href="/what-is-the-climate-leadership-and-community-protection-act">
                    What is the Climate Leadership and Community Protection Act
                  </Link>
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                  NY State has passed Senate bill S6599 titled the Climate Leadership and Community Protection Act CLCPA. This bill would mandate that New York State go totally carbon-neutral by 2050...
                </p>
                <Link
                  href="/what-is-the-climate-leadership-and-community-protection-act"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-brand-skyhover"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. PAST CLIENTS LOGOS */}
      <Clients />

      {/* 7. STRATEGIC CTA BANNER */}
      <WhyChooseUs />
    </div>
  );
}
