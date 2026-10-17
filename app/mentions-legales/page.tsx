import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = { ...pageMeta("Mentions légales", "Mentions légales et protection des données de Benchemsi Traiteur.", "/mentions-legales"), robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <Section narrow>
        <div className="space-y-6">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-royal">Éditeur du site</h2>
            <p className="mt-2">{site.name}, {site.city}, {site.country}.</p>
            <p>Téléphone : {site.phones.map((p) => p.display).join(" / ")}</p>
            {site.email && <p>Email : {site.email}</p>}
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-royal">Données personnelles</h2>
            <p className="mt-2">
              Le formulaire de devis ne stocke aucune donnée : les informations saisies (nom, téléphone, détails de l&apos;événement) sont transmises à Benchemsi Traiteur par WhatsApp, à votre initiative, uniquement pour répondre à votre demande. Conformément à la loi 09-08, vous pouvez demander l&apos;accès, la rectification ou la suppression de ces informations en nous contactant.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
