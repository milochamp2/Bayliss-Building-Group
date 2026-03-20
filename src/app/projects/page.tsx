"use client";

import { motion } from "framer-motion";
import { HardHat } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";

export default function ProjectsPage() {
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
              Our Projects
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Work That Speaks for Itself
            </h1>
            <p className="mt-6 text-body-lg text-white/80 leading-relaxed max-w-2xl">
              A portfolio of commercial construction, carpentry, and fit-out
              projects delivered across Melbourne and Victoria.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center py-20 sm:py-32"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
              <HardHat className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-heading font-bold text-heading-lg sm:text-display-sm text-charcoal mb-4">
              Coming Soon
            </h2>
            <p className="text-body-lg text-charcoal/70 max-w-lg leading-relaxed">
              We&apos;re putting together a showcase of our best work. Check back
              soon to see our completed commercial builds, carpentry projects,
              and fit-outs across Victoria.
            </p>
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
