export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "buffets",
    href: "/buffets",
    title: "Buffets de naissance & d'anniversaire",
    short: "Buffets salés et sucrés, pièces montées de dattes et fruits secs, personnalisés à votre thème.",
    items: ["Buffet de naissance", "Buffet d'anniversaire", "Dattes & fruits secs"],
  },
  {
    slug: "lunch-box",
    href: "/lunch-box",
    title: "Benchemsi Lunch Box",
    short: "Le repas du jour en barquette, fait maison, pour les écoles, les bureaux et les particuliers.",
    items: ["Menu du jour", "Lunch box scolaire"],
  },
  {
    slug: "decoration",
    href: "/decoration",
    title: "Décoration & matériel",
    short: "Décoration d'espace et production de matériel pour une réception qui vous ressemble.",
    items: ["Décoration d'espace", "Production de matériel", "Mise en place traditionnelle"],
  },
  {
    slug: "traiteur",
    href: "/devis",
    title: "Traiteur sur mesure",
    short: "Repas, plateaux et brochettes préparés avec soin pour tous vos événements.",
    items: ["Repas en barquette", "Plateaux", "Brochettes grillées"],
  },
];
