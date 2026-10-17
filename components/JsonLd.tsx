export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // `<` échappé pour empêcher toute fermeture prématurée de la balise script.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
