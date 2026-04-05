"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Commercial construction site"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />
      </div>

      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent z-10" />

      <Container className="relative z-10 pt-36 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-heading font-semibold text-accent text-body-sm uppercase tracking-widest mb-6">
              Commercial Construction & Carpentry — Victoria, Australia
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
            className="mt-7 text-body-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed"
          >
            Bayliss Building Group delivers high-quality construction solutions
            with a strong focus on workmanship, reliability, safety and efficient
            project delivery across Melbourne and Victoria.
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
              <Button variant="outline-light" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust signals — glassmorphic bar */}
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
              { label: "Licensed Builder", value: "VIC" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading font-bold text-heading-sm text-white">
                  {stat.value}
                </span>
                <span className="text-body-sm text-white/70">{stat.label}</span>
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
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
