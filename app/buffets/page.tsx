import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { gallery } from "@/content/gallery";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Buffet de naissance et d'anniversaire à Meknès", "Buffets de naissance, d'anniversaire et pièces montées de dattes et fruits secs à Meknès, personnalisés à votre thème.", "/buffets");

const blocks = [
  { title: "Buffet de naissance à Meknès", text: "Un buffet salé et sucré pour célébrer l'arrivée de votre bébé, préparé avec soin." },
  { title: "Buffet d'anniversaire à Meknès", text: "Des tables généreuses, adaptées à l'âge et au thème de la fête." },
  { title: "Dattes & fruits secs", text: "Pièces montées de dattes et de fruits secs, pour des présentations qui font leur effet." },
];

export default function Page() {
  const photos = gallery.filter((g) => g.category === "buffets" || g.category === "dattes");
  return (
    <>
      <PageHeader title="Buffets à Meknès" lead="Personnalisez le thème, les couleurs et le prénom : nous nous occupons du reste." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-night/10 bg-white p-6">
                <h2 className="font-serif text-2xl font-semibold text-royal">{b.title}</h2>
                <p className="mt-3">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section title="Quelques réalisations">
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
