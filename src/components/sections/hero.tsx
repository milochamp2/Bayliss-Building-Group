"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-400 to-charcoal" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

      <Container className="relative z-10 pt-30 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-heading font-semibold text-accent text-body-sm uppercase tracking-widest mb-6">
              Licensed Commercial Builder — Victoria, Australia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white leading-tight"
          >
            Built with Strength.
            <br />
            <span className="text-accent">Delivered with Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-body-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            From ground-up commercial builds to precision carpentry and structural
            framing — Bayliss Building Group delivers projects that stand the test
            of time across Melbourne and Victoria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="xl" className="group">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline-light" size="xl">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Projects Delivered", value: "200+" },
              { label: "Safety Record", value: "Zero Harm" },
              { label: "Licensed & Insured", value: "VIC CDB" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading font-bold text-heading-sm text-white">
                  {stat.value}
                </span>
                <span className="text-body-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
