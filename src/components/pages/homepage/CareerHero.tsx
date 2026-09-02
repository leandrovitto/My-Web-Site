import CvDownload from "@/components/portfolio/CvDownload";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

export default function CareerHero(): ReactElement {
  const { t } = useTranslation("home");

  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.45fr_0.55fr] lg:px-10 lg:py-28">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-5 max-w-4xl font-mono text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <div className="mt-7 max-w-2xl space-y-4 font-mono text-sm leading-7 text-[var(--muted)] sm:text-sm sm:leading-7">
            <p>{t("hero.description_primary")}</p>
            <p>{t("hero.description_secondary")}</p>
          </div>
          <div className="mt-9">
            <CvDownload />
          </div>
        </div>
        <aside className="self-end border-l border-[var(--accent)] pl-5 font-mono text-lg font-semibold leading-7 tracking-[-0.03em] text-[var(--ink)] lg:mb-1">
          <p>{t("hero.note_primary")}</p>
          <p className="text-[var(--accent)]">{t("hero.note_secondary")}</p>
        </aside>
      </div>
    </section>
  );
}
