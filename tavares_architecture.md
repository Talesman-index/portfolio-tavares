# Architecture — Portfolio Tavares

## Pages & Sections

```
/
├── HOME
│   ├── Nav (sticky)
│   ├── Hero (full-bleed, vidéo/image bg)
│   ├── Stripe Marquee (orange, continu)
│   ├── Projets en vedette (3 cards)
│   ├── Services (4 blocs)
│   ├── À propos (teaser + CTA)
│   └── Footer
│
├── /projets
│   ├── Nav
│   ├── Hero section titre
│   ├── Filtres (Clips · Pub · Brand · Branding)
│   ├── Grille projets (3 col desktop → 1 mobile)
│   └── Footer
│
├── /projets/[slug]
│   ├── Nav
│   ├── Hero vidéo/image (plein écran)
│   ├── Métadonnées (Artiste · Rôle · Année)
│   ├── Description longue
│   ├── Galerie (photos du tournage / stills)
│   ├── Projets similaires
│   └── Footer
│
├── /services
│   ├── Nav
│   ├── Hero titre
│   ├── 4 services détaillés (cards avec border gauche orange)
│   └── Footer
│
├── /a-propos
│   ├── Nav
│   ├── Photo + texte long
│   ├── Compétences / approche
│   └── Footer
│
└── /contact
    ├── Nav
    ├── Formulaire de contact
    ├── Réseaux sociaux
    └── Footer
```

---

## Structure de la Nav

```
[LOGO/TAVARES]          PROJETS · SERVICES · À PROPOS · CONTACT · [CTA: Me contacter]
```

- Height : 53px
- Font : Arial 14px uppercase
- Lien actif : couleur `#EA5A33` + border-bottom `2px solid #EA5A33`
- Sticky en scroll
- Mobile : hamburger → drawer overlay

---

## Sections clés — Home

### 1. Hero
- Plein écran (100vw × 80–90vh)
- Fond : vidéo ou image cinématique en loop
- Overlay semi-transparent `rgba(6,9,9,0.7)`
- Centré verticalement et horizontalement
- Contenu :
  ```
  [Overline : Cotonou · Bénin]
  CINÉASTE.
  DIRECTEUR ARTISTIQUE.
  CRÉATEUR D'UNIVERS.
  [CTA] Voir le travail
  ```

### 2. Stripe Marquee
- `12px` hauteur
- Fond `#EA5A33`, texte `#060909`
- Texte en loop : `CLIPS MUSICAUX · PUBLICITÉ · BRAND CONTENT · DIRECTION ARTISTIQUE · IDENTITÉ VISUELLE ·`

### 3. Projets en vedette
- Titre section : "Travaux récents"
- 3 cards côte à côte (desktop), scroll horizontal (mobile)
- Chaque card : image/vignette · titre · artiste · rôle · CTA

### 4. Services
- Titre : "Ce que je fais"
- 4 blocs en grille 2×2
- Chaque bloc : icône ou numéro · titre · description courte
- Border gauche orange obligatoire

### 5. À Propos (teaser)
- Texte court version bio + photo
- CTA : "En savoir plus"

---

## Données Projets (JSON-ready)

```json
[
  {
    "id": "ya-pas-moyen",
    "slug": "ya-pas-moyen",
    "titre": "Ya Pas Moyen",
    "artiste": "Joe Kingston",
    "categorie": "clip",
    "roles": ["Réalisation", "Scénario", "Direction Artistique"],
    "description_courte": "Clip afro-rétro inspiré du théâtre populaire africain.",
    "description_longue": "Clip narratif inspiré du théâtre populaire africain, racontant l'histoire d'un homme prisonnier d'une relation basée sur l'argent et les apparences, avant de reprendre confiance en lui et retrouver sa liberté. Le projet mélange humour, scènes du quotidien et ambiance festive africaine à travers une esthétique afro-rétro chaleureuse et expressive.",
    "resultat": "Un univers visuel dynamique, drôle et profondément ancré dans la culture africaine contemporaine.",
    "mots_cles": ["Afro-rétro", "Théâtral", "Humour", "Culturel"],
    "featured": true
  },
  {
    "id": "goslow",
    "slug": "goslow",
    "titre": "Goslow",
    "artiste": "Opa, Conex, Don & Ghix",
    "categorie": "clip",
    "roles": ["Réalisation", "Storyboard", "Direction Artistique"],
    "description_courte": "Clip urbain célébrant le chaos et l'énergie de Cotonou.",
    "description_longue": "Clip urbain inspiré du quotidien de Cotonou, construit autour du chaos des embouteillages et de l'énergie de la rue. Le projet transforme une situation ordinaire — le goslow — en une expérience visuelle vivante, rythmée et culturelle. Entre circulation saturée, zems, danseurs, gym du ghetto et fête nocturne.",
    "resultat": "Un clip intense et authentique célébrant le chaos, l'énergie et l'identité urbaine de Cotonou.",
    "mots_cles": ["Urbain", "Rue", "Cotonou", "Énergie"],
    "featured": true
  },
  {
    "id": "choose-you",
    "slug": "choose-you",
    "titre": "Choose You",
    "artiste": "Opa",
    "categorie": "clip",
    "roles": ["Réalisation", "Scénario", "Direction Artistique"],
    "description_courte": "Clip intimiste tourné à Grand-Popo, célébrant l'amour et les origines.",
    "description_longue": "Clip narratif tourné à Grand-Popo. Choose You raconte le retour d'un homme vers ses origines et son amour d'enfance. À travers des moments simples du quotidien, le projet explore la mémoire, la connexion et les liens authentiques. La mise en scène privilégie la spontanéité, les gestes et les regards.",
    "resultat": "Un clip doux et immersif, chargé d'émotion, qui célèbre l'amour, les racines et la simplicité des liens humains.",
    "mots_cles": ["Intimiste", "Côtier", "Émotionnel", "Narratif"],
    "featured": true
  }
]
```

---

## Composants à développer (priorités)

| Priorité | Composant | Notes |
|----------|-----------|-------|
| 🔴 P0 | Hero fullscreen | Vidéo/image bg + overlay + CTA |
| 🔴 P0 | Nav sticky | Logo + liens + CTA mobile hamburger |
| 🔴 P0 | ProjectCard | Image · titre · rôle · hover |
| 🔴 P0 | Footer | Réseaux + localisation + phrase |
| 🟡 P1 | MarqueeStripe | Loop orange continu |
| 🟡 P1 | ServiceBlock | 4 blocs border-gauche orange |
| 🟡 P1 | ProjectDetail | Page projet individuel |
| 🟢 P2 | FilterBar | Tabs par catégorie |
| 🟢 P2 | ContactForm | Formulaire styled |
| 🟢 P2 | AboutSection | Photo + bio + compétences |
