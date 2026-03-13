"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  align?: "start" | "center";
  slidesPerView?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export function Carousel({
  children,
  autoplay = true,
  autoplayDelay = 5000,
  loop = true,
  className,
  slideClassName,
  showDots = true,
  showArrows = true,
  align = "start",
}: CarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align, skipSnaps: false },
    plugins
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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

  return (
    <div className={cn("relative group", className)}>
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {children.map((child, i) => (
            <div
              key={i}
              className={cn(
                "min-w-0 shrink-0 grow-0",
                slideClassName || "basis-full sm:basis-1/2 lg:basis-1/3 pl-5"
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!loop && !canScrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-white/80 backdrop-blur-md border border-white/40 shadow-elevated",
              "text-charcoal hover:bg-white hover:scale-105 transition-all duration-200",
              "opacity-0 group-hover:opacity-100",
              "disabled:opacity-0 disabled:cursor-default"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!loop && !canScrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10",
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-white/80 backdrop-blur-md border border-white/40 shadow-elevated",
              "text-charcoal hover:bg-white hover:scale-105 transition-all duration-200",
              "opacity-0 group-hover:opacity-100",
              "disabled:opacity-0 disabled:cursor-default"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === i
                  ? "w-8 bg-accent"
                  : "w-2 bg-charcoal-200 hover:bg-charcoal-300"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
