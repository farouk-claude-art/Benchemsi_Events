import { Intro } from "./Motion";
import { Ornament } from "./Ornament";

export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <section className="zellige border-b border-night/10 bg-white/50">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center md:py-20">
        <Intro>
          <h1 className="font-serif text-4xl font-semibold text-royal md:text-5xl">{title}</h1>
          <Ornament className="mt-5" />
          {lead && <p className="mt-5 text-lg text-night/80">{lead}</p>}
        </Intro>
      </div>
    </section>
  );
}
