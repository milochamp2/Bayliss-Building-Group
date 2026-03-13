"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  ClipboardCheck,
  Paintbrush,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";
import { CTA } from "@/components/sections/cta";

const iconMap = {
  Building2,
  Hammer,
  ClipboardCheck,
  Paintbrush,
};

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Comprehensive Construction Capabilities
            </h1>
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed max-w-2xl">
              From ground-up commercial builds to precision carpentry and
              full-project management — we deliver the complete scope of services
              needed to bring your project to life.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Detail */}
      <div>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          const isEven = i % 2 === 0;

          return (
            <Section
              key={service.slug}
              id={service.slug}
              background={isEven ? "white" : "surface"}
            >
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={!isEven ? "lg:order-2 lg:direction-ltr" : ""}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-heading-lg sm:text-display-sm font-bold mb-5">
                      {service.title}
                    </h2>
                    <p className="text-body-lg text-grey leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-body text-charcoal"
                        >
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="group">
                        Discuss Your Project
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Image Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={!isEven ? "lg:order-1 lg:direction-ltr" : ""}
                  >
                    <div className="aspect-[4/3] rounded-3xl bg-charcoal-200 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-300 to-charcoal-100" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Icon className="w-12 h-12 text-accent/30 mx-auto mb-3" />
                          <p className="text-body-sm text-grey font-medium">
                            {service.title} photo
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </Section>
          );
        })}
      </div>

      {/* Process Section */}
      <Section background="dark">
        <Container>
          <SectionHeader
            label="Our Process"
            title="How We Deliver"
            description="A structured, transparent approach that keeps your project on track from day one."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start by understanding your project scope, goals, timeline, and budget requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed project planning including scheduling, trade coordination, and compliance documentation.",
              },
              {
                step: "03",
                title: "Construction",
                description:
                  "Expert execution with dedicated site management, quality control, and regular progress reporting.",
              },
              {
                step: "04",
                title: "Handover",
                description:
                  "Thorough quality inspection, defect rectification, and complete project documentation at completion.",
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative"
              >
                <span className="text-display font-heading font-bold text-accent/20 absolute top-4 right-6">
                  {phase.step}
                </span>
                <div className="pt-8">
                  <h4 className="font-heading font-bold text-heading-sm text-white mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-body-sm text-white/50 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
