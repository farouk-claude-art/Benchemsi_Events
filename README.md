# Benchemsi Traiteur — site vitrine

Site mobile-first pour Benchemsi Traiteur (Meknès). Objectif : demandes de devis, appels et messages WhatsApp.

**Stack** : Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Motion (animations, `prefers-reduced-motion` respecté), React Hook Form + Zod, Resend (email optionnel). Pas de CMS, pas de réservation en ligne.

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

- `NEXT_PUBLIC_SITE_URL` : URL publique (sitemap, Open Graph, JSON-LD).
- `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL` : envoi des devis par email. Sans ces variables, le formulaire renvoie un message invitant à utiliser WhatsApp.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : active Plausible (événements : `whatsapp_click`, `call_click`, `quote_submit`).

## À confirmer / fournir par le client

- Numéro WhatsApp (`+212 664 908 806` utilisé pour l'instant), adresse exacte (flyer : « N 82 Rue 8 Car ELAMAN 1 »), horaires, email, URL de la page Facebook.
- Logo HD (SVG) : le site utilise un titre typographique en attendant.
- 30–50 photos HD, formules et prix de la Lunch Box, zone de livraison, avis réels, signification de « Myadi » (non utilisé).
- Créer la fiche Google Business Profile, puis renseigner `mapsUrl`.

## Notes

- Anti-spam du formulaire : honeypot + limitation à 5 demandes / 10 min / IP (en mémoire, par instance).
- Les contenus issus d'Instagram/Google Maps n'ont pas pu être récupérés automatiquement ; tout provient du brief et des captures.
