"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Carousel } from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Bayliss Building Group delivered our office fit-out on time, on budget, and to an exceptional standard. Their communication throughout was outstanding.",
    name: "Sarah Mitchell",
    role: "Director",
    company: "Apex Property Group",
  },
  {
    quote:
      "We've used Bayliss across three separate projects now. Their consistency, professionalism, and attention to detail is why we keep coming back.",
    name: "James Thornton",
    role: "Senior Project Manager",
    company: "Meridian Developments",
  },
  {
    quote:
      "The structural framing team was exceptional. Quality workmanship, clean site, and a collaborative approach that made our job as architects much easier.",
    name: "Lisa Chen",
    role: "Principal Architect",
    company: "Studio Forma Architecture",
  },
  {
    quote:
      "Their safety record speaks for itself. We needed a builder we could trust on a live campus environment and Bayliss exceeded all expectations.",
    name: "David Kowalski",
    role: "Facilities Manager",
    company: "Bayside Health",
  },
  {
    quote:
      "From tender to handover, Bayliss was transparent, responsive, and solution-oriented. A genuine partnership approach to construction.",
    name: "Rachel Nguyen",
    role: "Development Manager",
    company: "Cornerstone Capital",
  },
];

export function Testimonials() {
  return (
    <Section background="white">
      <Container>
        <SectionHeader
          label="Client Feedback"
          title="Trusted by Those Who Build"
          description="What our clients and partners say about working with Bayliss Building Group."
        />

        <Carousel
          autoplay
          autoplayDelay={6000}
          loop
          showArrows
          showDots
          slideClassName="basis-full sm:basis-1/2 lg:basis-1/3 pl-5"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="h-full bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-white/70 flex flex-col glass-shine"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4 shrink-0" />
              <p className="text-body text-grey-dark leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-charcoal-100">
                <p className="font-heading font-bold text-body text-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-body-sm text-grey">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
