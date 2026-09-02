import SectionHeading from "@/components/portfolio/SectionHeading";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

type Principle = { title: string; description: string };

export default function WorkingPrinciples(): ReactElement {
  const { t } = useTranslation("home");
  const principles = t("principles.items", {}, { returnObjects: true }) as Principle[];

  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={t("principles.eyebrow")} title={t("principles.title")} />
        <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle.title} className="bg-[var(--surface-raised)] p-6">
              <h3 className="font-mono text-lg font-semibold">{principle.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
