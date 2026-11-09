"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function EnergyGridSVG() {
  return (
    <svg
      viewBox="0 0 500 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid lines */}
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A843" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#D4A843" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A843" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d5e49" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#2d5e49" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2d5e49" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Horizontal grid lines */}
      {[80, 160, 240, 320].map((y, i) => (
        <line
          key={`h-${i}`}
          x1="20"
          y1={y}
          x2="480"
          y2={y}
          stroke="url(#lineGrad)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}

      {/* Vertical grid lines */}
      {[80, 170, 260, 340, 420].map((x, i) => (
        <line
          key={`v-${i}`}
          x1={x}
          y1="20"
          x2={x}
          y2="380"
          stroke="url(#lineGradV)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}

      {/* Connection lines */}
      <path
        d="M 80 80 L 170 160 L 260 120 L 340 200 L 420 160"
        fill="none"
        stroke="#D4A843"
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="8 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M 80 240 L 170 200 L 260 280 L 340 240 L 420 300"
        fill="none"
        stroke="#2d5e49"
        strokeWidth="2"
        opacity="0.5"
        strokeDasharray="8 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="100"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Energy nodes */}
      {[
        { cx: 80, cy: 80, label: "Solar", color: "#D4A843" },
        { cx: 170, cy: 160, label: "BESS", color: "#2d5e49" },
        { cx: 260, cy: 120, label: "Wind", color: "#D4A843" },
        { cx: 340, cy: 200, label: "DERMS", color: "#D4A843" },
        { cx: 420, cy: 160, label: "Grid", color: "#2d5e49" },
        { cx: 80, cy: 240, label: "EV", color: "#2d5e49" },
        { cx: 170, cy: 200, label: "DER", color: "#D4A843" },
        { cx: 260, cy: 280, label: "Micro", color: "#2d5e49" },
        { cx: 340, cy: 240, label: "VPP", color: "#D4A843" },
        { cx: 420, cy: 300, label: "Load", color: "#2d5e49" },
      ].map((node, i) => (
        <g key={i} className="grid-node" filter="url(#glow)">
          <circle
            cx={node.cx}
            cy={node.cy}
            r="18"
            fill={node.color}
            opacity="0.15"
          />
          <circle cx={node.cx} cy={node.cy} r="8" fill={node.color} opacity="0.7" />
          <circle cx={node.cx} cy={node.cy} r="4" fill="white" opacity="0.9" />
          <text
            x={node.cx}
            y={node.cy + 32}
            textAnchor="middle"
            fill="white"
            opacity="0.5"
            fontSize="10"
            fontFamily="var(--font-heading)"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Central hub highlight */}
      <circle cx="260" cy="200" r="40" fill="#D4A843" opacity="0.05">
        <animate
          attributeName="r"
          values="35;50;35"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.05;0.12;0.05"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal on load
    const elements = sectionRef.current?.querySelectorAll(".hero-reveal");
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-midnight overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-forest opacity-80" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left — Text content */}
        <div className="space-y-8">
          <div className="hero-reveal reveal">
            <span className="inline-block bg-forest/30 text-gold border border-forest-light/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              DERMS Architecture & Strategy
            </span>
          </div>

          <h1 className="hero-reveal reveal font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Powering the{" "}
            <span className="text-gold">next generation</span> of energy
            infrastructure
          </h1>

          <p className="hero-reveal reveal text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
            We design tailor-made DERMS solutions that optimize grid stability,
            reduce costs by up to 30%, and accelerate your transition to clean
            energy.
          </p>

          <div className="hero-reveal reveal flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-midnight px-7 py-3.5 rounded-lg font-semibold hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 group"
            >
              Request a Proposal
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Explore Case Studies
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-reveal reveal flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              FERC 2222 Compliant
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="text-white/40 text-sm">20+ Years Experience</div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="text-white/40 text-sm hidden sm:block">New York, NY</div>
          </div>
        </div>

        {/* Right — Energy grid visualization */}
        <div className="hero-reveal reveal hidden md:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 to-forest/5 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="text-white/30 text-xs ml-2 font-mono">
                  grid-topology.view
                </span>
              </div>
              <EnergyGridSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#metrics"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

