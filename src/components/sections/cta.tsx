"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-30 bg-charcoal overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-accent font-heading font-semibold text-body-sm uppercase tracking-widest mb-5">
            Ready to Build?
          </span>
          <h2 className="text-heading-lg sm:text-display-sm lg:text-display font-bold text-white mb-6">
            Let&apos;s Talk About Your Next Project
          </h2>
          <p className="text-body-lg text-white/80 leading-relaxed mb-10">
            Whether you&apos;re planning a school development, childcare centre,
            commercial build, office fit-out, or government project — get in
            touch to discuss how Bayliss Building Group can deliver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="xl" className="group">
                Request a Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="outline-light" size="xl">
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
