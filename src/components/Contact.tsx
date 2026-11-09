"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    service: "derms",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `PandGroup Advisory Inquiry — ${formData.service.toUpperCase()} (${formData.organization || formData.name})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || "N/A"}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Service Focus: ${formData.service}\n\n` +
      `Project Scope:\n${formData.message}`
    );
    // Direct working email flow
    window.location.href = `mailto:D.Stephens@pandgroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-pine text-sand relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pine-light/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Office & Practice Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-lime font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
                Initiate Engagement
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sand tracking-tight leading-tight">
                Let&apos;s build a resilient grid architecture together.
              </h2>
              <p className="text-sm sm:text-base text-sand/75 mt-4 leading-relaxed">
                Contact our advisory team directly to discuss DERMS design, regulatory compliance (FERC 2222, CLCPA), or microgrid feasibility.
              </p>
            </div>

            {/* Factual Address & Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-pine-surface/50 border border-pine-surface flex items-start gap-4">
                <MapPin className="w-5 h-5 text-lime shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-sand uppercase tracking-wider">
                    Office Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 mt-1 leading-relaxed">
                    90 Vermilyea Ave, Suite 251<br />
                    New York, NY 10034-9998
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-pine-surface/50 border border-pine-surface flex items-start gap-4">
                <Mail className="w-5 h-5 text-lime shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-sand uppercase tracking-wider">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:D.Stephens@pandgroup.com"
                    className="text-xs sm:text-sm text-lime hover:underline block mt-1"
                  >
                    D.Stephens@pandgroup.com
                  </a>
                  <a
                    href="mailto:customerservice@pandgroup.com"
                    className="text-xs text-sand/60 hover:text-sand block mt-0.5"
                  >
                    customerservice@pandgroup.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-pine-surface/50 border border-pine-surface flex items-start gap-4">
                <Phone className="w-5 h-5 text-lime shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-sand uppercase tracking-wider">
                    Phone Inquiries
                  </h3>
                  <a
                    href="tel:347-450-3798"
                    className="text-xs sm:text-sm text-lime hover:underline block mt-1"
                  >
                    (347) 450-3798
                  </a>
                  <span className="text-xs text-sand/60 block mt-0.5">
                    Direct advisory line
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-pine-surface/50 border border-pine-surface flex items-start gap-4">
                <Clock className="w-5 h-5 text-lime shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-sand uppercase tracking-wider">
                    Practice Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 mt-1">
                    Monday – Saturday: 9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-pine-deep rounded-3xl p-6 sm:p-10 border border-pine-surface shadow-2xl">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-sand mb-2">
                Schedule a Preliminary Consultation
              </h3>
              <p className="text-xs sm:text-sm text-sand/65 mb-8">
                Submitting this form prepares a pre-filled direct inquiry to Delvin Stephens and the PandGroup advisory team.
              </p>

              <form onSubmit={handleMailtoSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand placeholder-sand/30 text-sm focus:outline-none focus:border-lime transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sjenkins@utilitycorp.com"
                      className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand placeholder-sand/30 text-sm focus:outline-none focus:border-lime transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                    >
                      Organization / Utility
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Regional Power Corp"
                      className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand placeholder-sand/30 text-sm focus:outline-none focus:border-lime transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand placeholder-sand/30 text-sm focus:outline-none focus:border-lime transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                  >
                    Primary Practice Focus
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand text-sm focus:outline-none focus:border-lime transition-colors min-h-[44px]"
                  >
                    <option value="derms">DERMS &amp; DRMS Architecture</option>
                    <option value="microgrids">Microgrids &amp; BESS Feasibility</option>
                    <option value="ferc2222">FERC Order 2222 &amp; Market Design</option>
                    <option value="clcpa">NY CLCPA Compliance &amp; Clean Tech Strategy</option>
                    <option value="audit">Independent RFP &amp; Software Review</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-sand/80 uppercase tracking-wider mb-2"
                  >
                    Brief Scope / Challenge *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current grid architecture, interconnection goals, or upcoming project milestones..."
                    className="w-full px-4 py-3 rounded-xl bg-pine-surface/70 border border-pine-surface text-sand placeholder-sand/30 text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-hover text-pine font-heading font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-lime/25 min-h-[48px]"
                  >
                    <Send size={16} aria-hidden="true" />
                    <span>Send Advisory Inquiry Directly</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                  <p className="text-[11px] text-sand/50 mt-3 font-mono">
                    Direct routing to D.Stephens@pandgroup.com &bull; Confidential &bull; Response within 24 business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
