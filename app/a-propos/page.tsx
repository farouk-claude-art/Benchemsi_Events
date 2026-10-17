import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("À propos de Benchemsi Traiteur", "Benchemsi Traiteur, traiteur à Meknès : cuisine faite maison, buffets, décoration et lunch box.", "/a-propos");

const values = [
  ["Fait maison", "Des repas préparés avec soin, aux recettes généreuses."],
  ["Une touche de douceur", "Des présentations et des desserts qui font plaisir."],
  ["Tout au même endroit", "Traiteur, décoration et matériel avec un seul interlocuteur."],
];

export default function Page() {
  return (
    <>
      <PageHeader title="À propos" lead={site.tagline} />
      <Section narrow>
        <p className="text-lg">
          {site.name} est un traiteur basé à {site.city}. Nous préparons des buffets de naissance et d&apos;anniversaire, des repas et des plateaux, et proposons la décoration d&apos;espace ainsi que la production de matériel.
          {site.founded && ` ${site.founded}`}
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-night/10 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-royal">{t}</h2>
              <p className="mt-2 text-night/80">{d}</p>
            </li>
          ))}
        </ul>
      </Section>
      <FinalCta />
    </>
  );
}
