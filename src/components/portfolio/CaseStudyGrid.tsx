import { ReactElement, useMemo, useState } from "react";
import { PortfolioProject } from "@/lib/portfolio";
import CaseStudyCard from "./CaseStudyCard";
import SectionHeading from "./SectionHeading";
import useTranslation from "next-translate/useTranslation";

type CaseStudyGridProps = {
  projects: PortfolioProject[];
};

export default function CaseStudyGrid({ projects }: CaseStudyGridProps): ReactElement {
  const { t } = useTranslation("portfolio");
  const allLabel = t("filters.all") as string;
  const productProjects = useMemo(() => projects.filter((project) => !project.href?.includes("github.com")), [projects]);
  const codeProjects = useMemo(() => projects.filter((project) => project.href?.includes("github.com")), [projects]);
  const categories = useMemo(() => [allLabel, ...Array.from(new Set(projects.map((project) => project.category)))], [allLabel, projects]);
  const [selectedCategory, setSelectedCategory] = useState(allLabel);
  const visibleProjects = (group: PortfolioProject[]) => selectedCategory === allLabel ? group : group.filter((project) => project.category === selectedCategory);

  return (
    <section aria-label="Project case studies">
      <div data-cy="project-filter" role="group" aria-label="Filter projects by category" className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = category === selectedCategory;
          return <button key={category} type="button" aria-pressed={selected} onClick={() => setSelectedCategory(category)} className={`border px-3 py-2 font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${selected ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--line)] bg-[var(--surface-raised)] text-[var(--ink)] hover:border-[var(--accent)]"}`}>{category}</button>;
        })}
      </div>
      {codeProjects.length > 0 && <section data-cy="code-projects" className="border-t border-[var(--line)] pt-10">
        <SectionHeading eyebrow={t("groups.code.eyebrow")} title={t("groups.code.title")} description={t("groups.code.description")} />
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects(codeProjects).map((project) => <CaseStudyCard key={project.slug} project={project} />)}
        </div>
      </section>}
      {productProjects.length > 0 && <section data-cy="product-projects" className="mt-16 border-t border-[var(--line)] pt-10">
        <SectionHeading eyebrow={t("groups.products.eyebrow")} title={t("groups.products.title")} description={t("groups.products.description")} />
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects(productProjects).map((project, index) => <CaseStudyCard key={project.slug} project={project} priority={index < 2} />)}
        </div>
      </section>}
    </section>
  );
}
