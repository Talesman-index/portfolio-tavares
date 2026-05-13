import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Tavares | Réalisateur & Directeur Artistique",
  description: "Portfolio de Tavares, Réalisateur & Directeur Artistique basé à Cotonou, Bénin. Clips musicaux, publicité, brand content.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background-primary text-text-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
