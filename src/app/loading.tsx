"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.98, 1, 0.98]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-[2px] bg-gradient-gold" />
          <h2 className="text-xl font-syne font-bold text-white uppercase tracking-[0.5em] pl-[0.5em]">
            Tavares
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold" />
        </motion.div>
      </div>
    </div>
  );
}
