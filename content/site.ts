/**
 * Source unique des informations de l'entreprise.
 * Un champ `undefined` n'est jamais affiché publiquement : le composant qui
 * l'utilise le masque. Remplir les champs au fur et à mesure.
 */
export const site = {
  name: "Benchemsi Traiteur",
  instagramName: "Benchemsi Events",
  tagline: "L'exception à chaque occasion.",
  city: "Meknès",
  country: "Maroc",
  description:
    "Traiteur à Meknès : buffets de naissance et d'anniversaire, décoration d'espace, location de matériel et lunch box faits maison.",

  phones: [
    { display: "06 64 90 88 06", tel: "+212664908806" },
    { display: "06 62 03 45 34", tel: "+212662034534" },
  ],
  // TODO: confirmer que ce numéro est bien sur WhatsApp.
  whatsapp: "212664908806",

  // TODO: adresse issue du flyer « N 82 Rue 8 Car ELAMAN 1 » — à confirmer avant affichage.
  address: undefined as string | undefined,
  email: undefined as string | undefined,
  // Ex. [{ days: "Lun – Sam", hours: "9h – 18h" }]
  hours: undefined as { days: string; hours: string }[] | undefined,
  // TODO: lien Google Maps / Google Business Profile quand la fiche existera.
  mapsUrl: undefined as string | undefined,
  // TODO: zone de livraison (Meknès seul ? Fès, Ifrane, Rabat ?).
  deliveryArea: undefined as string | undefined,
  // TODO: fondation / histoire de la maison.
  founded: undefined as string | undefined,

  social: {
    instagram: "https://www.instagram.com/benchemsi_events/",
    // TODO: URL exacte de la page Facebook « Benchemsi events ».
    facebook: undefined as string | undefined,
  },
  instagramHandle: "@benchemsi_events",
} as const;

export type Site = typeof site;

// Priorité : URL explicite, sinon domaine de production Vercel, sinon local.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000").replace(/\/$/, "");

export function whatsappLink(message = "Bonjour Benchemsi Traiteur, je souhaite un devis pour ..."): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = (index = 0) => `tel:${site.phones[index].tel}`;
