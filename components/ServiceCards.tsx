import Link from "next/link";
import { services } from "@/content/services";
import { Stagger, StaggerItem } from "./Motion";

export function ServiceCards() {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <StaggerItem key={s.slug}>
          <Link href={s.href} className="zellige group flex h-full flex-col rounded-2xl border border-night/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl">
            <h3 className="font-serif text-2xl font-semibold text-royal">{s.title}</h3>
            <p className="mt-3 flex-1 text-night/80">{s.short}</p>
            <span className="mt-5 text-sm font-semibold text-royal group-hover:underline">En savoir plus →</span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
