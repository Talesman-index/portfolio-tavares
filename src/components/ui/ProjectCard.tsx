"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProps) {
  const thumbnailUrl = project.youtube_id 
    ? `https://img.youtube.com/vi/${project.youtube_id}/maxresdefault.jpg`
    : null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="project-card group overflow-hidden"
    >
      <Link href={`/projets/${project.slug}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden rounded-[4px] mb-8 bg-black">
          {thumbnailUrl ? (
            <Image 
              src={thumbnailUrl} 
              alt={project.titre}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
               <span className="text-white/20 font-syne font-bold uppercase text-2xl tracking-tighter">
                  {project.titre}
               </span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          
          <div className="absolute top-4 right-4 bg-gradient-gold p-2 rounded-full transform translate-x-12 translate-y-[-12px] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 z-10">
            <ArrowUpRight className="text-white" size={20} />
          </div>

          <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="bg-gradient-gold text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Voir détails
             </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-syne font-bold text-white uppercase group-hover:text-accent-primary transition-colors">
              {project.titre}
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-gradient-gold font-bold bg-accent-primary/10 px-2 py-1 rounded">
              {project.artiste}
            </span>
          </div>
          
          <p className="text-text-muted text-sm font-space line-clamp-2 mt-2">
            {project.description_courte}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.roles.map((role) => (
              <span key={role} className="text-[10px] uppercase font-arial text-text-muted border border-border-default px-2 py-1 rounded">
                {role}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
