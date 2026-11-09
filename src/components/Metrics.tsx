"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Globe, TrendingUp, Award } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function MetricCounter({ icon, value, suffix, label }: MetricProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-3 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <div className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-midnight">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-slate text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="relative bg-ivory py-16 md:py-20">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <MetricCounter
            icon={<Zap size={22} />}
            value={500}
            suffix="+"
            label="MW Capacity Consulted"
          />
          <MetricCounter
            icon={<Globe size={22} />}
            value={50}
            suffix="+"
            label="Grid Projects Delivered"
          />
          <MetricCounter
            icon={<TrendingUp size={22} />}
            value={30}
            suffix="%"
            label="Avg. Cost Reduction"
          />
          <MetricCounter
            icon={<Award size={22} />}
            value={20}
            suffix="+"
            label="Years of Experience"
          />
        </div>
      </div>
    </section>
  );
}

