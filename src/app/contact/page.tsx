"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Send,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const serviceOptions = [
  "Commercial Construction",
  "Carpentry & Structural Framing",
  "Construction Management",
  "Fit-Outs & Refurbishments",
  "Other / General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready for email integration (e.g., Resend, SendGrid, or API route)
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-30 pb-20 sm:pt-36 sm:pb-24 bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-heading font-semibold text-body-sm uppercase tracking-widest mb-5">
              Contact Us
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Let&apos;s Start the Conversation
            </h1>
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed max-w-2xl">
              Ready to discuss your next construction project? Get in touch with
              our team for a no-obligation consultation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-heading-sm mb-3">
                      Thank You
                    </h3>
                    <p className="text-body text-grey max-w-md mx-auto">
                      Your enquiry has been received. A member of our team will
                      be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-accent font-semibold text-body-sm hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-heading-sm mb-2">
                      Project Enquiry
                    </h2>
                    <p className="text-body text-grey mb-8">
                      Fill out the form below and we&apos;ll get back to you
                      promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            className="w-full h-11 px-4 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            placeholder="Company name"
                            className="w-full h-11 px-4 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full h-11 px-4 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="04XX XXX XXX"
                            className="w-full h-11 px-4 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-body-sm font-medium text-charcoal mb-2">
                          Service Required *
                        </label>
                        <select
                          required
                          defaultValue=""
                          className="w-full h-11 px-4 rounded-lg border border-charcoal-200 bg-white text-body text-charcoal focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-body-sm font-medium text-charcoal mb-2">
                          Project Location
                        </label>
                        <input
                          type="text"
                          placeholder="Suburb or region in Victoria"
                          className="w-full h-11 px-4 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-body-sm font-medium text-charcoal mb-2">
                          Project Details *
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your project — scope, timeline, budget range, or any specific requirements."
                          className="w-full px-4 py-3 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm text-body text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white/80 transition-all resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto group">
                        Send Enquiry
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Contact Cards */}
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    detail: siteConfig.phoneDisplay,
                    href: `tel:${siteConfig.phone}`,
                    subtitle: "Mon — Fri, 7am — 5pm",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    detail: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                    subtitle: "We respond within one business day",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    detail: `${siteConfig.address.street}`,
                    subtitle: `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postcode}`,
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    detail: "Monday — Friday",
                    subtitle: "7:00 AM — 5:00 PM AEST",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex gap-4 transition-all duration-300 hover:bg-white/80 hover:border-white/60"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-body-sm text-grey-dark mb-0.5">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-body font-medium text-charcoal hover:text-accent transition-colors"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-body font-medium text-charcoal">
                          {item.detail}
                        </p>
                      )}
                      <p className="text-body-sm text-grey mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Map Placeholder */}
                <div className="bg-charcoal-200 rounded-2xl aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-300 to-charcoal-100" />
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-accent/40 mx-auto mb-2" />
                      <p className="text-body-sm text-grey font-medium">
                        Map integration placeholder
                      </p>
                      <p className="text-body-sm text-grey/60">
                        Google Maps embed ready
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
