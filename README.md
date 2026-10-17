# Benchemsi Traiteur — site vitrine

Site mobile-first pour Benchemsi Traiteur (Meknès). Objectif : demandes de devis, appels et messages WhatsApp.

**Stack** : Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Motion (animations, `prefers-reduced-motion` respecté), React Hook Form + Zod. Les devis partent uniquement par WhatsApp (pas d'email, pas de backend). Pas de CMS, pas de réservation en ligne.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables utiles
npm run dev
```

Scripts : `npm run build`, `npm run lint`, `npm run typecheck`.

## Où modifier le contenu

| Fichier | Contenu |
| --- | --- |
| `content/site.ts` | **Source unique** : nom, téléphones, WhatsApp, adresse, email, horaires, réseaux. Un champ `undefined` est masqué sur le site. |
| `content/lunchbox.ts` | Menu de la semaine, formules, prix, jours de commande |
| `content/gallery.ts` | Photos (déposer les fichiers dans `public/photos`, renseigner `src`, `width`, `height`) |
| `content/reviews.ts` | Avis réels (section masquée tant que la liste est vide) |
| `content/faq.ts`, `content/services.ts` | FAQ (+ JSON-LD FAQPage) et services |

## Variables d'environnement

- `NEXT_PUBLIC_SITE_URL` : URL publique (facultatif sur Vercel, le domaine de production est utilisé par défaut).
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : active Plausible (événements : `whatsapp_click`, `call_click`, `quote_submit`).

## À confirmer / fournir par le client

- Adresse exacte (flyer : « N 82 Rue 8 Car ELAMAN 1 »), horaires, email, URL de la page Facebook.
- Logo HD (SVG) : le site utilise un titre typographique en attendant.
- 30–50 photos HD, formules et prix de la Lunch Box, zone de livraison, avis réels, signification de « Myadi » (non utilisé).
- Créer la fiche Google Business Profile, puis renseigner `mapsUrl`.

## Notes

- Le formulaire de devis ouvre WhatsApp avec un récapitulatif prérempli ; aucune donnée n'est stockée.
- Les contenus issus d'Instagram/Google Maps n'ont pas pu être récupérés automatiquement ; tout provient du brief et des captures.
