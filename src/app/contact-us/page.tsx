"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight } from "lucide-react";
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

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via PandGroup Website`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:D.Stephens@pandgroup.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="pt-28 sm:pt-32 bg-white">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-3">
            Contact Us
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            We are here to help optimize your energy systems.
          </h1>
          <p className="text-brand-gray/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Reach out directly to Delvin Stephens and the PandGroup advisory team to discuss custom DERMS architecture, grid modernizations, or strategic clean-tech consulting.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 sm:py-28 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details from actual PandGroup site */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-brand-sky font-heading font-semibold text-xs uppercase tracking-widest block mb-2">
                  Get in Touch
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-dark">
                  Headquarters &amp; Direct Inquiries
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-6 bg-brand-card rounded-2xl border border-brand-gray flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
                      Address
                    </h3>
                    <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                      90 VERMILYEA AVE<br />
                      NEW YORK, NY 10034-9998. Suite 251
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-brand-card rounded-2xl border border-brand-gray flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
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
                      className="text-xs text-brand-muted hover:text-brand-dark block mt-0.5"
                    >
                      customerservice@pandgroup.com
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-brand-card rounded-2xl border border-brand-gray flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
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

                <div className="p-6 bg-brand-card rounded-2xl border border-brand-gray flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/15 text-brand-sky flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
                      Open Hours
                    </h3>
                    <p className="text-sm text-brand-muted mt-1">
                      Mon-Sat: 9am &ndash; 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-card p-8 sm:p-10 rounded-3xl border border-brand-gray shadow-xl">
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mb-8">
                  Submitting directly sends an email inquiry to Delvin Stephens and the PandGroup practice.
                </p>

                <form onSubmit={handleMailto} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
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
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
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
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
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
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="DERMS Consultation"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your energy project, microgrid specifications, or regulatory advisory needs..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray text-brand-dark placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-sky resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md transition-all shadow-md min-h-[48px]"
                  >
                    <Send size={16} />
                    <span>Submit Message</span>
                    <ArrowUpRight size={16} />
                  </button>
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
