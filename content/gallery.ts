export type GalleryCategory = "buffets" | "plats" | "dattes" | "decors" | "tradition" | "lunch-box";

export const categories: { id: GalleryCategory; label: string }[] = [
  { id: "buffets", label: "Buffets" },
  { id: "plats", label: "Plats" },
  { id: "dattes", label: "Dattes & fruits secs" },
  { id: "decors", label: "Décors" },
  { id: "tradition", label: "Mise en place traditionnelle" },
  { id: "lunch-box", label: "Lunch box" },
];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  alt: string;
  /** Chemin sous /public (ex. "/photos/buffet-01.jpg"). Sans `src`, un visuel de marque est affiché. */
  src?: string;
  width?: number;
  height?: number;
};

/**
 * Photos : uniquement celles du client. Déposer les fichiers dans public/photos
 * puis renseigner `src`, `width` et `height` ci-dessous.
 */
export const gallery: GalleryItem[] = [
  { id: "g1", category: "buffets", alt: "Buffet sucré et salé" },
  { id: "g2", category: "plats", alt: "Boulettes de kefta et purée en barquette" },
  { id: "g3", category: "plats", alt: "Brochettes de poulet grillées aux poivrons" },
  { id: "g4", category: "dattes", alt: "Pièce montée de dattes et fruits secs" },
  { id: "g5", category: "decors", alt: "Décor personnalisé avec prénom" },
  { id: "g6", category: "tradition", alt: "Mise en place traditionnelle, plateaux argentés" },
  { id: "g7", category: "lunch-box", alt: "Lunch box du jour en barquette" },
  { id: "g8", category: "plats", alt: "Couscous aux légumes en barquette" },
];
