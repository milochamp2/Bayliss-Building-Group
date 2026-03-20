"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "surface" | "warm" | "dark";
}

const bgMap = {
  white: "bg-white",
  surface: "bg-surface",
  warm: "bg-surface-warm",
  dark: "bg-charcoal text-white",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-vertical", bgMap[background], className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-14 sm:mb-16 lg:mb-20",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {label && (
        <span className="inline-block text-accent font-heading font-semibold text-body-sm uppercase tracking-widest mb-4">
          {label}
        </span>
      )}
      <h2 className="text-heading-lg sm:text-display-sm lg:text-display font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg opacity-70 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
