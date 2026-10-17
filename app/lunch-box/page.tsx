import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { LunchMenu } from "@/components/LunchMenu";
import { FinalCta } from "@/components/FinalCta";
import { WhatsappButton } from "@/components/CtaButtons";
import { lunchbox } from "@/content/lunchbox";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Lunch box à Meknès", "Benchemsi Lunch Box : le repas du jour en barquette, fait maison, pour les écoles, les bureaux et les particuliers à Meknès.", "/lunch-box");

export default function Page() {
  const info = [
    ["Formules et prix", lunchbox.pricing],
    ["Jours de commande", lunchbox.orderDays],
    ["Retrait / livraison", lunchbox.delivery],
    ["Commande minimale", lunchbox.minimumOrder],
  ].filter((x): x is [string, string] => Boolean(x[1]));

  return (
    <>
      <PageHeader title="Benchemsi Lunch Box à Meknès" lead="Le repas du jour en barquette : des recettes généreuses, faites maison, avec une touche de douceur." />
      {lunchbox.menu.length > 0 && (
        <Section title="Au menu">
          <LunchMenu />
        </Section>
      )}
      <Section narrow>
        <p>Pour les écoles, les bureaux et les particuliers : commandez la Lunch Box du jour.</p>
        {info.length > 0 && (
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {info.map(([k, v]) => (
              <div key={k} className="rounded-xl border border-night/10 bg-white p-4">
                <dt className="text-sm font-semibold text-royal">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <WhatsappButton message="Bonjour Benchemsi Traiteur, je souhaite commander la Lunch Box." label="Commander via WhatsApp" className="mt-8" />
      </Section>
      <FinalCta />
    </>
  );
}
