"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { categories, gallery, type GalleryCategory } from "@/content/gallery";
import { Photo } from "./Photo";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const shown = filter === "all" ? gallery : gallery.filter((g) => g.category === filter);
  const index = shown.findIndex((g) => g.id === openId);
  const current = index >= 0 ? shown[index] : null;

  const close = useCallback(() => {
    setOpenId(null);
    trigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpenId((id) => {
      const i = shown.findIndex((g) => g.id === id);
      return shown[(i + d + shown.length) % shown.length].id;
    }),
    [shown],
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [current, close, step]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active ? "border-royal bg-royal text-white" : "border-night/20 hover:border-royal"
    }`;

  return (
    <div>
      <div role="group" aria-label="Filtrer la galerie" className="flex flex-wrap gap-2">
        <button type="button" className={chip(filter === "all")} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          Tout
        </button>
        {categories.map((c) => (
          <button key={c.id} type="button" className={chip(filter === c.id)} aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {shown.map((g) => (
            <motion.li
              layout
              key={g.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="aspect-square overflow-hidden rounded-xl"
            >
              <button
                type="button"
                className="group block h-full w-full overflow-hidden text-left"
                aria-label={`Agrandir : ${g.alt}`}
                onClick={(e) => {
                  trigger.current = e.currentTarget;
                  setOpenId(g.id);
                }}
              >
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <Photo item={g} />
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl" onClick={(e) => e.stopPropagation()}>
              <Photo item={current} sizes="90vw" />
            </div>
            <button type="button" autoFocus onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-white">
              Fermer
            </button>
            {shown.length > 1 && (
              <>
                <button type="button" aria-label="Photo précédente" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white">
                  ‹
                </button>
                <button type="button" aria-label="Photo suivante" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white">
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
