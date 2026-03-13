"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
import { images } from "@/data/images";

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
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Construction team at work"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60" />
          <div className="absolute inset-0 bg-charcoal/30" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent z-10" />
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
              Experienced builders delivering reliable construction solutions
              with strong workmanship and safety across commercial and
              residential sectors in Victoria.
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
                title="Built on Experience. Driven by Standards."
                align="left"
                className="mb-8"
              />
              <div className="space-y-5 text-body-lg text-grey leading-relaxed">
                <p>
                  Bayliss Building Group is a licensed construction and carpentry
                  company specialising in commercial and residential building
                  projects across Victoria.
                </p>
                <p>
                  Our team delivers a wide range of construction services
                  including structural carpentry, commercial fit-outs, building
                  projects, and subcontract construction services.
                </p>
                <p>
                  With a strong focus on safety, quality workmanship and
                  reliability, Bayliss Building Group partners with developers,
                  builders and commercial clients to deliver projects that meet
                  strict industry standards and timelines.
                </p>
                <p>
                  Our commitment to professionalism and attention to detail
                  ensures every project is completed with precision and pride.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Quality Workmanship",
                  text: "High-quality construction solutions delivered with precision and attention to detail on every project — commercial and residential.",
                },
                {
                  icon: Award,
                  title: "Reliability",
                  text: "A dependable team that delivers on commitments. We focus on efficient project delivery and transparent communication from start to finish.",
                },
                {
                  icon: Users,
                  title: "Our Clients",
                  text: "We partner with commercial developers, construction companies, architects, government agencies, schools, childcare centres, and private clients.",
                },
                {
                  icon: TrendingUp,
                  title: "Industry Growth",
                  text: "Actively pursuing commercial construction opportunities including school developments, childcare centres, government infrastructure, and builder subcontracting.",
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
