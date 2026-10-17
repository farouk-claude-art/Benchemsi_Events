import { site } from "@/content/site";
import { CallButton, QuoteButton, WhatsappButton } from "./CtaButtons";
import { Reveal } from "./Motion";

export function FinalCta() {
  return (
    <section className="zellige-light mx-4 mt-8 overflow-hidden rounded-3xl bg-royal text-white md:mx-auto md:max-w-6xl">
      <Reveal className="px-6 py-14 text-center md:py-20">
        <h2 className="font-serif text-3xl font-semibold md:text-5xl">Parlons de votre événement</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Dites-nous la date, le lieu et le nombre de personnes : nous vous préparons un devis pour votre occasion à {site.city}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <QuoteButton className="!bg-white !text-royal hover:!bg-ivory" />
          <WhatsappButton />
          <CallButton />
        </div>
      </Reveal>
    </section>
  );
}
