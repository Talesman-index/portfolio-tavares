"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <p className="text-gradient-gold font-space font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio Complet
            </p>
            <h1 className="text-5xl md:text-8xl font-syne font-extrabold text-white uppercase leading-none mb-8">
              Mes <span className="text-gradient-gold">Réalisations.</span>
            </h1>
            <p className="text-text-muted font-space text-xl max-w-2xl leading-relaxed">
              Une immersion dans mes univers visuels. Des clips musicaux aux films publicitaires, découvrez comment je sculpte chaque image pour raconter une histoire unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
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
