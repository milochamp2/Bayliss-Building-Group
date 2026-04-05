"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const shown = sessionStorage.getItem("bbg-intro-shown");
    if (shown) {
      setShowIntro(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("bbg-intro-shown", "1");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-charcoal flex items-center justify-center"
          >
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Accent bar left */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent origin-top"
            />

            <div className="flex flex-col items-center relative z-10">
              {/* PNG Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/buildng group PNG.png"
                  alt="Bayliss Building Group"
                  width={340}
                  height={140}
                  className="w-[260px] sm:w-[340px] h-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] w-20 bg-accent mt-6 origin-center"
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-white text-[0.65rem] sm:text-[0.75rem] font-heading tracking-[0.25em] uppercase mt-4"
              >
                Built with Strength. Delivered with Precision.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={showIntro ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: showIntro ? 0.3 : 0, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
