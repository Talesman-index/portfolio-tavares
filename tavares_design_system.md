# Design System — Tavares Portfolio
> Inspiré de Real MRV · Adapté pour un cinéaste basé à Cotonou

---

## 1. Atmosphère & Identité Visuelle

Cinématique. Afro-contemporain. Sombre et expressif.

Le design s'appuie sur un fond quasi-noir, dominant et immersif, ponctué d'un orange-corail vif qui signale l'action et l'énergie créative. L'ensemble évoque l'atmosphère d'une salle de projection, d'un plateau de tournage, d'un univers où chaque image est pensée. La typographie est audacieuse et moderne. Les médias (vidéos, photos) occupent toute la place — le design recule pour les laisser respirer.

**Caractéristiques clés**
- Fond profond `#060909` — luxueux, cinématique, galerie
- Accent orange-corail `#EA5A33` — CTAs, highlights, énergie
- Typographie Syne (titres) + Space Grotesk (corps/labels)
- Sections hero plein écran, texte centré en overlay
- Espace blanc généreux entre sections
- Pas de bordures décoratives — profondeur par superposition de contenu

---

## 2. Palette de couleurs

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#060909` | Fond principal, toutes surfaces UI |
| `--bg-secondary` | `#000000` | Zones de contraste fort, overlays texte |
| `--bg-card` | `#111111` | Cards projets, surfaces secondaires |
| `--bg-input` | `#222222` | Champs de formulaire |

### Accents
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#EA5A33` | CTA principal, borders actifs, highlights |
| `--accent-hover` | `#FF6F44` | Hover sur CTA primaire |
| `--accent-active` | `#D64A28` | État actif/pressed |
| `--accent-rare` | `#DCFF7D` | Stripe marquee, accent ultra-rare |
| `--accent-secondary` | `#889EA8` | Éléments secondaires, inputs subtils |

### Texte
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-heading` | `#FFFFFF` | Titres, headings |
| `--text-body` | `#FFFDF6` | Corps de texte sur fond sombre |
| `--text-muted` | `#A3ACC2` | Labels discrets, placeholders |
| `--text-disabled` | `#5F6668` | États désactivés |

### Bordures & Neutres
| Token | Hex | Usage |
|-------|-----|-------|
| `--border-default` | `#5F6668` | Bordures inputs, dividers |
| `--border-light` | `#A3ACC2` | Bordures subtiles sur fond sombre |
| `--border-card` | `#333333` | Bord logo, contours cards |

---

## 3. Typographie

### Polices
```css
/* Google Fonts à importer */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Grotesk:wght@400;600&display=swap');
```

| Rôle | Police | Taille | Weight | Notes |
|------|--------|--------|--------|-------|
| Display/Mega | Space Grotesk | 85px | 600 | Hero, marquee — impact maximal |
| H1 | Syne | 48px | 700 | Titres de page |
| H2 | Syne | 36px | 800 | Titres de section |
| H3 | Syne | 24px | 700 | Titres de cards |
| H4 | Syne | 18px | 700 | Sous-sections |
| Overline | Space Grotesk | 32px | 600 | Labels spéciaux, numéros |
| Body | Space Grotesk | 18px | 400 | Description, paragraphes |
| UI/Nav | Arial | 14px | 400 | Navigation, boutons, liens |

### Règles typo
- Syne en 700–800 pour ancrer la hiérarchie
- Navigation toujours en MAJUSCULES
- Pas d'espacement négatif entre lettres (letter-spacing: 0)
- Texte clair sur fond sombre — jamais de gris moyen sur noir

---

## 4. Composants

### Bouton Primaire
```css
background: #EA5A33;
color: #FFFFFF;
font: Arial 14px weight 400;
padding: 16px 32px;
border-radius: 4px;
border: 2px solid #EA5A33;

/* Hover */
background: #FF6F44;
border-color: #FF6F44;

/* Active */
background: #D64A28;
border-color: #D64A28;

/* Disabled */
background: #5F6668;
opacity: 0.6;
cursor: not-allowed;
```

### Bouton Secondaire
```css
background: transparent;
color: #EA5A33;
border: 2px solid #EA5A33;
padding: 16px 32px;
border-radius: 4px;

/* Hover */
background: rgba(234, 90, 51, 0.1);
color: #FF6F44;
border-color: #FF6F44;
```

### Bouton Ghost
```css
background: transparent;
color: #FFFDF6;
border: 2px solid #FFFDF6;
padding: 16px 32px;
border-radius: 4px;

/* Hover */
background: rgba(255, 253, 246, 0.1);
```

### Card Projet
```css
background: #111111;
border-radius: 8px;
border-left: 4px solid #EA5A33; /* OBLIGATOIRE */
padding: 32px;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);

/* Hover */
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.6);
transform: translateY(-2px);
```

