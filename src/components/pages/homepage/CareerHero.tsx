import CvDownload from "@/components/portfolio/CvDownload";
import { motion, useReducedMotion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

export default function CareerHero(): ReactElement {
  const { t } = useTranslation("home");
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.45fr_0.55fr] lg:px-10 lg:py-28">
        <div>
          <motion.p {...enter(0)} className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1 {...enter(0.08)} className="mt-5 max-w-4xl font-mono text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </motion.h1>
          <motion.div {...enter(0.16)} className="mt-7 max-w-2xl space-y-4 font-mono text-sm leading-7 text-[var(--muted)] sm:text-sm sm:leading-7">
            <p>{t("hero.description_primary")}</p>
            <p>{t("hero.description_secondary")}</p>
          </motion.div>
          <motion.div {...enter(0.24)} className="mt-9">
            <CvDownload />
          </motion.div>
        </div>
        <motion.aside {...enter(0.2)} className="self-end border-l border-[var(--accent)] pl-5 font-mono text-lg font-semibold leading-7 tracking-[-0.03em] text-[var(--ink)] lg:mb-1">
          <p>{t("hero.note_primary")}</p>
          <p className="text-[var(--accent)]">{t("hero.note_secondary")}</p>
        </motion.aside>
      </div>
    </section>
  );
}
