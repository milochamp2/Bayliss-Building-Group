import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Our Portfolio of Work",
  description:
    "View our portfolio of commercial construction, carpentry, and fit-out projects delivered across Melbourne and Victoria.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
