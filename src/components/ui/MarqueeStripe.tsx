"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "Clips Musicaux",
  "Publicité",
  "Brand Content",
  "Direction Artistique",
  "Identité Visuelle",
];

export default function MarqueeStripe() {
  return (
    <div className="w-full h-12 bg-marquee-gold overflow-hidden flex items-center border-y border-accent-active/20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className="text-background-primary font-arial font-bold uppercase text-xs tracking-[2px] mx-8">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-background-primary opacity-50" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
