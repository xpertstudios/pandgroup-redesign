"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Projects", href: "/our-projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border py-2.5"
          : "bg-white border-b border-brand-border/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo with transparent light background asset */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky rounded-md"
            aria-label="PandGroup — Return to homepage"
          >
            <div className="relative w-36 sm:w-44 h-10 sm:h-12">
              <Image
                src="/images/pandgroup-logo-light.png"
                alt="PandGroup Energy Advisory"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-normal transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-brand-navy font-semibold bg-brand-offwhite border border-brand-border"
                      : "text-brand-slate hover:text-brand-sky hover:bg-brand-offwhite"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:347-450-3798"
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-sky px-3 py-2 rounded-lg transition-colors duration-200"
              aria-label="Call PandGroup at 347-450-3798"
            >
              <Phone size={13} className="text-brand-sky" aria-hidden="true" />
              <span>(347) 450-3798</span>
            </a>

            <Link
              href="/derms-ebook"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-purple hover:text-brand-purplelight px-3 py-2 rounded-md transition-colors"
            >
              <span>DERMS E-Book</span>
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-sky/20 min-h-[44px]"
            >
              <span>Consultation</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-brand-slate hover:text-brand-sky hover:bg-brand-offwhite transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-full bg-white border-b border-brand-border shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-3 text-base font-heading font-medium rounded-lg transition-colors min-h-[44px] flex items-center justify-between ${
                    isActive
                      ? "text-brand-sky bg-brand-sky/10 font-bold"
                      : "text-brand-slate hover:text-brand-sky hover:bg-brand-offwhite"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-brand-muted" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
            <Link
              href="/derms-ebook"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-offwhite text-brand-purple font-heading font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-md border border-brand-border hover:bg-brand-border transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <span>Download Free DERMS E-Book</span>
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-md transition-colors min-h-[44px] flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Schedule Free Consultation</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>

            <a
              href="tel:347-450-3798"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-brand-muted hover:text-brand-sky"
            >
              <Phone size={14} className="text-brand-sky" />
              <span>(347) 450-3798</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
