import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Network, LineChart, Lightbulb, BookOpen } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sky/15 border border-brand-sky/30 text-brand-sky text-xs font-heading font-semibold uppercase tracking-wider">
                <span>Utility Integrations &bull; Microgrids &bull; Virtual Power Plants (VPP)</span>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
                Designing and implementing a <span className="text-brand-sky">cutting-edge DERMS</span> from the ground up.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-brand-gray/90 max-w-2xl leading-relaxed">
                <p>
                  Your Distributed Energy Resource Management System (DERMS) is the cornerstone of an efficient, future-proof grid in today&apos;s rapidly evolving energy landscape. However, designing and implementing a cutting-edge DERMS from the ground up is no small feat.
                </p>
                <p className="font-semibold text-white">
                  That&apos;s where we come in.
                </p>
                <p>
                  At Pandgroup, we specialize in crafting tailor-made DERMS solutions that optimize grid stability, enhance energy reliability, and empower the seamless integration of renewable resources. With our deep expertise in energy systems, data analytics, and grid modernization, we turn complex challenges into streamlined, scalable architectures.
                </p>
                <p className="text-brand-sky font-medium">
                  Whether you want to revolutionize your energy operations or stay ahead of regulatory demands, our team brings visionary thinking and hands-on experience to your most ambitious projects. Let&apos;s design the future of energy together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-md transition-all shadow-md min-h-[48px]"
                >
                  <span>Contact Us</span>
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
                  <span>CIM-Based Clean Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-sky" />
                  <span>New York State CLCPA</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
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
              We turn complex challenges into streamlined, scalable architectures.
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
                  We can help your organization develop and implement strategies to achieve renewable technology goals. With our expert guidance and insights, we help clients make informed decisions.
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
                  We can help your business create a strategy that promotes sustainable energy sources, such as solar, wind, and hydropower, to encourage their adoption by consumers, businesses, and governments.
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
                  Consultation
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  We can help your company stay current with the latest technologies and best practices in an ever-evolving landscape.
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

      {/* Featured Blog Posts on Homepage */}
      <section className="py-20 sm:py-28 bg-brand-gray text-brand-charcoal border-y border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
                Industry Insights
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight">
                Latest Publications
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline"
            >
              <span>View All Articles</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-md transition-all flex flex-col group">
              <Link href="/can-new-york-city-really-go-100-renewables" className="relative aspect-[16/10] w-full block bg-brand-gray">
                <Image
                  src="/images/Rectangle-11-1.png"
                  alt="Can New York City Really Go 100% Renewables"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-sky transition-colors">
                  <Link href="/can-new-york-city-really-go-100-renewables">
                    Can New York City Really Go 100% Renewables?
                  </Link>
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                  There are roughly 8.3 million people living in NYC within a 300 square mile area. As a result, NYC is one of the toughest cities to find open real estate for development...
                </p>
                <Link
                  href="/can-new-york-city-really-go-100-renewables"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-md transition-all flex flex-col group">
              <Link href="/what-is-the-climate-leadership-and-community-protection-act" className="relative aspect-[16/10] w-full block bg-brand-gray">
                <Image
                  src="/images/Rectangle-12-1.png"
                  alt="What is the Climate Leadership and Community Protection Act"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-sky transition-colors">
                  <Link href="/what-is-the-climate-leadership-and-community-protection-act">
                    What is the Climate Leadership and Community Protection Act
                  </Link>
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                  NY State has passed Senate bill S6599 titled the Climate Leadership and Community Protection Act CLCPA. This bill would mandate that New York State go totally carbon-neutral by 2050...
                </p>
                <Link
                  href="/what-is-the-climate-leadership-and-community-protection-act"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-gray bg-white">
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
                Founder
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
                Two Decades of Clean Tech Leadership
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                <p>
                  Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading multiple (8) eight-figure clean tech, client projects focused on DRMS and DERMS architecture. Del has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for technology solutions. Pursuing market-leading DRMS and DERMS strategies in the Carolinas, coupled with FERC 2222 compliance, lies at the heart of my recent endeavors. I have a strong understanding of the financial process of the commercial and regulated clean tech space.
                </p>
                <p>
                  Del&apos;s leadership in establishing modular CIM-based clean tech ecosystems has been pivotal for integrating internal applications and enhancing data collection. I have leveraged my product management and market design background, particularly within the North American energy sector, to facilitate seamless utility operations, ensuring scalability and technical excellence in a rapidly evolving energy landscape.
                </p>
                <p>
                  Del has a Master&apos;s in Energy management from the New York Institute of Technology and is a guest lecturer at Columbia University&apos;s Ph.D. Electrical Engineering Department.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-sm"
                >
                  <span>Learn More</span>
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
    </div>
  );
}
