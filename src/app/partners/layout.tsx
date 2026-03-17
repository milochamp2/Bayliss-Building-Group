import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Trades & Partners — Our Network",
  description:
    "Meet the trusted trades and partners that work alongside Bayliss Building Group. Quality tradespeople delivering electrical, plumbing, and specialist services across Victoria.",
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
