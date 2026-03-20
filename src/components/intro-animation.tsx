"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if intro was already shown this session
    const shown = sessionStorage.getItem("bbg-intro-shown");
    if (shown) {
      setShowIntro(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("bbg-intro-shown", "1");
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // SSR: render children immediately, no intro flash
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-charcoal flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              {/* Logo Bars */}
              <div className="flex items-end gap-[6px] mb-6">
                {[40, 56, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.15,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-[10px] rounded-sm origin-bottom"
                    style={{
                      height: h,
                      backgroundColor: "#C2662D",
                    }}
                  />
                ))}
              </div>

              {/* Company Name */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="text-white font-heading font-bold text-[1.8rem] sm:text-[2.4rem] tracking-tight leading-none">
                  Bayliss
                </h1>
                <motion.span
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 0.5, letterSpacing: "0.35em" }}
                  transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
                  className="block text-white text-[0.6rem] sm:text-[0.7rem] uppercase font-heading font-medium mt-1.5"
                >
                  Building Group
                </motion.span>
              </motion.div>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] w-16 bg-accent mt-5 origin-center"
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="text-white text-[0.65rem] sm:text-[0.7rem] font-heading tracking-wider mt-4"
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
        transition={{ delay: showIntro ? 0.2 : 0, duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
