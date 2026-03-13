"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, FileCheck, Users, ClipboardList, Eye } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const safetyItems = [
  {
    icon: FileCheck,
    title: "SWMS Documentation",
    description:
      "Safe Work Method Statements prepared and maintained for every task and trade on site.",
  },
  {
    icon: ShieldCheck,
    title: "Site Safety Procedures",
    description:
      "Comprehensive safety procedures integrated into every stage of our construction process.",
  },
  {
    icon: ClipboardList,
    title: "Risk Assessments",
    description:
      "Thorough risk assessments conducted before and during works to identify and mitigate hazards.",
  },
  {
    icon: HardHat,
    title: "PPE Compliance",
    description:
      "Strict PPE requirements enforced across all sites for every worker, subcontractor, and visitor.",
  },
  {
    icon: Users,
    title: "Trade Coordination",
    description:
      "Coordinated trade management to ensure safe working conditions when multiple teams are on site.",
  },
  {
    icon: Eye,
    title: "Site Inductions",
    description:
      "Mandatory site inductions for all personnel before commencing work on any Bayliss project.",
  },
];

export function Safety() {
  return (
    <Section background="dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                Bayliss Building Group is committed to maintaining a safe work
                environment across every project. Safety is integrated into every
                stage of our construction process.
              </p>
            </motion.div>
          </div>

          {/* Safety Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
