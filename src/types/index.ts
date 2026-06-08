export interface Project {
  id: string;
  slug: string;
  titre: string;
  artiste: string;
  categorie: string;
  roles: string[];
  description_courte: string;
  description_longue: string;
  resultat: string;
  youtube_id: string;
  youtube_url: string;
  coverImage?: string;
  additionalLinks?: { label: string; url: string }[];
  subProjects?: SubProject[];
  featured?: boolean;
}

export interface SubProject {
  titre: string;
  description: string;
  resultat?: string;
  youtube_id?: string;
  coverImage?: string;
  url?: string;
  aspectRatio?: "video" | "portrait";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}