### Input / Formulaire
```css
background: #222222;
border: 1px solid #5F6668;
border-radius: 4px;
padding: 12px 16px;
color: #FFFDF6;
font: Space Grotesk 18px;
min-height: 44px;

/* Focus */
border: 2px solid #EA5A33;
box-shadow: 0 0 0 3px rgba(234, 90, 51, 0.1);
```

### Navigation Bar
```css
height: 53px;
background: #060909;
font: Arial 14px uppercase weight 400;
color: #FFFDF6;

/* Lien actif */
color: #EA5A33;
border-bottom: 2px solid #EA5A33;

/* Logo */
width: 40px;
height: 40px;
border: 1px solid #333333;
border-radius: 50%;
```

### Stripe Marquee
```css
height: 12px;
background: #EA5A33;
color: #060909;
font: Arial 12px uppercase;
letter-spacing: 2px;
/* Animation scroll continu, no pause */
```

---

## 5. Espacement

Échelle modulaire stricte :
`4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 36 · 40 · 48 · 52px`

| Contexte | Valeur |
|----------|--------|
| Padding card | 32px |
| Gap entre cards | 32px |
| Gap entre sections | 80–100px |
| Padding hero overlay desktop | 48px |
| Padding hero overlay tablet | 28px |
| Padding hero overlay mobile | 20px |
| Margin-bottom entre paragraphes | 24px |

---

## 6. Hero Section

```css
/* Full-bleed, pleine largeur */
width: 100vw;
height: 70vh; /* desktop */

/* Overlay texte centré */
background: rgba(6, 9, 9, 0.7);
text-align: center;
padding: 48px;

/* Mobile */
height: 50vh;
padding: 20px;
```

---

## 7. Ombres & Élévation

| Niveau | CSS | Usage |
|--------|-----|-------|
| Raised | `0px 4px 16px rgba(0,0,0,0.4)` | Cards repos |
| Floating | `0px 8px 24px rgba(0,0,0,0.6)` | Cards hover |
| Lifted | `0px 12px 32px rgba(0,0,0,0.8)` | Modals, sticky nav |
| Overlay | `0px 16px 48px rgba(0,0,0,1.0)` | Overlays prioritaires |

Toujours une seule ombre par élément. Jamais de superposition d'ombres.

---

## 8. Border Radius

| Type | Valeur | Usage |
|------|--------|-------|
| Sharp | 0px | Hero, full-bleed, marquee |
| Subtle | 4px | Boutons, inputs |
| Moderate | 8px | Cards, containers |
| Circular | 50% | Logo, avatars, icon buttons |

---

## 9. Responsive

| Breakpoint | Largeur | Changements clés |
|------------|---------|-----------------|
| Mobile | 320–767px | 1 colonne · Nav hamburger · Padding 20px · Hero 50vh |
| Tablet | 768–1024px | 2 colonnes · Padding 32px · Hero 60vh |
| Desktop | 1025–1400px | 3 colonnes · Padding 40px · Hero 70vh |
| Large | 1401px+ | Max-width 1400px centré · Espacement +20–30% |

**Grilles** : 3 colonnes (desktop) → 2 (tablet) → 1 (mobile)

**Touch targets** : min 48px hauteur (mobile), 44px (desktop)

---

## 10. Do's & Don'ts

### ✅ À faire
- Fond deep black `#060909` comme surface principale
- Orange-corail `#EA5A33` réservé aux CTAs et accents clés
- Texte body en off-white `#FFFDF6` sur fond sombre
- Border gauche `4px solid #EA5A33` sur toutes les cards projets
- Sections hero plein écran, texte en overlay centré
- Espace généreux entre sections (80px+)
- Syne 700–800 pour tous les titres

### ❌ À ne pas faire
- Jamais de texte gris moyen `#333` sur fond noir
- Lime yellow `#DCFF7D` ultra-rare — uniquement marquee ou highlight exceptionnel
- Jamais de border-radius sur les sections hero
- Jamais d'ombres superposées (1 seule par élément)
- Jamais de texte < 14px
- Jamais de layout multi-colonnes forcé sur mobile
- Ne pas animer le texte en continu — l'animation doit être intentionnelle

---

## 11. Quick Reference Agent

```
BG principal    : #060909
BG secondaire   : #000000
BG card         : #111111
Accent CTA      : #EA5A33
Accent hover    : #FF6F44
Texte heading   : #FFFFFF
Texte body      : #FFFDF6
Texte muted     : #A3ACC2
Border default  : #5F6668
Accent rare     : #DCFF7D
Accent stripe   : #EA5A33

Fonts           : Syne (titres 700–800) · Space Grotesk (body 400) · Arial (UI 400)
Border-radius   : 0px hero · 4px boutons/inputs · 8px cards · 50% cercles
Shadow base     : 0px 4px 16px rgba(0,0,0,0.4)
Shadow hover    : 0px 8px 24px rgba(0,0,0,0.6)
Card accent     : border-left: 4px solid #EA5A33
```
