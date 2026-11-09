"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Actual PandGroup Logo image */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-40 h-10 md:w-44 md:h-12">
            <Image
              src="/images/Pandgroup-Logo-1.webp"
              alt="PandGroup Logo"
              fill
              priority
              className="object-contain object-left group-hover:scale-105 transition-transform"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:347-450-3798"
            className="flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-gold border border-white/15 px-3 py-2 rounded-lg transition-colors"
          >
            <PhoneCall size={14} className="text-gold" />
            <span>(347) 450-3798</span>
          </a>
          <a
            href="#contact"
            className="bg-gold text-midnight px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-gold-light transition-all duration-200 shadow-md hover:shadow-gold/20"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-midnight/98 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-white/80 hover:text-gold text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:347-450-3798"
              className="flex items-center justify-center gap-2 text-sm text-white/80 py-2"
            >
              <PhoneCall size={16} className="text-gold" />
              <span>(347) 450-3798</span>
            </a>
            <a
              href="#contact"
              className="block bg-gold text-midnight px-5 py-3 rounded-lg text-sm font-bold text-center hover:bg-gold-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
