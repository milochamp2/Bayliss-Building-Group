"use client";

import { motion } from "framer-motion";
import { Shield, Clock, HardHat, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { values } from "@/data/site";

const iconMap = {
  Shield,
  Clock,
  HardHat,
  Handshake,
};

export function WhyChooseUs() {
  return (
    <Section background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              label="Why Bayliss"
              title="The Standard Our Clients Expect"
              description="We've built our reputation on consistent delivery, transparent communication, and an unwavering commitment to safety and quality."
              align="left"
              className="mb-10 lg:mb-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, i) => {
                const Icon = iconMap[value.icon];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-charcoal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-body mb-1">
                        {value.title}
                      </h4>
                      <p className="text-body-sm text-grey leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Visual Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-charcoal-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-300 to-charcoal-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <div className="w-3 h-12 bg-accent rounded-sm" />
                    <div className="w-3 h-9 bg-accent/60 rounded-sm" />
                    <div className="w-3 h-14 bg-accent rounded-sm" />
                  </div>
                  <p className="text-body-sm text-grey font-medium">Project photo placeholder</p>
                </div>
              </div>
            </div>
            {/* Accent card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-accent/90 backdrop-blur-xl border border-accent/40 text-white rounded-2xl p-6 shadow-elevated max-w-[240px]">
              <p className="font-heading font-bold text-display-sm leading-none">15+</p>
              <p className="text-body-sm text-white/80 mt-1">
                Years delivering quality construction across Victoria
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
