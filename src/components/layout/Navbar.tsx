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
  { name: "Projets", href: "/#projets" },
  { name: "Services", href: "/#services" },
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-[53px] z-50 transition-all duration-300 flex items-center px-6 lg:px-12",
        scrolled ? "bg-background-primary shadow-lg" : "bg-transparent"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border border-border-card rounded-full flex items-center justify-center overflow-hidden bg-background-card relative">
             <Image 
               src="/assets/logo.png" 
               alt="Tavares Logo" 
               fill 
               className="object-cover"
             />
          </div>
          <span className="text-white font-syne font-bold tracking-tighter text-lg uppercase hidden sm:block">
            Tavares
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] uppercase font-arial text-text-body hover:text-accent-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact" className="border border-white/20 text-white font-syne font-bold text-[13px] uppercase py-3 px-8 rounded-[4px] hover:bg-white hover:text-black transition-all tracking-wider">
            Me contacter
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[53px] bg-background-primary z-40 flex flex-col items-center justify-center gap-8 p-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl uppercase font-syne font-bold text-white hover:text-accent-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Me contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
