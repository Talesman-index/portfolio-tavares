"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    { id: "all", label: "Tous" },
    { id: "clips-musicaux", label: "Clips Musicaux" },
    { id: "publicite", label: "Publicités / Spots de marques" },
    { id: "contenu-creatif", label: "Contenus Créatifs" },
    { id: "direction-artistique", label: "Direction Artistique" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.categorie === activeCategory);

  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-gradient-gold font-space font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio Complet
            </p>
            <h1 className="text-5xl md:text-8xl font-syne font-extrabold text-white uppercase leading-none mb-8">
              Mes <span className="text-gradient-gold">Réalisations.</span>
            </h1>
          </motion.div>

          {/* Filters - New Design: Pills */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[12px] uppercase font-syne font-semibold tracking-[0.1em] transition-all duration-300 border",
                  activeCategory === cat.id 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA section to connect back or to contact */}
      <section className="py-32 px-6 lg:px-12 bg-background-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white uppercase mb-10">
            Une vision pour <span className="text-gradient-gold">votre projet ?</span>
          </h2>
          <a href="/#contact" className="btn-primary inline-block py-5 px-12 text-lg">
            Parlons-en maintenant
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
