import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig, navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="pt-16 sm:pt-20 lg:pt-24 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/buildng group bayliss.jpg"
                alt="Bayliss Building Group"
                width={200}
                height={80}
                className="h-14 w-auto object-contain [mix-blend-mode:screen]"
              />
            </Link>
            <p className="text-body-sm text-white/80 leading-relaxed max-w-xs mb-4">
              Commercial Construction &amp; Carpentry
              <br />
              Licensed Builder — {siteConfig.address.state}
            </p>
            <p className="text-body-sm text-white/70 leading-relaxed max-w-xs mb-6">
              {siteConfig.director}, {siteConfig.directorTitle}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-body-sm uppercase tracking-wider text-white/70 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-body-sm uppercase tracking-wider text-white/70 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-body-sm uppercase tracking-wider text-white/70 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-body-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-body-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-body-sm text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.address.city}, {siteConfig.address.state}
                    <br />
                    {siteConfig.address.country}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/70">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-body-sm text-white/70 hover:text-white/70 transition-colors flex items-center gap-1"
            >
              Request a Quote <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
