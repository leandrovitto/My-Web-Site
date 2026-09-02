import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { PortfolioProject } from "@/lib/portfolio";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ReactElement } from "react";

type FeaturedWorkProps = { projects: PortfolioProject[] };

export default function FeaturedWork({ projects }: FeaturedWorkProps): ReactElement {
  const { t } = useTranslation("home");

  return (
    <section data-cy="featured-work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
      <SectionHeading eyebrow={t("featured.eyebrow")} title={t("featured.title")} description={t("featured.description")} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => <CaseStudyCard key={project.slug} project={project} priority={index === 0} />)}
      </div>
      <Link href="/portfolio" className="mt-8 inline-flex font-mono text-sm font-semibold text-[var(--accent)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
        {t("featured.action")}
      </Link>
    </section>
  );
}
