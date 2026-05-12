"use client";

import React from "react";
import { Camera, Film, Instagram, Palette, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Cinéma & Clips",
    description: "Transcender la musique par l'image. Je réalise des clips immersifs où chaque plan raconte une histoire et chaque couleur vibre avec le rythme.",
    icon: <Camera className="text-white" size={32} />,
    tag: "Art & Motion",
  },
  {
    title: "Publicité Narrative",
    description: "Donner une âme aux marques. Je conçois des campagnes visuelles qui ne se contentent pas de vendre, mais qui créent une émotion durable.",
    icon: <Film className="text-white" size={32} />,
    tag: "Branding",
  },
  {
    title: "Vibrations Digitales",
    description: "Maîtriser l'impact court. Création de contenus dynamiques (Réels, TikTok) pensés pour stopper le scroll et marquer les esprits.",
    icon: <Instagram className="text-white" size={32} />,
    tag: "Social Impact",
  },
  {
    title: "Direction Artistique",
    description: "L'identité par l'esthétique. De la conception du logo à l'univers visuel global, je définis l'ADN graphique de vos projets les plus ambitieux.",
    icon: <Palette className="text-white" size={32} />,
    tag: "Creative Vision",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-background-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gradient-gold font-space font-bold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Expertise & Vision
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-syne font-extrabold uppercase text-white leading-[0.9]"
            >
              Ce que je <br />
              <span className="text-gradient-gold">Fais.</span>
            </motion.h2>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="max-w-md"
          >
            <p className="text-text-body font-space text-xl leading-relaxed italic border-l-2 border-accent-primary pl-6">
              "De la conception à la post-production, j&apos;accompagne les artistes et les marques dans la création d&apos;univers visuels marquants."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background-card p-8 rounded-2xl border border-border-card hover:border-accent-primary/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="mb-8 flex justify-between items-start relative z-10">
                <div className="w-14 h-14 bg-background-secondary rounded-xl flex items-center justify-center border border-border-card group-hover:border-accent-primary/30 group-hover:bg-gradient-gold transition-all duration-500 shadow-xl">
                   {service.icon}
                </div>
                <span className="text-[10px] font-space font-bold uppercase tracking-widest text-text-muted group-hover:text-accent-primary transition-colors">
                  {service.tag}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-syne font-bold text-white uppercase mb-4 leading-tight group-hover:text-accent-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted font-space text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 pt-4 border-t border-border-card group-hover:border-accent-primary/20 transition-colors flex items-center justify-between">
                <span className="text-[10px] font-space text-text-muted uppercase">Expertise {index + 1}</span>
                <ArrowUpRight className="text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/services" className="btn-secondary group gap-3">
            <span>Découvrir toutes les expertises</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
