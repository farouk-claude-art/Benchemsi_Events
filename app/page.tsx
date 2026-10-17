import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { LunchMenu } from "@/components/LunchMenu";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { WhatsappButton } from "@/components/CtaButtons";
import { gallery } from "@/content/gallery";
import { lunchbox } from "@/content/lunchbox";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";

const trust = ["Fait maison", "Décoration & matériel possibles", `Sur ${site.city}`];
const steps = [
  ["Vous nous contactez", "Par WhatsApp, téléphone ou formulaire."],
  ["Devis", "Nous vous proposons un devis adapté."],
  ["Préparation", "Tout est préparé avec soin."],
  ["Livraison / installation", "Nous vous livrons et installons votre buffet."],
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="border-b border-night/10 bg-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-4 py-4 text-sm font-semibold text-royal">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2"><span aria-hidden className="text-gold">◆</span>{t}</li>
          ))}
        </ul>
      </div>

      <Section title="Nos services">
        <ServiceCards />
      </Section>

      {lunchbox.menu.length > 0 && (
        <section className="zellige bg-white/60">
          <Section title="La Lunch Box de la semaine">
            <LunchMenu />
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsappButton message="Bonjour Benchemsi Traiteur, je souhaite commander la Lunch Box." label="Commander via WhatsApp" />
              <Link href="/lunch-box" className="btn btn-ghost text-royal">Découvrir la Lunch Box</Link>
            </div>
          </Section>
        </section>
      )}

      <Section title="En images">
        <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 8).map((g) => (
            <StaggerItem key={g.id} className="aspect-square overflow-hidden rounded-xl">
              <Photo item={g} sizes="(min-width: 768px) 25vw, 50vw" />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/galerie" className="btn btn-primary">Voir la galerie</Link>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-royal">
            Instagram {site.instagramHandle}
          </a>
        </div>
      </Section>

      <Section title="Comment ça marche">
        <Stagger className="grid gap-5 md:grid-cols-4">
          {steps.map(([title, text], i) => (
            <StaggerItem key={title} className="rounded-2xl border border-night/10 bg-white p-6">
              <span className="font-serif text-4xl text-gold">{i + 1}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-night/75">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {reviews.length > 0 && (
        <Section title="Ils nous ont fait confiance">
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Reveal key={r.author}>
                <figure className="rounded-2xl border border-night/10 bg-white p-6">
                  <blockquote>« {r.text} »</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-royal">{r.author}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section title="Questions fréquentes" narrow>
        <FaqList />
      </Section>

      <FinalCta />
    </>
  );
}
