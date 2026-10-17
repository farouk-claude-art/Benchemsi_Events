"use client";

import Link from "next/link";
import { telLink, whatsappLink } from "@/content/site";
import { track } from "@/lib/analytics";
import { PhoneIcon, QuoteIcon, WhatsappIcon } from "./Icons";

/** Barre d'action collante en bas de l'écran (mobile) : Appeler · WhatsApp · Devis. */
export function ActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold";
  return (
    <nav
      aria-label="Actions rapides"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-night/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgb(11_22_48/0.3)] backdrop-blur md:hidden"
    >
      <a href={telLink()} onClick={() => track("call_click")} className={`${item} text-royal`}>
        <PhoneIcon /> Appeler
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click")}
        className={`${item} text-[#0e7a3f]`}
      >
        <WhatsappIcon /> WhatsApp
      </a>
      <Link href="/devis" className={`${item} bg-royal text-white`}>
        <QuoteIcon /> Devis
      </Link>
    </nav>
  );
}
