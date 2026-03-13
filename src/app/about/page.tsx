"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description:
      "Bayliss Building Group was established with a clear mission — deliver quality commercial construction with integrity and precision.",
  },
  {
    year: "2013",
    title: "Commercial Expansion",
    description:
      "Expanded operations into large-scale commercial construction and fit-outs across metropolitan Melbourne.",
  },
  {
    year: "2017",
    title: "Construction Management",
    description:
      "Introduced end-to-end construction management services, offering clients full-project oversight and coordination.",
  },
  {
    year: "2021",
    title: "Regional Growth",
    description:
      "Extended our reach across regional Victoria, delivering projects in Geelong, Ballarat, and the Mornington Peninsula.",
  },
  {
    year: "Today",
    title: "Industry Leadership",
    description:
      "Recognised for consistent delivery, safety leadership, and trusted partnerships with developers, architects, and government agencies.",
  },
];

const stats = [
  { value: "15+", label: "Years in Operation" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Active Trade Partners" },
  { value: "Zero", label: "Lost Time Injuries" },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-bold text-white">
              Building Victoria&apos;s Future
            </h1>
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed max-w-2xl">
              For over 15 years, Bayliss Building Group has been a trusted name
              in commercial construction and carpentry across Melbourne and
              Victoria. We bring experience, discipline, and craft to every
              project.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading font-bold text-display-sm sm:text-display text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-body-sm text-grey font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company Story */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionHeader
                label="Our Story"
                title="Grounded in Experience, Driven by Standards"
                align="left"
                className="mb-8"
              />
              <div className="space-y-5 text-body-lg text-grey leading-relaxed">
                <p>
                  Bayliss Building Group was founded with a straightforward
                  philosophy: do quality work, communicate honestly, and deliver
                  on every commitment. That philosophy hasn&apos;t changed.
                </p>
                <p>
                  From our roots in structural carpentry, we&apos;ve grown into a
                  diversified commercial construction company delivering
                  projects across offices, retail, hospitality, industrial, and
                  community sectors.
                </p>
                <p>
                  Our team includes experienced project managers, qualified
                  tradespeople, and dedicated safety professionals — all working
                  together to ensure every project meets the highest standards
                  of quality, compliance, and client satisfaction.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To deliver construction projects that exceed client expectations through quality workmanship, safety leadership, and transparent partnerships.",
                },
                {
                  icon: Award,
                  title: "Our Standard",
                  text: "Every project is held to the same uncompromising standard — whether it's a $200K fit-out or a multi-million-dollar commercial build.",
                },
                {
                  icon: Users,
                  title: "Our People",
                  text: "Our team is our greatest asset. We invest in skilled tradespeople and experienced managers who share our commitment to quality.",
                },
                {
                  icon: TrendingUp,
                  title: "Our Growth",
                  text: "Sustainable, reputation-driven growth. Every new client relationship is built on referrals, repeat business, and proven results.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-white/60 glass-shine"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-body mb-1">
                      {item.title}
                    </h4>
                    <p className="text-body-sm text-grey leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <Container>
          <SectionHeader
            label="Our Journey"
            title="Milestones That Define Us"
            description="From day one, we've been building more than structures — we've been building a legacy of quality and trust."
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-6 sm:gap-8 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-charcoal-100 mt-3" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-body-sm font-semibold text-accent">
                    {item.year}
                  </span>
                  <h4 className="font-heading font-bold text-heading-sm mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-body text-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Accreditations */}
      <Section background="surface">
        <Container>
          <SectionHeader
            label="Accreditations"
            title="Licensed, Insured & Compliant"
            description="We maintain all required licences, insurances, and industry certifications to operate across Victoria."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Registered Building Practitioner",
                detail: "VIC Building Authority — Commercial Builder (Unlimited)",
              },
              {
                title: "Fully Insured",
                detail: "Public Liability, Professional Indemnity, Workers Compensation",
              },
              {
                title: "OH&S Compliant",
                detail:
                  "Occupational Health & Safety Management System compliant with AS/NZS 4801",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 glass-shine"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-body mb-2">
                  {item.title}
                </h4>
                <p className="text-body-sm text-grey leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
