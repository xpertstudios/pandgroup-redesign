import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navydark text-white border-t border-brand-navy pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            {/* Transparent dark-variant logo with original purple/blue icon and white text */}
            <Link
              href="/"
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky rounded-md"
              aria-label="PandGroup — Return to homepage"
            >
              <Image
                src="/images/pandgroup-logo-dark.png"
                alt="PandGroup Distributed Energy Advisory"
                width={595}
                height={154}
                className="w-[185px] sm:w-[215px] h-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-sm text-brand-offwhite/75 max-w-sm leading-relaxed">
              Pandgroup specializes in crafting tailor-made DERMS solutions designed to optimize grid stability, enhance energy reliability, and facilitate the seamless integration of renewable resources.
            </p>
            <div className="pt-2">
              <Link
                href="/derms-ebook"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-sky hover:text-white transition-colors"
              >
                <span>&rarr; Download Free DERMS Guide (PDF)</span>
              </Link>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-sky">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-offwhite/80">
              <li>
                <Link href="/" className="hover:text-brand-sky transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-sky transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-projects" className="hover:text-brand-sky transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-sky transition-colors">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/derms-ebook" className="hover:text-brand-sky transition-colors">
                  DERMS E-Book
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-sky transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details from actual PandGroup site */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-sky">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-brand-offwhite/80">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-brand-sky shrink-0 mt-0.5" />
                <span>
                  90 Vermilyea Ave, Suite 251<br />
                  New York, NY 10034-9998
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-brand-sky shrink-0" />
                <a
                  href="mailto:D.Stephens@pandgroup.com"
                  className="hover:text-brand-sky transition-colors text-brand-sky font-medium"
                >
                  D.Stephens@pandgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={17} className="text-brand-sky shrink-0" />
                <a
                  href="tel:347-450-3798"
                  className="hover:text-brand-sky transition-colors font-medium"
                >
                  (347) 450-3798
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={17} className="text-brand-sky shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-offwhite/60">
          <p>
            Copyright &copy; 2026 PandGroup LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-brand-sky transition-colors min-h-[44px]"
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
