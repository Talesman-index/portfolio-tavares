import React from "react";
import { projects } from "@/data/projects";
import ProjectDetailView from "@/components/pages/ProjectDetailView";
import Link from "next/link";
import { Metadata } from "next";

// Next.js 15 requires params to be a Promise in the Page props
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  return {
    title: project ? `${project.titre} | Tavares` : "Projet | Tavares",
    description: project?.description_courte,
  };
}

export default async function ProjectPage({ params }: Props) {
  // Await params in Next.js 15
  const { slug } = await params;
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background-primary flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-bold mb-4 uppercase">Projet non trouvé</h1>
          <Link href="/projets" className="text-accent-primary hover:underline font-space uppercase text-sm tracking-widest">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  // Cast because data/projects.ts might have slightly different types
  return <ProjectDetailView project={project as any} />;
}
