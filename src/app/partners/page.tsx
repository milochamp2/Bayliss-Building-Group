"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { partners } from "@/data/site";
import type { Partner } from "@/data/site";
import { cn } from "@/lib/utils";

function PartnerGallery({ partner }: { partner: Partner }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % partner.images.length);
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + partner.images.length) % partner.images.length
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {partner.images.map((image, index) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[0.7rem] font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-white/60 text-body-sm font-heading">
              {selectedIndex + 1} / {partner.images.length}
            </div>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[80vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={partner.images[selectedIndex].src}
                alt={partner.images[selectedIndex].alt}
                width={1600}
                height={1200}
                className="object-contain w-full h-full max-h-[80vh] rounded-lg"
                sizes="90vw"
                priority
              />
              <p className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm text-white/80 text-body-sm px-4 py-3 rounded-b-lg">
                {partner.images[selectedIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="space-y-8">
      {/* Partner Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 sm:p-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
          {/* Partner Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
              <h2 className="font-heading font-bold text-heading sm:text-heading-lg">
                {partner.name}
              </h2>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark text-body-sm font-medium transition-colors"
              >
                Visit Website <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-body text-grey leading-relaxed mb-6 max-w-3xl">
              {partner.description}
            </p>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2">
              {partner.services.map((service) => (
                <span
                  key={service}
                  className="inline-block bg-charcoal-50 text-charcoal text-[0.75rem] font-medium px-3 py-1.5 rounded-lg"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partner Gallery */}
      <PartnerGallery partner={partner} />
    </div>
  );
}

export default function PartnersPage() {
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
              Our Network
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Trusted Trades &amp; Partners
            </h1>
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed max-w-2xl">
              We work alongside a network of trusted tradespeople and specialist
              contractors who share our commitment to quality, safety, and
              reliability on every project.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Partners List */}
      <Section background="surface">
        <Container>
          <div className="space-y-16">
            {partners.map((partner) => (
              <PartnerCard key={partner.slug} partner={partner} />
            ))}
          </div>

          {/* More Partners Coming */}
          {partners.length <= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-block rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] px-10 py-8">
                <p className="text-body-lg text-grey-dark font-heading font-semibold mb-2">
                  More partners coming soon
                </p>
                <p className="text-body-sm text-grey max-w-md">
                  We&apos;re proud to collaborate with trusted trades across
                  Victoria. Check back as we grow our partner network.
                </p>
              </div>
            </motion.div>
          )}
        </Container>
      </Section>
    </>
  );
}
