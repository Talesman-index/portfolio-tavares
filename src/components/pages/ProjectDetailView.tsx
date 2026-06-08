"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Calendar, User, Briefcase, CheckCircle } from "lucide-react";
import { Project } from "@/types";

const categoryLabels: Record<string, string> = {
  "clips-musicaux": "Clips Musicaux",
  "publicite": "Publicités / Spots de marques",
  "contenu-digital": "Contenu Digital",
  "contenu-creatif": "Contenu Digital",
  "branding-identite-visuelle": "Branding & Identité Visuelle",
  "direction-artistique": "Branding & Identité Visuelle",
  "evenements-emissions": "Événements & Émissions",
};

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const thumbnailUrl = project.coverImage || (project.youtube_id 
    ? `https://img.youtube.com/vi/${project.youtube_id}/hqdefault.jpg`
    : "");
  const categoryLabel = categoryLabels[project.categorie] || project.categorie;

  const isYouTube = project.youtube_url?.includes("youtube.com") || project.youtube_url?.includes("youtu.be");
  const isInstagram = project.youtube_url?.includes("instagram.com");
  const isLinkedIn = project.youtube_url?.includes("linkedin.com");

  const playButtonText = isYouTube
    ? "Voir le projet (YouTube)"
    : isInstagram
      ? "Voir le projet (Instagram)"
      : isLinkedIn
        ? "Voir le projet (LinkedIn)"
        : "Voir le projet";

  const hasVideoUrl = !!project.youtube_url && project.youtube_url.trim() !== "";

  return (
    <main className="min-h-screen bg-background-primary">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image 
          src={thumbnailUrl} 
          alt={project.titre}
          fill
          className="object-cover opacity-40 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl px-4"
          >
            <Link 
              href="/projets" 
              className="inline-flex items-center gap-2 text-accent-primary mb-8 hover:gap-4 transition-all uppercase font-syne text-xs tracking-[0.2em]"
            >
              <ArrowLeft size={16} /> Retour aux projets
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white uppercase mb-6 leading-[1.1] tracking-tight">
              {project.titre}
            </h1>
            <p className="text-2xl md:text-3xl font-space text-gradient-gold font-bold uppercase tracking-tighter">
              {project.artiste}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-3xl font-syne font-bold text-white uppercase mb-6 border-l-4 border-accent-primary pl-6">
                Le Projet
              </h2>
              <p className="text-text-body text-xl font-space leading-relaxed mb-8">
                {project.description_longue}
              </p>
            </div>

            {project.subProjects && project.subProjects.length > 0 && (
              <div className="space-y-10 mb-16">
                {project.subProjects.map((sub, idx) => (
                  <div key={idx} className="bg-background-card p-8 rounded-2xl border border-border-card relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-300">
                    <h3 className="text-xl font-syne font-bold text-white uppercase mb-4 text-gradient-gold">
                      {sub.titre}
                    </h3>

                    {sub.youtube_id && (
                      <div className={`relative ${sub.aspectRatio === "portrait" ? "aspect-[9/16] max-w-[320px]" : "aspect-video w-full"} rounded-xl overflow-hidden mb-6 bg-black border border-border-card mx-auto`}>
                        <iframe
                          src={`https://www.youtube.com/embed/${sub.youtube_id}?modestbranding=1&rel=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          frameBorder="0"
                        />
                      </div>
                    )}

                    {!sub.youtube_id && sub.coverImage && (
                      <div className={`relative ${sub.aspectRatio === "portrait" ? "aspect-[9/16] max-w-[320px]" : "aspect-video w-full"} rounded-xl overflow-hidden mb-6 bg-background-secondary border border-border-card mx-auto`}>
                        <Image
                          src={sub.coverImage}
                          alt={sub.titre}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    )}

                    <p className="text-text-muted text-base font-space leading-relaxed mb-6">
                      {sub.description}
                    </p>
                    {sub.resultat && (
                      <div className="bg-background-secondary p-5 rounded-xl border border-border-card flex gap-4 items-start mb-6">
                        <CheckCircle className="text-accent-primary shrink-0 mt-0.5" size={20} />
                        <p className="text-text-body text-sm font-space italic">
                          "{sub.resultat}"
                        </p>
                      </div>
                    )}
                    {sub.url && (
                      <a 
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-primary hover:text-white transition-colors uppercase font-syne text-[10px] tracking-widest font-semibold"
                      >
                        <Play size={10} className="fill-current" /> Voir cette campagne
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {!project.subProjects && (
              <div className="mb-12">
                <h2 className="text-3xl font-syne font-bold text-white uppercase mb-6 border-l-4 border-accent-primary pl-6">
                  Le Résultat
                </h2>
                <div className="bg-background-card p-8 rounded-lg border border-border-card flex gap-6 items-start">
                   <CheckCircle className="text-accent-primary shrink-0" size={32} />
                   <p className="text-text-body text-lg font-space italic">
                     "{project.resultat}"
                   </p>
                </div>
              </div>
            )}

            {(hasVideoUrl || (project.additionalLinks && project.additionalLinks.length > 0)) && (
              <div className="mt-16 flex flex-wrap gap-4">
                 {hasVideoUrl && (
                   <a 
                     href={project.youtube_url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn-primary inline-flex items-center gap-4 text-lg py-5 px-10 group"
                   >
                     <Play size={24} className="fill-current" />
                     {playButtonText}
                   </a>
                 )}
                 {project.additionalLinks && project.additionalLinks.map((link, idx) => (
                   <a 
                     key={idx}
                     href={link.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn-secondary inline-flex items-center gap-4 text-lg py-5 px-10 group"
                   >
                     <Play size={24} className="fill-current" />
                     {link.label}
                   </a>
                 ))}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-background-card p-10 rounded-lg border border-border-card sticky top-24">
              <h3 className="text-xl font-syne font-bold text-white uppercase mb-10 pb-4 border-b border-border-card">
                Détails Techniques
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <User className="text-accent-primary shrink-0" size={24} />
                  <div>
                    <span className="text-text-muted text-[10px] uppercase block mb-1 tracking-widest font-syne">Artiste</span>
                    <span className="text-white font-syne font-normal text-lg">{project.artiste}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Briefcase className="text-accent-primary shrink-0" size={24} />
                  <div>
                    <span className="text-text-muted text-xs uppercase block mb-1">Mon Rôle</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.roles.map((role) => (
                        <span key={role} className="text-[10px] bg-background-primary px-2 py-1 rounded text-white border border-border-card font-syne font-normal uppercase tracking-wider">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Calendar className="text-accent-primary shrink-0" size={24} />
                  <div>
                    <span className="text-text-muted text-[10px] uppercase block mb-1 tracking-widest font-syne">Catégorie</span>
                    <span className="text-white font-syne font-normal uppercase tracking-wide">{categoryLabel}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border-card">
                <p className="text-text-muted text-sm font-space italic">
                  Inspiré par le cinéma et l'esthétique afro contemporaine.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
