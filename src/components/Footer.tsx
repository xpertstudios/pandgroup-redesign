import Image from "next/image";
import { ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/10 text-white pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-36 h-12">
                <Image
                  src="/images/Pandgroup-Logo-1.webp"
                  alt="PandGroup Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              PandGroup is an elite clean energy consultancy delivering tailored DERMS architectures, demand response strategies, and urban microgrid engineering for utilities and municipal leaders.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/pandgroup/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/zjQxYaNFEYwi4R5q/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  DERMS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Demand Response (DRMS)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  FERC 2222 Compliance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Virtual Power Plants (VPP)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Microgrid Feasibility
                </a>
              </li>
            </ul>
          </div>

          {/* Initiatives & Insights */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">
                  Bronx Clean Mobility Hub
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">
                  Commercial Fleet Storage
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-gold transition-colors">
                  CLCPA Guidebook
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-gold transition-colors">
                  Executive Whitepapers
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  Columbia Univ. Lectures
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              HQ Headquarters
            </h4>
            <address className="not-italic text-sm text-white/60 space-y-2 leading-relaxed">
              <p>90 Vermilyea Ave, Ste 251</p>
              <p>New York, NY 10034-9998</p>
              <p className="pt-2 text-gold font-medium">Phone: (347) 450-3798</p>
              <p className="text-xs text-white/40">Mon - Sat: 9:00am - 6:00pm EST</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-forest-light" />
            <span>&copy; 2026 PandGroup LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-gold transition-colors">Terms of Service</a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
