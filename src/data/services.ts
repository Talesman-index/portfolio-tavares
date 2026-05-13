import { Service } from "@/types";

export const detailedServices: Service[] = [
  {
    id: "clips-musicaux",
    title: "Clips Musicaux",
    description: "Réalisation de clips musicaux mêlant storytelling, esthétique cinématographique et direction artistique afin de créer des univers visuels uniques autour de chaque artiste et de son identité.",
    iconName: "Camera",
    image: "/assets/services/cinema.jpg",
    features: ["Storyboarding narratif", "Direction de la photographie", "Étalonnage cinématographique", "Montage dynamique"]
  },
  {
    id: "pub-brand",
    title: "Publicités / Spots de marques",
    description: "Création de films publicitaires et contenus de marque pensés pour valoriser l'image, les services et l'univers des entreprises à travers des visuels modernes, impactants et immersifs.",
    iconName: "Film",
    image: "/assets/services/pub.jpg",
    features: ["Concept créatif", "Brand storytelling", "Production haute qualité", "Formats multi-plateformes"]
  },
  {
    id: "contenu-creatif",
    title: "Contenus créatifs & commerciaux",
    description: "Production de contenus visuels créatifs mêlant cinéma, lifestyle et expérimentation artistique pour les réseaux sociaux, campagnes digitales et projets visuels contemporains.",
    iconName: "Instagram",
    image: "/assets/services/social.jpg",
    features: ["Réels & TikTok premiums", "Contenu vertical immersif", "Stratégie visuelle sociale", "Engagement organique"]
  },
  {
    id: "dir-art",
    title: "Direction Artistique",
    description: "Développement d'identités visuelles, concepts graphiques et directions créatives construits autour d'une vision forte, cohérente et esthétique adaptée à chaque projet ou marque.",
    iconName: "Palette",
    image: "/assets/services/art.jpg",
    features: ["Identité visuelle", "Moodboarding stratégique", "Design de sets", "Consulting esthétique"]
  }
];
