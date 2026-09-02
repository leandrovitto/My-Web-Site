import Meta from "@/components/layouts/meta/Meta";
import SiteShell from "@/components/layouts/SiteShell";
import ExperienceAndEducation from "@/components/pages/about/ExperienceAndEducation";
import TechSkills from "@/components/pages/about/TechSkills";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { Routes } from "@/routes";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("about");
  const introduction = t("introduction.paragraphs", {}, { returnObjects: true }) as string[];
  const personalItems = t("personal.items", {}, { returnObjects: true }) as { title: string; subtitle: string; paragraphs: string[] }[];

  return (
    <>
      <Meta title={t("title")} url={Routes.about} />
      <SiteShell>
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 border-b border-[var(--line)] pb-12 lg:grid-cols-[1fr_220px] lg:items-end">
            <SectionHeading
              as="h1"
              eyebrow={t("hero.eyebrow")}
              title={t("title")}
              description={t("hero.description")}
            />
            <figure className="relative mx-auto aspect-square w-44 border border-[var(--line)] bg-[var(--surface-raised)] p-2 lg:mx-0 lg:w-full">
              <Image
                src="https://cdn.codewave.dev/public/content/avatar_1.png"
                alt={t("hero.image_alt")}
                fill
                sizes="(min-width: 1024px) 220px, 176px"
                className="object-cover p-2 grayscale transition duration-300 hover:grayscale-0"
              />
              <figcaption className="absolute bottom-0 left-0 bg-[var(--ink)] px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.1em] text-[var(--surface-raised)]">
                LV / PROFILE
              </figcaption>
            </figure>
          </div>
          <section className="max-w-4xl border-b border-[var(--line)] py-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{t("introduction.eyebrow")}</p>
            <div className="mt-5 space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
          <ExperienceAndEducation />
          <TechSkills />
          <section className="my-16 border-y border-[var(--line)] bg-[var(--surface-raised)] p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{t("codewave.eyebrow")}</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-mono text-2xl font-semibold tracking-tight">{t("codewave.title")}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{t("codewave.description")}</p>
              </div>
              <a href="https://codewave.dev" target="_blank" rel="noreferrer" className="inline-flex w-fit border border-[var(--accent)] px-4 py-3 font-mono text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" aria-label={t("codewave.action_aria")}>
                {t("codewave.action")} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
          <section className="border-t border-[var(--line)] pt-10">
            <h2 className="font-mono text-xl font-semibold">
              {t("personal.title")}
            </h2>
            <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {personalItems.map((item) => <article key={item.title} className="bg-[var(--surface)] p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{item.subtitle}</p>
                <h3 className="mt-3 font-mono text-xl font-semibold">{item.title}</h3>
                <div className="mt-4 space-y-4 leading-7 text-[var(--muted)]">
                  {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>)}
            </div>
          </section>
        </section>
      </SiteShell>
    </>
  );
}
