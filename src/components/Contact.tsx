"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details & Value proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal">
              <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
                Schedule a Consultation
              </span>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-midnight mb-6 leading-tight">
                Let&apos;s Accelerate Your Energy Strategy
              </h2>
              <p className="text-slate text-base md:text-lg leading-relaxed">
                Whether assessing DERMS build-vs-buy decisions, structuring microgrid models, or targeting FERC 2222 compliance, our advisory team is ready to assist.
              </p>
            </div>

            <div className="reveal space-y-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory border border-slate-light/20">
                <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight text-sm uppercase tracking-wide">Office Location</h4>
                  <p className="text-slate text-sm mt-1 leading-relaxed">
                    90 Vermilyea Ave, Suite 251<br />
                    New York, NY 10034-9998
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory border border-slate-light/20">
                <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight text-sm uppercase tracking-wide">Direct Inquiries</h4>
                  <a
                    href="mailto:D.Stephens@pandgroup.com"
                    className="text-midnight font-medium text-sm hover:text-gold transition-colors block mt-1"
                  >
                    D.Stephens@pandgroup.com
                  </a>
                  <a
                    href="mailto:customerservice@pandgroup.com"
                    className="text-slate text-xs hover:text-gold transition-colors block mt-0.5"
                  >
                    customerservice@pandgroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory border border-slate-light/20">
                <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight text-sm uppercase tracking-wide">Telephone</h4>
                  <a
                    href="tel:347-450-3798"
                    className="text-midnight font-medium text-sm hover:text-gold transition-colors block mt-1"
                  >
                    (347) 450-3798
                  </a>
                  <span className="text-xs text-slate block mt-0.5">Direct line to advisory team</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory border border-slate-light/20">
                <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight text-sm uppercase tracking-wide">Working Hours</h4>
                  <p className="text-slate text-sm mt-1">Monday – Saturday: 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="reveal bg-midnight rounded-3xl p-8 md:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
                    Your inquiry has been received. Principal Consultant Delvin Stephens will review your submission and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg border border-gold text-gold hover:bg-gold hover:text-midnight font-semibold text-xs transition-all uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-2">
                      Request an Executive Briefing
                    </h3>
                    <p className="text-white/60 text-sm">
                      Share the specifics of your grid, microgrid, or clean tech initiative.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jenkins"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sjenkins@utility-corp.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Primary Area of Need *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-midnight-light border border-white/20 text-white text-sm focus:outline-none focus:border-gold"
                      defaultValue="derms"
                    >
                      <option value="derms">DERMS / DRMS System Architecture & Design</option>
                      <option value="microgrids">Urban Microgrid & Battery Energy Storage (BESS)</option>
                      <option value="ferc">FERC Order 2222 Compliance & Interconnection</option>
                      <option value="strategy">Build vs. Buy Evaluation & Clean-Tech Strategy</option>
                      <option value="marketing">Renewable Services Marketing & Adoption</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Project Scope & Timeline
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your objectives, target megawatt capacity, or project milestones..."
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-gold hover:bg-gold-light text-midnight font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-gold/20"
                  >
                    <Send size={18} />
                    <span>Schedule Preliminary Consultation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

