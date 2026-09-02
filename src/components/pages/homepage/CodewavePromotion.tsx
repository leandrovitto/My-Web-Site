import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

export default function CodewavePromotion(): ReactElement {
  const { t } = useTranslation("home");

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-10">
      <div className="grid gap-6 border border-[var(--line)] bg-[var(--surface-raised)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{t("codewave.eyebrow")}</p>
          <h2 className="mt-3 font-mono text-2xl font-semibold tracking-tight">{t("codewave.title")}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{t("codewave.description")}</p>
        </div>
        <a href="https://codewave.dev" target="_blank" rel="noreferrer" aria-label={t("codewave.action_aria")} className="inline-flex w-fit border border-[var(--accent)] px-4 py-3 font-mono text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          {t("codewave.action")} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
