import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | Ibrahim Drame",
  description: "Portfolio des projets d'Ibrahim Drame - Développeur web.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
