import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story, Values & Experience",
  description:
    "Learn about Bayliss Building Group — over 15 years of commercial construction and carpentry experience across Victoria, Australia. Quality, safety, and trusted partnerships.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
