"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "/projets" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 w-full z-[100] transition-all duration-500 flex items-center px-6 lg:px-12",
          isOpen 
            ? "top-0 bg-transparent h-[80px]" 
            : (scrolled ? "top-0 bg-background-primary/95 backdrop-blur-md h-[80px] shadow-2xl" : "top-8 bg-transparent h-[100px]")
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 border border-border-card rounded-full flex items-center justify-center overflow-hidden bg-background-card relative">
               <Image 
                 src="/assets/logo.png" 
                 alt="Tavares Logo" 
                 fill 
                 className="object-cover"
               />
            </div>
            <span className="text-white font-syne font-normal tracking-tighter text-lg uppercase hidden sm:block">
              Tavares
            </span>
          </Link>
  
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase font-syne font-normal text-text-body/80 hover:text-white transition-colors duration-300 tracking-[0.08em]"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              className="border border-white/80 text-white font-syne font-normal text-[13px] uppercase py-3 px-8 rounded-[4px] hover:bg-white hover:text-black transition-all duration-300 tracking-[0.08em]"
            >
              Me contacter
            </Link>
          </div>
  
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background-primary/98 backdrop-blur-2xl z-[90] md:hidden flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-8 w-full px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl uppercase font-syne font-bold text-white hover:text-accent-primary transition-all duration-300 tracking-[0.1em]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.08 }}
                className="mt-6 w-full max-w-[280px]"
              >
                <Link
                  href="/#contact"
                  className="block w-full border border-white/20 text-white font-syne font-normal text-lg uppercase py-5 px-8 rounded-full text-center hover:bg-white hover:text-black transition-all duration-500"
                  onClick={() => setIsOpen(false)}
                >
                  Me contacter
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
