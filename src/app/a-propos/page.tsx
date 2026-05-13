"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Camera, Film, Palette, Star } from "lucide-react";

const stats = [
  { label: "Projets réalisés", value: "50+" },
  { label: "Clients", value: "30+" },
  { label: "Vues totales", value: "+1M" },
  { label: "Clients satisfaits", value: "100%" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero Portrait Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-syne font-normal text-gradient-gold uppercase tracking-[0.4em] text-xs mb-6"
            >
              L'homme derrière la caméra
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white uppercase leading-[0.9] mb-10"
            >
              Tavares.<br />
              <span className="text-gradient-gold">Réalisateur &amp;<br />Directeur Artistique</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-text-body font-space text-xl leading-relaxed max-w-2xl space-y-6"
            >
              <p>
                Réalisateur et architecte visuel, je sculpte des récits où l'esthétique rencontre l'émotion. Spécialisé dans le clip musical, mon expertise s'étend à la publicité et la direction artistique.
              </p>
              <p>
                Ma mission : explorer de nouveaux horizons visuels pour transformer chaque vision en une expérience sensorielle inoubliable, entre modernité et authenticité afro-contemporaine.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden border border-border-card bg-background-card group">
            <Image 
              src="/assets/tavares.jpg" 
              alt="Portrait de Tavares" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 border-l-4 border-accent-primary pl-6">
               <span className="text-white font-syne font-normal text-2xl uppercase block tracking-tight">Tavares</span>
               <span className="text-text-muted font-syne font-normal text-sm uppercase tracking-widest">Réalisateur & Directeur Artistique</span>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-0 bg-background-primary overflow-hidden">
        {/* Gold top accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-left"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border-card/20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center px-8 py-10 group"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-gradient-gold mb-3 leading-none group-hover:scale-105 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="w-8 h-[1px] bg-accent-primary/40 mb-3 group-hover:w-16 transition-all duration-500" />
                <div className="text-text-muted font-syne font-normal text-[11px] uppercase tracking-[0.2em] text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-right"
        />
      </section>


      {/* Philosophies Section */}
      <section className="py-32 px-6 lg:px-12 bg-background-primary overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-white uppercase mb-4 tracking-tighter">
              Ma <span className="text-gradient-gold">Philosophie</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-background-card rounded-xl border border-border-card hover:border-accent-primary/50 transition-colors">
              <Camera className="text-accent-primary mb-6" size={40} />
              <h3 className="text-2xl font-syne font-bold text-white uppercase mb-4">L'Âme de l'Image</h3>
              <p className="text-text-muted font-space">
                Je ne capture pas seulement des mouvements, je cherche la lumière et les textures qui donnent une véritable âme à chaque plan.
              </p>
            </div>
            <div className="p-10 bg-background-card rounded-xl border border-border-card hover:border-accent-primary/50 transition-colors">
              <Film className="text-accent-primary mb-6" size={40} />
              <h3 className="text-2xl font-syne font-bold text-white uppercase mb-4">Récit Immersif</h3>
              <p className="text-text-muted font-space">
                Inspiré par le cinéma, je transforme chaque projet en une aventure visuelle où le spectateur est totalement immergé.
              </p>
            </div>
            <div className="p-10 bg-background-card rounded-xl border border-border-card hover:border-accent-primary/50 transition-colors">
              <Palette className="text-accent-primary mb-6" size={40} />
              <h3 className="text-2xl font-syne font-bold text-white uppercase mb-4">Afro-Modernité</h3>
              <p className="text-text-muted font-space">
                Mon travail célèbre l'esthétique afro contemporaine, la mêlant à une rigueur cinématographique mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-gold text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-syne font-extrabold text-white uppercase mb-12 leading-none">
            Créons quelque chose <br /> d'unique ensemble.
          </h2>
          <a href="mailto:tavares.stroyline@gmail.com" className="bg-white text-accent-primary font-syne font-normal uppercase py-6 px-16 rounded-full hover:bg-black hover:text-white transition-all text-xl inline-block shadow-2xl tracking-widest">
            Me contacter
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
