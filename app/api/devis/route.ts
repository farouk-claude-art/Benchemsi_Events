import { Resend } from "resend";
import { quoteSchema, quoteSummary } from "@/lib/quote";

export const runtime = "nodejs";

// Limitation simple en mémoire : 5 demandes par IP et par 10 minutes.
// (Par instance serveur ; suffisant pour un site vitrine, à remplacer par Upstash/KV si besoin.)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

const json = (body: unknown, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return json({ ok: false, error: "Trop de demandes. Réessayez dans quelques minutes." }, 429);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Requête invalide." }, 400);
  }

  // Honeypot rempli : on répond « ok » sans rien envoyer pour ne pas informer le robot.
  if (typeof payload === "object" && payload && "website" in payload && (payload as { website?: string }).website) {
    return json({ ok: true });
  }

  const parsed = quoteSchema.safeParse(payload);
  if (!parsed.success) return json({ ok: false, error: "Formulaire invalide." }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !to) {
    // L'envoi email n'est pas configuré : le client propose alors WhatsApp.
    return json({ ok: false, error: "L'envoi par email n'est pas disponible. Utilisez WhatsApp." }, 503);
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.QUOTE_FROM_EMAIL ?? "Benchemsi Traiteur <onboarding@resend.dev>",
    to,
    subject: `Demande de devis — ${parsed.data.name}`,
    text: quoteSummary(parsed.data),
  });
  if (error) return json({ ok: false, error: "L'envoi a échoué. Utilisez WhatsApp." }, 502);

  return json({ ok: true });
}
