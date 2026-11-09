"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { src: "/images/image-3.png", alt: "Client 1", width: 284, height: 80 },
  { src: "/images/image-4.png", alt: "Client 2", width: 238, height: 80 },
  { src: "/images/image-5.png", alt: "Client 3", width: 328, height: 80 },
];

export default function Clients() {
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <span className="text-slate text-sm font-semibold tracking-widest uppercase">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-midnight mt-3">
            Past Clients
          </h2>
        </div>

        <div className="reveal flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

