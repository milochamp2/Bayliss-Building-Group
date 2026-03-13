"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/site";
import { CTA } from "@/components/sections/cta";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed max-w-2xl">
              A portfolio of commercial construction, carpentry, and fit-out
              projects delivered across Melbourne and Victoria.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter + Grid */}
      <Section background="surface">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-body-sm font-medium transition-all duration-200",
                  activeCategory === category
                    ? "bg-charcoal text-white shadow-sm"
                    : "bg-white/60 backdrop-blur-sm text-grey-dark border border-white/40 hover:border-charcoal-300 hover:text-charcoal hover:bg-white/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-white/60 h-full flex flex-col glass-shine">
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
                      <p className="text-body-sm text-grey leading-relaxed flex-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body-lg text-grey">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>

      <CTA />
    </>
  );
}
