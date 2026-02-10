import { getProjectBySlug } from '@/constants/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetail from './ProjectDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Projet non trouvé' };
  return {
    title: `${project.title} | Ibrahim Drame`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const { PROJECTS_DATA } = await import('@/constants/data');
  return PROJECTS_DATA.map((p) => ({ slug: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
