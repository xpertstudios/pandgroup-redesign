import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-sand border-t border-pine-surface/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-pine-surface/60">
          {/* Col 1: Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-44 h-11">
              <Image
                src="/images/Pandgroup-Logo-1.webp"
                alt="PandGroup"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-sand/70 max-w-sm leading-relaxed">
              PandGroup is an independent energy consultancy guiding utilities, municipal stakeholders,
              and clean-tech innovators through DERMS architecture, demand response, and regulatory modernization.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-sage-light">
              <span className="w-2 h-2 rounded-full bg-lime" aria-hidden="true" />
              <span>Independent Clean Energy Advisory &bull; New York</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-lime">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand/75">
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  DERMS &amp; DRMS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  Strategic Build vs. Buy Advisement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  Microgrid &amp; BESS Feasibility
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-lime transition-colors">
                  IEC CIM 61968 System Integration
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-lime transition-colors">
                  FERC Order 2222 Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-lime">
              Practice Headquarters
            </h4>
            <address className="not-italic text-xs sm:text-sm text-sand/75 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-lime shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  90 Vermilyea Ave, Suite 251<br />
                  New York, NY 10034-9998
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-lime shrink-0" aria-hidden="true" />
                <a
                  href="mailto:D.Stephens@pandgroup.com"
                  className="hover:text-lime transition-colors"
                >
                  D.Stephens@pandgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-lime shrink-0" aria-hidden="true" />
                <a
                  href="tel:347-450-3798"
                  className="hover:text-lime transition-colors"
                >
                  (347) 450-3798
                </a>
              </div>
            </address>

            <div className="pt-2 text-[11px] text-sand/50">
              Hours: Mon – Sat: 9:00 AM – 6:00 PM EST
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>
            &copy; 2026 PandGroup LLC. All rights reserved. Proposed Next.js redesign for pandgroup.com.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://pandgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              Current Live Site (pandgroup.com)
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-lime transition-colors min-h-[44px]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
