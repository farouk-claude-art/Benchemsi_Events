"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventTypes, quoteSchema, quoteSummary, serviceOptions, type QuoteData, type QuoteInput } from "@/lib/quote";
import { whatsappLink } from "@/content/site";
import { track } from "@/lib/analytics";
import { WhatsappIcon } from "./Icons";

const field = "mt-1 w-full rounded-lg border border-night/20 bg-white px-3 py-3 text-base focus:border-royal";

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteInput, unknown, QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [] },
  });

  // Aucune donnée n'est stockée : la demande part directement vers WhatsApp.
  function onSubmit(data: QuoteData) {
    track("quote_submit");
    track("whatsapp_click");
    window.open(whatsappLink(quoteSummary(data)), "_blank", "noopener,noreferrer");
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

      <button type="submit" className="btn btn-whatsapp w-full">
        <WhatsappIcon /> Envoyer ma demande sur WhatsApp
      </button>
      <p className="text-center text-xs text-night/60">
        Votre demande s&apos;ouvre dans WhatsApp, prête à être envoyée. Rien n&apos;est enregistré sur ce site.
      </p>
    </form>
  );
}
