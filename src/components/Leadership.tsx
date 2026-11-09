import Image from "next/image";
import { GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 lg:py-36 bg-sand text-pine border-t border-sand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-sand-dark shadow-2xl bg-pine-light">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/Web-photo-1.png"
                    alt="Delvin Del Stephens, Founder and Principal Consultant at PandGroup"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6 bg-pine text-sand space-y-1">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-sand">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h3>
                  <p className="text-lime text-xs font-mono uppercase tracking-wider font-semibold">
                    Founder &amp; Principal Energy Architect
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="text-sage-dark font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
                Executive Leadership
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-pine tracking-tight leading-tight">
                Over two decades directing high-stakes clean tech architecture.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-pine/85 leading-relaxed">
              <p>
                Delvin &ldquo;Del&rdquo; Stephens has over two decades of experience spearheading eight-figure clean tech client projects focused on DRMS and DERMS architecture. Del has become adept at evaluating complex &lsquo;build vs. buy&rsquo; decisions for technology solutions across the North American energy sector.
              </p>
              <p>
                Pursuing market-leading DRMS and DERMS strategies in the Carolinas, coupled with FERC 2222 compliance, lies at the heart of his practice. His leadership in establishing modular CIM-based clean tech ecosystems has been pivotal for integrating internal applications, enhancing grid data collection, and facilitating seamless utility operations.
              </p>
            </div>

            {/* Verified Academic & Professional Credentials */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-sand-light border border-sand-dark rounded-2xl p-4 space-y-2">
                <GraduationCap size={22} className="text-pine" aria-hidden="true" />
                <div className="text-xs font-heading font-bold text-pine uppercase tracking-wider">
                  Master&apos;s Degree
                </div>
                <p className="text-xs text-sage-dark">
                  M.S. in Energy Management &bull; New York Institute of Technology (NYIT)
                </p>
              </div>

              <div className="bg-sand-light border border-sand-dark rounded-2xl p-4 space-y-2">
                <BookOpen size={22} className="text-pine" aria-hidden="true" />
                <div className="text-xs font-heading font-bold text-pine uppercase tracking-wider">
                  Academic Lecturer
                </div>
                <p className="text-xs text-sage-dark">
                  Guest Lecturer &bull; Columbia University Ph.D. Electrical Engineering Dept.
                </p>
              </div>

              <div className="bg-sand-light border border-sand-dark rounded-2xl p-4 space-y-2">
                <Award size={22} className="text-pine" aria-hidden="true" />
                <div className="text-xs font-heading font-bold text-pine uppercase tracking-wider">
                  Industry Focus
                </div>
                <p className="text-xs text-sage-dark">
                  CIM ecosystems, FERC Order 2222, and wholesale market DER integration
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-pine hover:text-sage-dark transition-colors"
              >
                <span>Consult directly with Delvin Stephens</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

