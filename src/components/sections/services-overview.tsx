"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Hammer, ClipboardCheck, Paintbrush, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@/data/site";

const iconMap = {
  Building2,
  Hammer,
  ClipboardCheck,
  Paintbrush,
};

export function ServicesOverview() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeader
          label="What We Do"
          title="Construction Services Built on Experience"
          description="We deliver a wide range of construction services including commercial builds, structural carpentry, fit-outs, and full project management across Victoria."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col group glass-shine">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-heading-sm mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-charcoal/70 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-body-sm font-semibold text-accent hover:text-accent-600 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
