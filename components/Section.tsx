import type { ReactNode } from "react";

export function Section({ title, children, narrow = false, id }: { title?: string; children: ReactNode; narrow?: boolean; id?: string }) {
  return (
    <section id={id} className={`mx-auto px-4 py-12 md:py-16 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>
      {title && <h2 className="mb-8 font-serif text-3xl font-semibold text-royal md:text-4xl">{title}</h2>}
      {children}
    </section>
  );
}
