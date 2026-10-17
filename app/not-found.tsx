import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl text-royal">Page introuvable</h1>
      <p className="mt-4">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="btn btn-primary mt-8">Retour à l&apos;accueil</Link>
    </div>
  );
}
