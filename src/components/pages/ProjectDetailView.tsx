"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Calendar, User, Briefcase, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Project } from "@/types";

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${project.youtube_id}/maxresdefault.jpg`;

  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />
      
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
            className="max-w-4xl"
          >
            <Link 
              href="/projets" 
              className="inline-flex items-center gap-2 text-accent-primary mb-8 hover:gap-4 transition-all uppercase font-arial text-xs tracking-widest"
            >
              <ArrowLeft size={16} /> Retour aux projets
            </Link>
            <h1 className="text-5xl md:text-8xl font-syne font-extrabold text-white uppercase mb-4 leading-none">
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

            <div className="mt-16">
               <a 
                 href={project.youtube_url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-primary inline-flex items-center gap-4 text-lg py-5 px-10 group"
               >
                 <Play size={24} className="fill-current" />
                 Voir le projet (YouTube)
               </a>
            </div>
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
                    <span className="text-text-muted text-xs uppercase block mb-1">Artiste</span>
                    <span className="text-white font-space font-bold">{project.artiste}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Briefcase className="text-accent-primary shrink-0" size={24} />
                  <div>
                    <span className="text-text-muted text-xs uppercase block mb-1">Mon Rôle</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.roles.map((role) => (
                        <span key={role} className="text-[10px] bg-background-primary px-2 py-1 rounded text-white border border-border-card">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Calendar className="text-accent-primary shrink-0" size={24} />
                  <div>
                    <span className="text-text-muted text-xs uppercase block mb-1">Catégorie</span>
                    <span className="text-white font-space font-bold uppercase">{project.categorie}</span>
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

      <Footer />
    </main>
  );
}
