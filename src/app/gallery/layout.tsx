import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Our Work in Action",
  description:
    "Browse photos from Bayliss Building Group projects across Melbourne and Victoria. Commercial construction, carpentry, fit-outs, and more.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
