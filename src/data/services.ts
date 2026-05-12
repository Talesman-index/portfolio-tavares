import { Service } from "@/types";

export const detailedServices: Service[] = [
  {
    id: "cinema-clips",
    title: "Cinéma & Clips",
    description: "Transcender la musique par l'image. Je réalise des clips immersifs où chaque plan raconte une histoire et chaque couleur vibre avec le rythme.",
    iconName: "Camera",
    image: "/assets/services/cinema.jpg",
    features: ["Storyboarding narratif", "Direction de la photographie", "Étalonnage cinématographique", "Montage dynamique"]
  },
  {
    id: "pub-brand",
    title: "Publicité Narrative",
    description: "Donner une âme aux marques. Je conçois des campagnes visuelles qui ne se contentent pas de vendre, mais qui créent une émotion durable.",
    iconName: "Film",
    image: "/assets/services/pub.jpg",
    features: ["Concept créatif", "Brand storytelling", "Production haute qualité", "Formats multi-plateformes"]
  },
  {
    id: "social-content",
    title: "Social Content Impact",
    description: "Maîtriser l'impact court. Création de contenus dynamiques pensés pour stopper le scroll et marquer les esprits sur les réseaux sociaux.",
    iconName: "Instagram",
    image: "/assets/services/social.jpg",
    features: ["Réels & TikTok premiums", "Contenu vertical immersif", "Stratégie visuelle sociale", "Engagement organique"]
  },
  {
    id: "dir-art",
    title: "Direction Artistique",
    description: "L'identité par l'esthétique. Je définis l'ADN graphique de vos projets, assurant une cohérence visuelle totale du logo au film final.",
    iconName: "Palette",
    image: "/assets/services/art.jpg",
    features: ["Identité visuelle", "Moodboarding stratégique", "Design de sets", "Consulting esthétique"]
  }
];
