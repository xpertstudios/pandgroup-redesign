"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, ExternalLink } from "lucide-react";
import Clients from "@/components/Clients";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpenEmailApp = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Client"} via PandGroup Website`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n\n` +
      `Inquiry / Project Scope:\n${formData.message}`
    );
    window.location.href = `mailto:D.Stephens@pandgroup.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-sky/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Contact Us
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            We are here to help optimize your energy systems.
          </h1>
          <p className="text-brand-offwhite/85 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Reach out directly to Delvin Stephens and the PandGroup advisory practice to discuss custom DERMS architecture, grid modernizations, or strategic clean-tech consulting.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 sm:py-28 bg-white text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details from actual PandGroup site */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
                  Headquarters &amp; Direct Office
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-6 bg-brand-offwhite rounded-2xl border border-brand-border flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                      Address
                    </h3>
                    <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                      90 VERMILYEA AVE<br />
                      NEW YORK, NY 10034-9998. Suite 251
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-brand-offwhite rounded-2xl border border-brand-border flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                      Email
                    </h3>
                    <a
                      href="mailto:D.Stephens@pandgroup.com"
                      className="text-sm text-brand-sky hover:underline block mt-1 font-semibold"
                    >
                      D.Stephens@pandgroup.com
                    </a>
                    <a
                      href="mailto:customerservice@pandgroup.com"
                      className="text-xs text-brand-muted hover:text-brand-navy block mt-0.5"
                    >
                      customerservice@pandgroup.com
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-brand-offwhite rounded-2xl border border-brand-border flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                      Phone
                    </h3>
                    <a
                      href="tel:347-450-3798"
                      className="text-sm text-brand-sky hover:underline block mt-1 font-semibold"
                    >
                      347-450-3798
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-brand-offwhite rounded-2xl border border-brand-border flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                      Open Hours
                    </h3>
                    <p className="text-sm text-brand-muted mt-1">
                      Mon-Sat: 9am &ndash; 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clearly Labeled Open Email App Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-offwhite p-8 sm:p-10 rounded-3xl border border-brand-border shadow-lg">
                <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">
                  Prepare Your Advisory Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mb-8 leading-relaxed">
                  Fill in your project details below to launch a pre-composed message directly in your email client to Delvin Stephens.
                </p>

                <form onSubmit={handleOpenEmailApp} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sjenkins@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(347) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="DERMS Project Consultation"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2"
                    >
                      Project Scope &amp; Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current grid architecture, interconnection goals, or upcoming clean-tech milestones..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-skyhover text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md transition-all shadow-md min-h-[48px]"
                    >
                      <ExternalLink size={16} />
                      <span>Open in Email App &rarr;</span>
                      <ArrowUpRight size={16} />
                    </button>
                    <p className="text-[11px] text-brand-muted mt-3">
                      Opens your default email client addressed to D.Stephens@pandgroup.com.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Component */}
      <Clients />
    </div>
  );
}
