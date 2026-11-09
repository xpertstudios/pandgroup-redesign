"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Network,
  LineChart,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Network size={28} />,
    title: "DERMS Consulting & Design",
    description:
      "Crafting tailor-made Distributed Energy Resource Management System solutions to optimize grid stability, enhance energy reliability, and integrate renewable resources.",
    image: "/images/Rectangle-19.png",
    tags: ["Utility Integrations", "Microgrids", "VPP"],
  },
  {
    icon: <LineChart size={28} />,
    title: "Strategic Advisement",
    description:
      "Developing long-term strategies to achieve renewable technology and carbon-neutrality goals. Expert guidance through financial, operational, and regulatory landscapes.",
    image: "/images/Rectangle-20.png",
    tags: ["FERC 2222", "Build vs. Buy", "Scalability"],
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Renewable Services Marketing",
    description:
      "Creating go-to-market strategies that promote sustainable energy sources and encourage adoption of solar, wind, and hydropower solutions across all sectors.",
    image: "/images/Rectangle-21.png",
    tags: ["Solar", "Wind", "Hydropower"],
  },
  {
    icon: <Shield size={28} />,
    title: "Technology & Industry Consultation",
    description:
      "Keeping clients current on cutting-edge technologies, data analytics, and best practices. Navigating regulatory transitions like CLCPA and regional compliance.",
    image: "/images/Rectangle-19.png",
    tags: ["Data Analytics", "CLCPA", "Compliance"],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-midnight mb-6">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            From DERMS architecture to regulatory compliance, we provide
            end-to-end consulting for organizations navigating the clean energy
            transition.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group relative bg-ivory rounded-2xl overflow-hidden border border-slate-light/20 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-midnight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

