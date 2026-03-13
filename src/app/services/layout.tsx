import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Commercial Construction, Carpentry & Fit-Outs",
  description:
    "Explore our construction services: commercial builds, carpentry & structural framing, construction management, and fit-outs across Melbourne and Victoria.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
