import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Galerie photos", "Buffets, plats, dattes et fruits secs, décors et lunch box : découvrez les réalisations de Benchemsi Traiteur à Meknès.", "/galerie");

export default function Page() {
  return (
    <>
      <PageHeader title="Galerie" lead="Nos buffets, nos plats et nos décors." />
      <Section>
        <Gallery />
        <p className="mt-10 text-center">
          Plus de photos sur Instagram :{" "}
          <a className="font-semibold text-royal underline" href={site.social.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </p>
      </Section>
    </>
  );
}
