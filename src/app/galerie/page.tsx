"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Camera, Image as ImageIcon, Film, Maximize2, X } from "lucide-react";

const galleryImages = [
  { id: 7, src: "/assets/galerie/SHG-TOURNAGE-OPA-2-80.jpg", title: "Performance Live - Opa", category: "Tournage" },
  { id: 8, src: "/assets/galerie/SHG-TOURNAGE-OPA-2-9.jpg", title: "Atmosphère de Plateau", category: "Backstage" },
  { id: 5, src: "/assets/tavares.jpg", title: "Tavares en action", category: "Portrait" },
];

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <main className="bg-background-primary min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient-gold font-syne font-normal uppercase tracking-[0.4em] text-xs mb-4"
          >
            L&apos;univers visuel
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-syne font-extrabold text-white uppercase leading-[0.9] tracking-tighter mb-8"
          >
            Ma <span className="text-gradient-gold">Galerie.</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-gold mx-auto"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border-card/20 bg-background-card cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Placeholder/Real Image */}
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-accent-primary font-space font-bold uppercase tracking-widest text-[10px] mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-syne font-bold text-xl uppercase mb-4 leading-tight">
                    {image.title}
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent-primary/0 group-hover:border-accent-primary/50 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent-primary/0 group-hover:border-accent-primary/50 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-accent-primary transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-sm border border-white/10 shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-accent-primary font-space font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-syne font-bold text-2xl uppercase tracking-tighter">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-background-secondary border-t border-border-card/10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white uppercase mb-8">
            Envie de créer une <span className="text-gradient-gold">esthétique unique ?</span>
          </h2>
          <a href="mailto:tavares.storyline@gmail.com" className="btn-primary inline-flex">
            CONTACT
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
