import { z } from "zod";

export const eventTypes = [
  { value: "naissance", label: "Naissance" },
  { value: "anniversaire", label: "Anniversaire" },
  { value: "fiancailles", label: "Fiançailles" },
  { value: "lunch-box", label: "Lunch box" },
  { value: "autre", label: "Autre" },
] as const;

export const serviceOptions = [
  { value: "traiteur", label: "Traiteur" },
  { value: "decoration", label: "Décoration" },
  { value: "materiel", label: "Matériel" },
] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Veuillez indiquer votre nom.").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s().-]{7,19}$/, "Veuillez indiquer un numéro de téléphone valide."),
  eventType: z.enum(["naissance", "anniversaire", "fiancailles", "lunch-box", "autre"], {
    error: "Veuillez choisir un type d'événement.",
  }),
  date: z.string().max(40).optional(),
  guests: z.string().max(10).optional(),
  place: z.string().trim().max(120).optional(),
  services: z.array(z.enum(["traiteur", "decoration", "materiel"])).default([]),
  message: z.string().trim().max(1500).optional(),
  consent: z.literal(true, { error: "Votre accord est nécessaire pour traiter votre demande." }),
  // honeypot : doit rester vide
  website: z.string().max(0).optional(),
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type QuoteData = z.output<typeof quoteSchema>;

const eventLabel = (v: string) => eventTypes.find((e) => e.value === v)?.label ?? v;
const serviceLabel = (v: string) => serviceOptions.find((s) => s.value === v)?.label ?? v;

export function quoteSummary(d: Pick<QuoteData, "name" | "phone" | "eventType" | "date" | "guests" | "place" | "services" | "message">) {
  const lines = [
    "Bonjour Benchemsi Traiteur, je souhaite un devis.",
    `Nom : ${d.name}`,
    `Téléphone : ${d.phone}`,
    `Événement : ${eventLabel(d.eventType)}`,
    d.date && `Date : ${d.date}`,
    d.guests && `Nombre de personnes : ${d.guests}`,
    d.place && `Lieu : ${d.place}`,
    d.services?.length && `Services : ${d.services.map(serviceLabel).join(", ")}`,
    d.message && `Message : ${d.message}`,
  ];
  return lines.filter(Boolean).join("\n");
}
