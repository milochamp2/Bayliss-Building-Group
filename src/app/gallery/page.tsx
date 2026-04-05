"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const galleryImages = [
  { src: "/images/gallery/image 1.jpg", alt: "Bayliss Building Group project" },
  { src: "/images/gallery/image 2.jpg", alt: "Bayliss Building Group project" },
  { src: "/images/gallery/image 3.jpg", alt: "Bayliss Building Group project" },
  { src: "/images/gallery/image 4.jpg", alt: "Bayliss Building Group project" },
  { src: "/images/gallery/image 5.jpg", alt: "Bayliss Building Group project" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-charcoal overflow-hidden">
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
              Gallery
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Our Work in Action
            </h1>
            <p className="mt-6 text-body-lg text-white/80 leading-relaxed max-w-2xl">
              A look at Bayliss Building Group on site — from groundwork to
              finished builds across Melbourne and Victoria.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Carousel Gallery */}
      <Section background="surface">
        <Container>
          <div className="relative group">
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex -ml-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.src}
                    className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <button
                      onClick={() => openLightbox(index)}
                      className="group/slide relative aspect-[4/3] w-full rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/slide:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover/slide:bg-charcoal/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                        <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[0.7rem] font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                          View
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Arrows */}
            <button
              onClick={scrollPrev}
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
                "w-12 h-12 rounded-full flex items-center justify-center",
                "bg-white/80 backdrop-blur-md border border-white/40 shadow-elevated",
                "text-charcoal hover:bg-white hover:scale-105 transition-all duration-200",
                "opacity-0 group-hover:opacity-100"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10",
                "w-12 h-12 rounded-full flex items-center justify-center",
                "bg-white/80 backdrop-blur-md border border-white/40 shadow-elevated",
                "text-charcoal hover:bg-white hover:scale-105 transition-all duration-200",
                "opacity-0 group-hover:opacity-100"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeSlide === i
                      ? "w-8 bg-accent"
                      : "w-2 bg-charcoal-200 hover:bg-charcoal-300"
                  )}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid View Below */}
          <div className="mt-16">
            <h2 className="font-heading font-bold text-heading-lg mb-8">
              All Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => openLightbox(index)}
                  className="group/thumb relative aspect-square rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover/thumb:bg-charcoal/30 transition-colors duration-300" />
                </motion.button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

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
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-white/80 text-body-sm font-heading">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

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
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={1600}
                height={1200}
                className="object-contain w-full h-full max-h-[80vh] rounded-lg"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
