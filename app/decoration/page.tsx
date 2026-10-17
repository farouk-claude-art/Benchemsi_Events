import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";
import { gallery } from "@/content/gallery";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Décoration d'événement et matériel à Meknès", "Décoration d'espace et production de matériel pour vos fêtes à Meknès : décors personnalisés, mise en place traditionnelle.", "/decoration");

export default function Page() {
  const photos = gallery.filter((g) => g.category === "decors" || g.category === "tradition");
  return (
    <>
      <PageHeader title="Décoration & matériel à Meknès" lead="Un décor soigné, pensé avec votre buffet." />
      <Section narrow>
        <h2 className="font-serif text-2xl font-semibold text-royal">Décoration d&apos;espace</h2>
        <p className="mt-3">Décor personnalisé (prénom, thème, couleurs), buffets sucrés et salés, mise en place traditionnelle pour votre salon.</p>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-royal">Production de matériel</h2>
        <p className="mt-3">Nous produisons le matériel nécessaire à la présentation de votre réception. Contactez-nous pour connaître les disponibilités.</p>
      </Section>
      <Section title="Ambiances">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((g) => (
            <div key={g.id} className="aspect-square overflow-hidden rounded-xl"><Photo item={g} /></div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
