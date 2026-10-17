"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventTypes, quoteSchema, quoteSummary, serviceOptions, type QuoteData, type QuoteInput } from "@/lib/quote";
import { whatsappLink } from "@/content/site";
import { track } from "@/lib/analytics";
import { WhatsappIcon } from "./Icons";

const field = "mt-1 w-full rounded-lg border border-night/20 bg-white px-3 py-3 text-base focus:border-royal";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit, getValues, trigger, formState: { errors } } = useForm<QuoteInput, unknown, QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [] },
  });

  async function onSubmit(data: QuoteData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };
      if (!body.ok) throw new Error(body.error);
      track("quote_submit");
      setStatus("sent");
    } catch (e) {
      setErrorMsg(e instanceof Error && e.message ? e.message : "L'envoi a échoué. Utilisez WhatsApp.");
      setStatus("error");
    }
  }

  async function sendWhatsapp() {
    // Même validation que l'envoi email, sauf le consentement (aucune donnée n'est stockée par le site).
    const ok = await trigger(["name", "phone", "eventType"]);
    if (!ok) return;
    const v = getValues();
    track("whatsapp_click");
    window.open(whatsappLink(quoteSummary({ ...v, services: v.services ?? [] } as QuoteData)), "_blank", "noopener,noreferrer");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-gold bg-white p-8 text-center">
        <p className="font-serif text-3xl text-royal">Merci !</p>
        <p className="mt-3">Votre demande a bien été envoyée. Nous vous répondrons très vite.</p>
      </div>
    );
  }

  const err = (m?: string) => m && <p role="alert" className="mt-1 text-sm text-red-700">{m}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 rounded-2xl border border-night/10 bg-white p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium">
          Prénom et nom *
          <input {...register("name")} autoComplete="name" className={field} aria-invalid={!!errors.name} />
          {err(errors.name?.message)}
        </label>
        <label className="block text-sm font-medium">
          Téléphone *
          <input {...register("phone")} type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} />
          {err(errors.phone?.message)}
        </label>
        <label className="block text-sm font-medium">
          Type d&apos;événement *
          <select {...register("eventType")} defaultValue="" className={field} aria-invalid={!!errors.eventType}>
            <option value="" disabled>Choisir…</option>
            {eventTypes.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
          </select>
          {err(errors.eventType?.message)}
        </label>
        <label className="block text-sm font-medium">
          Date
          <input {...register("date")} type="date" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Nombre de personnes
          <input {...register("guests")} inputMode="numeric" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Lieu (ville / quartier)
          <input {...register("place")} className={field} />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">Services souhaités</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {serviceOptions.map((s) => (
            <label key={s.value} className="flex items-center gap-2">
              <input type="checkbox" value={s.value} {...register("services")} className="h-5 w-5 accent-royal" /> {s.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium">
        Message
        <textarea {...register("message")} rows={3} className={field} />
      </label>

      {/* Honeypot : invisible pour les humains */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>Ne pas remplir<input {...register("website")} tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" {...register("consent")} className="mt-1 h-5 w-5 accent-royal" />
        <span>
          J&apos;accepte que mes informations soient utilisées pour répondre à ma demande de devis (loi 09-08). *
          {err(errors.consent?.message)}
        </span>
      </label>

      {status === "error" && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{errorMsg}</p>}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary flex-1 disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        </button>
        <button type="button" onClick={sendWhatsapp} className="btn btn-whatsapp flex-1">
          <WhatsappIcon /> Envoyer sur WhatsApp
        </button>
      </div>
    </form>
  );
}
