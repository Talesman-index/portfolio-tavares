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
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}
