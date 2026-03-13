"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    let locoScroll: InstanceType<typeof import("locomotive-scroll").default> | null = null;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locoScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 0.85,
          touchMultiplier: 1,
          infinite: false,
        },
      });
    };

    initScroll();

    return () => {
      locoScroll?.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
