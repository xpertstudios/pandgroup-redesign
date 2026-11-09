"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "Focus", href: "#focus" },
  { label: "Services", href: "#services" },
  { label: "Methodology", href: "#methodology" },
  { label: "Leadership", href: "#leadership" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pine/95 backdrop-blur-md border-b border-pine-surface/80 py-3 shadow-lg shadow-black/20"
          : "bg-pine/70 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-md"
            aria-label="PandGroup — Return to top"
          >
            <div className="relative w-36 sm:w-44 h-9 sm:h-11">
              <Image
                src="/images/Pandgroup-Logo-1.webp"
                alt="PandGroup"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </div>
            <span className="hidden xl:inline-block pl-3 border-l border-white/10 text-[11px] uppercase tracking-widest text-sage-light font-medium">
              Energy Advisory
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-sand/80 hover:text-lime rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:347-450-3798"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-medium text-sand/75 hover:text-lime px-3 py-2 rounded-lg transition-colors duration-200"
              aria-label="Call PandGroup at 347-450-3798"
            >
              <Phone size={13} className="text-lime" aria-hidden="true" />
              <span>(347) 450-3798</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-lime hover:bg-lime-hover text-pine font-heading font-semibold text-xs sm:text-sm tracking-wide uppercase px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-lime/20 min-h-[44px]"
            >
              <span>Consultation</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-sand hover:text-lime hover:bg-pine-surface/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-full bg-pine-deep/98 backdrop-blur-xl border-b border-pine-surface/80 transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-3 text-lg font-heading font-medium text-sand hover:text-lime hover:bg-pine-surface/40 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-pine-surface/60 flex flex-col gap-3">
            <a
              href="tel:347-450-3798"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-3 px-3 text-sm text-sand/80 hover:text-lime min-h-[44px]"
            >
              <Phone size={16} className="text-lime" aria-hidden="true" />
              <span>Direct Phone: (347) 450-3798</span>
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-lime hover:bg-lime-hover text-pine font-heading font-bold text-sm tracking-wide uppercase py-3.5 px-6 rounded-full transition-colors min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>Schedule Preliminary Consultation</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
