"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GraduationCap, Award, Briefcase, ArrowRight } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-midnight relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Image */}
          <div className="reveal">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-forest/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Web-photo-1.png"
                  alt="Delvin Stephens - Founder of PandGroup"
                  width={600}
                  height={480}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight via-midnight/90 to-transparent p-6 pt-16">
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white">
                    Delvin &ldquo;Del&rdquo; Stephens
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1">
                    Founder & Principal Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
                About the Founder
              </span>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Two Decades of{" "}
                <span className="text-gold">Clean Tech Leadership</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Del Stephens has over two decades of experience spearheading
                multiple eight-figure clean tech projects focused on DRMS and
                DERMS architecture. He has become adept at evaluating complex
                &lsquo;build vs. buy&rsquo; decisions for technology solutions.
              </p>
            </div>

            <div className="reveal space-y-4">
              <p className="text-white/50 leading-relaxed">
                His leadership in establishing modular CIM-based clean tech
                ecosystems has been pivotal for integrating internal applications
                and enhancing data collection. Leveraging product management and
                market design expertise within the North American energy sector,
                Del ensures scalability and technical excellence in a rapidly
                evolving energy landscape.
              </p>
            </div>

            {/* Credentials */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-gold/30 transition-colors">
                <GraduationCap className="text-gold mx-auto mb-2" size={24} />
                <p className="text-white/80 text-sm font-medium">
                  M.S. Energy Mgmt
                </p>
                <p className="text-white/40 text-xs mt-1">NYIT</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-gold/30 transition-colors">
                <Award className="text-gold mx-auto mb-2" size={24} />
                <p className="text-white/80 text-sm font-medium">
                  Guest Lecturer
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Columbia University
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-gold/30 transition-colors">
                <Briefcase className="text-gold mx-auto mb-2" size={24} />
                <p className="text-white/80 text-sm font-medium">
                  8-Figure Projects
                </p>
                <p className="text-white/40 text-xs mt-1">Clean Tech</p>
              </div>
            </div>

            <div className="reveal">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold text-midnight px-7 py-3.5 rounded-lg font-semibold hover:bg-gold-light transition-all duration-200 group"
              >
                Work With Del
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

