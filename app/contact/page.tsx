import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CallButton, QuoteButton, WhatsappButton } from "@/components/CtaButtons";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact", "Contactez Benchemsi Traiteur à Meknès par téléphone, WhatsApp ou Instagram.", "/contact");

export default function Page() {
  return (
    <>
      <PageHeader title="Contact" lead={`Traiteur à ${site.city}, ${site.country}.`} />
      <Section narrow>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsappButton />
          {site.phones.map((_, i) => <CallButton key={i} index={i} className="text-royal" />)}
          <QuoteButton />
        </div>
        <dl className="mt-10 space-y-6">
          {site.address && <div><dt className="font-semibold text-royal">Adresse</dt><dd>{site.address}</dd></div>}
          {site.email && <div><dt className="font-semibold text-royal">Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>}
          {site.hours && (
            <div>
              <dt className="font-semibold text-royal">Horaires</dt>
              <dd>{site.hours.map((h) => <p key={h.days}>{h.days} : {h.hours}</p>)}</dd>
            </div>
          )}
          {site.deliveryArea && <div><dt className="font-semibold text-royal">Zone de service</dt><dd>{site.deliveryArea}</dd></div>}
          <div>
            <dt className="font-semibold text-royal">Instagram</dt>
            <dd><a className="underline" href={site.social.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></dd>
          </div>
        </dl>
        {site.mapsUrl && (
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8 text-royal">Voir sur Google Maps</a>
        )}
      </Section>
    </>
  );
}
