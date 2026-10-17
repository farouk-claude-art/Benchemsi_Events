"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";
import { QuoteButton, WhatsappButton } from "./CtaButtons";
import { Intro } from "./Motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal via-royal to-night text-white">
      <div aria-hidden className="zellige-light absolute inset-0" />
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] text-gold/25"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <rect x="20" y="20" width="60" height="60" />
        <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="14" />
      </motion.svg>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <Intro>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Traiteur à {site.city}</p>
        </Intro>
        <Intro delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
            {site.name}
            <span className="mt-2 block text-3xl font-medium italic text-ivory/90 md:text-4xl">{site.tagline}</span>
          </h1>
        </Intro>
        <Intro delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Buffets de naissance et d&apos;anniversaire, décoration, lunch box faits maison.
          </p>
        </Intro>
        <Intro delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <QuoteButton className="!bg-white !text-royal hover:!bg-ivory" />
          <WhatsappButton />
        </Intro>
      </div>
    </section>
  );
}
