"use client";

import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section id="projets" className="py-32 px-6 lg:px-12 bg-background-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gradient-gold font-space font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Sélection de travaux
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-syne font-extrabold uppercase text-white mb-6"
          >
            Travaux <span className="text-gradient-gold">récents.</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-gold" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/projets" className="btn-secondary group gap-3">
              <span>Voir tous les projets</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
