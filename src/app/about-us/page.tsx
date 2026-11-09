import Image from "next/image";
import { GraduationCap, BookOpen, Award, LineChart, Lightbulb, Network } from "lucide-react";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Us — PandGroup Energy Advisory",
  description:
    "Learn about PandGroup, our founder Delvin Del Stephens, and our specialized clean tech and DERMS architecture advisory services.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32 bg-white">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            About Pandgroup
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Pioneering clean tech, DERMS architecture, and grid modernization.
          </h1>
          <p className="text-brand-gray/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            We help utilities, commercial operators, and energy innovators design scalable architectures, handle build vs. buy decisions, and achieve carbon neutrality.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-gray bg-brand-card">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/Web-photo-1.png"
                    alt="Delvin Stephens"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-brand-dark text-white">
                  <h2 className="font-heading font-bold text-2xl text-white">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h2>
                  <p className="text-brand-sky text-xs font-semibold uppercase tracking-wider mt-1">
                    Founder &bull; PandGroup
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block">
                Founder Credentials
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
                Two Decades of Clean Tech Leadership
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                <p>
                  Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading multiple (8) eight-figure clean tech, client projects focused on DRMS and DERMS architecture. Del has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for technology solutions.
                </p>
                <p>
                  Pursuing market-leading DRMS and DERMS strategies in the Carolinas, coupled with FERC 2222 compliance, lies at the heart of my recent endeavors. I have a strong understanding of the financial process of the commercial and regulated clean tech space.
                </p>
                <p>
                  Del&apos;s leadership in establishing modular CIM-based clean tech ecosystems has been pivotal for integrating internal applications and enhancing data collection. I have leveraged my product management and market design background, particularly within the North American energy sector, to facilitate seamless utility operations, ensuring scalability and technical excellence in a rapidly evolving energy landscape.
                </p>
                <p>
                  Del has a Master&apos;s in Energy management from the New York Institute of Technology and is a guest lecturer at Columbia University&apos;s Ph.D. Electrical Engineering Department.
                </p>
              </div>

              {/* Badges */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-brand-card border border-brand-gray rounded-xl p-4 space-y-1">
                  <GraduationCap size={20} className="text-brand-sky" />
                  <div className="text-xs font-bold text-brand-dark uppercase">NYIT Master&apos;s</div>
                  <p className="text-xs text-brand-muted">Energy Management</p>
                </div>
                <div className="bg-brand-card border border-brand-gray rounded-xl p-4 space-y-1">
                  <BookOpen size={20} className="text-brand-sky" />
                  <div className="text-xs font-bold text-brand-dark uppercase">Columbia Univ.</div>
                  <p className="text-xs text-brand-muted">Ph.D. Guest Lecturer</p>
                </div>
                <div className="bg-brand-card border border-brand-gray rounded-xl p-4 space-y-1">
                  <Award size={20} className="text-brand-sky" />
                  <div className="text-xs font-bold text-brand-dark uppercase">8-Figure Projects</div>
                  <p className="text-xs text-brand-muted">DRMS &amp; DERMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section on About Us */}
      <section className="py-20 sm:py-28 bg-brand-gray text-brand-charcoal border-t border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
              Our Core Services
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight">
              What We Do Best
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-brand-gray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6">
                  <LineChart size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Strategic Advisement
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Navigating the commercial clean tech sector, structuring regulatory and financial processes, and building scalable technology roadmaps.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-gray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Renewable Services Marketing
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Go-to-market strategies promoting sustainable energy solutions across solar, wind, battery storage, and hydropower sectors.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-gray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center mb-6">
                  <Network size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Technology Consultation
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Advanced software architectures, CIM data schemas, and regulatory compliance alignment (CLCPA, FERC 2222).
                </p>
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
