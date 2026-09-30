import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/lib/projects';
import ProjectDetailClient from '@/components/projects/ProjectDetailClient';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Oper data project ke Client Component untuk di-render
  return <ProjectDetailClient project={project} />;
}