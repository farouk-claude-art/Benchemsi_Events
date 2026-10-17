import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { QuoteForm } from "@/components/QuoteForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Demander un devis traiteur à Meknès", "Demandez un devis pour votre buffet, votre décoration ou vos lunch box à Meknès. Réponse par WhatsApp ou téléphone.", "/devis");

export default function Page() {
  return (
    <>
      <PageHeader title="Demander un devis" lead="Quelques informations suffisent : nous vous répondons rapidement." />
      <Section narrow><QuoteForm /></Section>
    </>
  );
}
