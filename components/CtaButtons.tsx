"use client";

import { site, telLink, whatsappLink } from "@/content/site";
import { track } from "@/lib/analytics";
import { PhoneIcon, QuoteIcon, WhatsappIcon } from "./Icons";
import Link from "next/link";

export function WhatsappButton({ message, label = "WhatsApp", className = "" }: { message?: string; label?: string; className?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click")}
      className={`btn btn-whatsapp ${className}`}
    >
      <WhatsappIcon /> {label}
    </a>
  );
}

export function QuoteButton({ label = "Demander un devis", className = "" }: { label?: string; className?: string }) {
  return (
    <Link href="/devis" className={`btn btn-primary ${className}`}>
      <QuoteIcon /> {label}
    </Link>
  );
}

export function CallButton({ index = 0, className = "" }: { index?: number; className?: string }) {
  const phone = site.phones[index];
  return (
    <a href={telLink(index)} onClick={() => track("call_click")} className={`btn btn-ghost ${className}`}>
      <PhoneIcon /> {phone.display}
    </a>
  );
}
