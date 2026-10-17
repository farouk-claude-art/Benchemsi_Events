import Link from "next/link";
import { site } from "@/content/site";
import { InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="zellige-light mt-24 bg-night text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-ivory/70">{site.tagline}</p>
          <p className="mt-4 text-sm text-ivory/70">Traiteur à {site.city}, {site.country}</p>
        </div>
        <div>
          <p className="font-semibold text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="hover:text-gold">{p.display}</a>
              </li>
            ))}
            {site.email && (
              <li><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            )}
            {site.address && <li className="text-ivory/80">{site.address}</li>}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gold">Suivez-nous</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <InstagramIcon /> {site.instagramHandle}
              </a>
            </li>
            {site.social.facebook && (
              <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a></li>
            )}
            <li><Link href="/mentions-legales" className="hover:text-gold">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
