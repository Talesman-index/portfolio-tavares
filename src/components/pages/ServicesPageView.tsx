"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Camera, Film, Instagram, Palette } from "lucide-react";
import { detailedServices } from "@/data/services";

const IconMap: Record<string, any> = {
  Camera: Camera,
  Film: Film,
  Instagram: Instagram,
  Palette: Palette,
};

export default function ServicesPageView() {
  return <div className="min-h-screen bg-background-primary">
      <Navbar />

      <div className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-center mb-12 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient-gold font-syne font-normal uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4"
          >
            Ce que je fais pour vous
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[8vw] sm:text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold text-white uppercase leading-[0.9] tracking-tighter mx-auto max-w-[90%]"
          >
            Expertises <br className="sm:hidden" /> <span className="text-gradient-gold">Créatives.</span>
          </motion.h1>
        </div>

        <div className="max-w-[1400px] mx-auto space-y-24 lg:space-y-32">
          {detailedServices.map((service, index) => {
            const Icon = IconMap[service.iconName];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={isEven ? "flex flex-col lg:flex-row gap-10 lg:gap-16 items-center" : "flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center"}
              >
                <div className="lg:w-1/2 w-full">
                   <div className="w-14 h-14 lg:w-20 lg:h-20 bg-background-card rounded-2xl flex items-center justify-center border border-border-card bg-gradient-gold shadow-2xl mb-6 lg:mb-8">
                     <Icon size={28} className="text-white lg:hidden" />
                     <Icon size={48} className="text-white hidden lg:block" />
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-syne font-extrabold text-white uppercase mb-6 lg:mb-8 leading-tight tracking-tight">
                     {service.title}
                   </h2>
                   <p className="text-text-body font-space text-base md:text-xl leading-relaxed mb-8">
                     {service.description}
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                     {service.features.map((feature: string, i: number) => (
                       <li key={i} className="flex items-center gap-3 text-text-muted font-space text-[13px] md:text-base">
                         <CheckCircle size={16} className="text-accent-primary shrink-0" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="lg:w-1/2 relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-border-card shadow-2xl group bg-background-secondary">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                   />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-gold text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-syne font-extrabold text-white uppercase mb-10 lg:mb-12 leading-[0.9] tracking-tighter">
            Besoin d&apos;un <br /> devis personnalisé ?
          </h2>
          <a href="/#contact" className="bg-white text-accent-primary font-syne font-normal uppercase py-5 px-10 lg:py-6 lg:px-16 rounded-full hover:bg-black hover:text-white transition-all text-base lg:text-xl inline-block shadow-2xl tracking-widest">
            Lancer la discussion
          </a>
        </div>
      </section>

      <Footer />
    </div>
}
