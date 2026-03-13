"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { projects } from "@/data/site";

export function FeaturedProjects() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeader
          label="Our Work"
          title="Projects Delivered with Precision"
          description="A selection of recent projects showcasing our capabilities across commercial construction, carpentry, and fit-outs."
        />

        <Carousel
          autoplay
          autoplayDelay={4500}
          loop
          showArrows
          showDots
          slideClassName="basis-full sm:basis-1/2 lg:basis-1/3 pl-5"
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full flex flex-col glass-shine"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-charcoal-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-300 to-charcoal-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-8 bg-accent/30 rounded-sm" />
                    <div className="w-2 h-6 bg-accent/20 rounded-sm" />
                    <div className="w-2 h-10 bg-accent/30 rounded-sm" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[0.7rem] font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-heading-sm mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-body-sm text-grey mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location} — {project.year}
                </div>
                <p className="text-body-sm text-grey leading-relaxed flex-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
