import { faq } from "@/content/faq";
import { JsonLd } from "./JsonLd";

export function FaqList() {
  return (
    <>
      <div className="divide-y divide-night/10 rounded-2xl border border-night/10 bg-white">
        {faq.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
              {f.q}
              <span aria-hidden className="text-2xl text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-night/80">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
