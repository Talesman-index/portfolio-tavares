import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStripe from "@/components/ui/MarqueeStripe";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary selection:bg-accent-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Marquee Section */}
      <MarqueeStripe />
      
      {/* Projects Section */}
      <FeaturedProjects />
      
      {/* Divider */}
      <div className="w-full h-px bg-border-card/30" />
      
      {/* Services Section */}
      <ServicesSection />
      
      
      {/* About Teaser / Branding Accent */}
      <section id="a-propos" className="py-32 px-6 lg:px-12 bg-background-secondary relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white uppercase mb-8 leading-[1.1] tracking-tighter">
                L&apos;esthétique <br />
                <span className="text-gradient-gold">Afro-Contempo</span> <br />
                au service de l&apos;image.
              </h2>
              <div className="text-text-body font-space text-lg mb-10 max-w-xl">
                <p>
                  Réalisateur et architecte visuel, je sculpte des univers où la rigueur cinématographique rencontre l&apos;énergie brute de la culture urbaine. Mon objectif : transformer chaque vision en une expérience sensorielle inoubliable, entre modernité et authenticité.
                </p>
              </div>
            <div className="pt-4">
              <Link href="/a-propos" className="btn-secondary">
                En savoir plus
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-900 rounded-lg overflow-hidden border-2 border-border-card">
             <Image 
               src="/assets/tavares.jpg" 
               alt="Tavares Photo" 
               fill 
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 border-l-4 border-accent-primary pl-6">
                <span className="text-white font-syne font-bold text-xl uppercase block">Tavares</span>
                <span className="text-text-muted font-space text-sm">Directeur Artistique</span>
             </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-gradient-gold text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-syne font-extrabold text-white uppercase mb-12 leading-none">
          Prêt à sculpter <br /> votre vision ?
        </h2>
        <a href="mailto:tavares.stroyline@gmail.com" className="bg-white text-accent-primary font-syne font-bold uppercase py-6 px-16 rounded-full hover:bg-black hover:text-white transition-all text-xl inline-block shadow-xl">
          Démarrer un projet
        </a>
      </section>
      
      <Footer />
    </main>
  );
}
