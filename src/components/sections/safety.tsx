"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, FileCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const safetyItems = [
  {
    icon: ShieldCheck,
    title: "Zero Harm Culture",
    description:
      "Safety is non-negotiable. We maintain a zero-harm approach across every site, every day.",
  },
  {
    icon: HardHat,
    title: "Ongoing Training",
    description:
      "Regular safety inductions, toolbox talks, and skills development for all team members and subcontractors.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description:
      "SWMS, JSAs, and site safety plans prepared and maintained to meet all regulatory requirements.",
  },
  {
    icon: Users,
    title: "Site Management",
    description:
      "Dedicated safety officers and experienced site managers ensure standards are upheld at all times.",
  },
];

export function Safety() {
  return (
    <Section background="dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-accent font-heading font-semibold text-body-sm uppercase tracking-widest mb-4">
                Safety & Compliance
              </span>
              <h2 className="text-heading-lg sm:text-display-sm lg:text-display font-bold text-white mb-6">
                Safety Isn&apos;t a Priority.
                <br />
                <span className="text-accent">It&apos;s a Standard.</span>
              </h2>
              <p className="text-body-lg text-white/60 leading-relaxed max-w-xl">
                At Bayliss Building Group, safety underpins everything we do. Our
                rigorous systems, training programs, and site management practices
                ensure that every person goes home safe — every day.
              </p>
            </motion.div>
          </div>

          {/* Safety Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] glass-shine"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-heading font-bold text-body text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-body-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
