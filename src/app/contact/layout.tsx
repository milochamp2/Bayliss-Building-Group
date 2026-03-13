import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get a Quote for Your Project",
  description:
    "Contact Bayliss Building Group to discuss your commercial construction, carpentry, or fit-out project in Victoria. Get a no-obligation quote today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
