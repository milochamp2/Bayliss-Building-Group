"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-b border-white/40"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/bayliss logg.jpg"
              alt="Bayliss Building Group"
              width={160}
              height={60}
              className={cn(
                "h-12 w-auto object-contain transition-all duration-300",
                isScrolled ? "brightness-100" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-body-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? isScrolled
                      ? "text-accent bg-accent-50"
                      : "text-white bg-white/15"
                    : isScrolled
                    ? "text-grey-dark hover:text-charcoal hover:bg-charcoal-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center gap-2 text-body-sm font-medium transition-colors",
                isScrolled ? "text-grey-dark hover:text-charcoal" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact">
              <Button size="sm">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "relative z-10 lg:hidden p-2 rounded-lg transition-colors",
              isMobileOpen
                ? "text-charcoal"
                : isScrolled
                ? "text-charcoal hover:bg-charcoal-50"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-white/40 overflow-hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 text-body font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-accent bg-accent-50"
                        : "text-grey-dark hover:text-charcoal hover:bg-charcoal-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-charcoal-100 flex flex-col gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 px-4 text-body-sm text-grey-dark"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <Link href="/contact">
                    <Button className="w-full">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
