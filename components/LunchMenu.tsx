import { lunchbox } from "@/content/lunchbox";
import { Reveal } from "./Motion";

export function LunchMenu() {
  if (lunchbox.menu.length === 0) return null;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {lunchbox.menu.map((d, i) => (
        <Reveal key={d.day} delay={i * 0.08}>
          <div className="rounded-2xl border border-gold/60 bg-white p-6">
            <p className="font-serif text-2xl font-semibold text-royal">{d.day}</p>
            <ul className="mt-3 space-y-1.5">
              {d.dishes.map((dish) => (
                <li key={dish} className="flex gap-2"><span aria-hidden className="text-gold">◆</span>{dish}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
