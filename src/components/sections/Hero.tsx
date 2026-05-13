"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center justify-center" style={{overflowX:'hidden'}}>
      {/* Background Media */}
      <div className="absolute inset-0 bg-background-primary">
         <video
           ref={videoRef}
           autoPlay
           muted
           loop
           playsInline
           poster="/assets/hero-bg.jpg"
           className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
         >
           <source src="/assets/hero.mov" type="video/quicktime" />
           <source src="/assets/hero.mov" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-primary z-10" />
      </div>

      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-space font-bold text-accent-primary uppercase tracking-[0.6em] mb-12 text-[10px] md:text-xs opacity-60">
            Cotonou · Bénin
          </p>

          <h1 className="text-[11vw] sm:text-8xl md:text-9xl lg:text-[160px] font-syne font-extrabold text-white leading-[0.8] uppercase mb-8 tracking-[-0.03em] w-full text-center">
            Tavares
          </h1>
          
          <div className="flex items-center justify-center gap-6">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: 48 }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="h-[1px] bg-gradient-to-r from-transparent to-accent-primary/40" 
             />
             <span className="text-gradient-gold font-syne font-bold uppercase tracking-[0.3em] text-[9px] md:text-xs text-center">
               Réalisateur &amp; Directeur Artistique
             </span>
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: 48 }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="h-[1px] bg-gradient-to-l from-transparent to-accent-primary/40" 
             />
          </div>
        </motion.div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,0.85)] z-20" />
      
      {/* Artistic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
      >
        <div className="relative w-[26px] h-[45px] border border-accent-primary/20 rounded-full mb-4 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [2, 12, 2],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-3 bg-accent-primary rounded-full"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 font-space text-[9px] uppercase tracking-[0.4em] transform translate-x-[2px]">Explore</span>
          <motion.div 
             animate={{ height: [0, 60, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="w-[1px] bg-gradient-to-b from-accent-primary to-transparent" 
          />
        </div>
      </motion.div>
    </section>
  );
}
