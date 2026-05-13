"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-32 pb-12 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Massive CTA Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-end gap-12"
          >
            <div className="max-w-3xl">
              <p className="text-accent-primary font-space font-bold uppercase tracking-[0.4em] text-xs mb-8">
                Prêt pour la suite ?
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white uppercase leading-[0.9] tracking-tighter mb-4">
                Un projet <br />
                <span className="text-gradient-gold">En tête ?</span>
              </h2>
            </div>
            <div className="pb-4">
              <Link 
                href="/#contact" 
                className="group flex items-center gap-4 bg-white text-black font-syne font-bold uppercase py-6 px-12 rounded-full hover:bg-accent-primary hover:text-white transition-all duration-500 text-xl md:text-2xl whitespace-nowrap shadow-2xl"
              >
                Parlons-en.
                <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={32} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-border-card/20 pt-20 mb-20">
          
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-syne font-normal text-white uppercase mb-8">Afro-Contempo</h3>
            <p className="text-text-muted font-space text-lg leading-relaxed max-w-sm italic opacity-80">
              "Mon travail célèbre l'esthétique afro-contempo, la mêlant à une rigueur cinématographique mondiale."
            </p>
            <div className="mt-12 flex gap-6">
              <a href="https://www.instagram.com/brayann_n_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-accent-primary/20 hover:border-accent-primary hover:bg-accent-primary/10 transition-all text-white group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-accent-primary/20 hover:border-accent-primary hover:bg-accent-primary/10 transition-all text-white group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:tavares.stroyline@gmail.com" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-accent-primary/20 hover:border-accent-primary hover:bg-accent-primary/10 transition-all text-white group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-accent-primary font-space font-bold uppercase tracking-[0.2em] text-xs mb-8">Contact</h4>
            <ul className="space-y-6">
              <li>
                <span className="text-text-muted text-xs uppercase block mb-1">Email</span>
                <a href="mailto:tavares.stroyline@gmail.com" className="text-white font-space text-lg hover:text-accent-primary transition-colors underline decoration-accent-primary/30 underline-offset-8">
                  tavares.stroyline@gmail.com
                </a>
              </li>
              <li>
                <span className="text-text-muted text-xs uppercase block mb-1">WhatsApp</span>
                <a href="https://wa.me/2290152985798" target="_blank" rel="noopener noreferrer" className="text-white font-space text-lg hover:text-accent-primary transition-colors">
                  +229 01 52 98 57 98
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-accent-primary font-space font-bold uppercase tracking-[0.2em] text-xs mb-8">Localisation</h4>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-accent-primary mt-2 animate-pulse" />
              <div>
                <p className="text-white font-syne font-bold text-2xl uppercase mb-2">Cotonou, Bénin</p>
                <p className="text-text-muted font-space text-sm leading-relaxed max-w-[200px]">
                  Disponible partout pour sculpter vos visions les plus ambitieuses.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-card/20 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <span className="text-white font-syne font-normal uppercase text-lg tracking-widest opacity-40">Tavares</span>
             <p className="text-text-muted text-[10px] uppercase tracking-widest font-syne opacity-50">
               &copy; {currentYear} · Tous droits réservés
             </p>
          </div>
          <div className="flex gap-10">
            <Link href="/mentions-legales" className="text-text-muted text-[10px] uppercase tracking-widest hover:text-accent-primary transition-colors font-syne">
              Mentions Légales
            </Link>
            <Link href="/confidentialite" className="text-text-muted text-[10px] uppercase tracking-widest hover:text-accent-primary transition-colors font-syne">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
