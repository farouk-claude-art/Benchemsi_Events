import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { FinalCta } from "@/components/FinalCta";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Services traiteur à Meknès", "Buffets de naissance et d'anniversaire, lunch box, décoration d'espace et location de matériel à Meknès.", "/services");

export default function Page() {
  return (
    <>
      <PageHeader title="Nos services de traiteur à Meknès" lead="Un seul interlocuteur pour la table, le décor et le matériel." />
      <Section><ServiceCards /></Section>
      <FinalCta />
    </>
  );
}
