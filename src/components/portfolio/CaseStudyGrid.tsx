import { ReactElement, useMemo, useState } from "react";
import { PortfolioProject } from "@/lib/portfolio";
import CaseStudyCard from "./CaseStudyCard";

type CaseStudyGridProps = {
  projects: PortfolioProject[];
};

export default function CaseStudyGrid({ projects }: CaseStudyGridProps): ReactElement {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section aria-label="Project case studies">
      <div data-cy="project-filter" role="group" aria-label="Filter projects by category" className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = category === selectedCategory;
          return <button key={category} type="button" aria-pressed={selected} onClick={() => setSelectedCategory(category)} className={`border px-3 py-2 font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${selected ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--line)] bg-[var(--surface-raised)] text-[var(--ink)] hover:border-[var(--accent)]"}`}>{category}</button>;
        })}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => <CaseStudyCard key={project.slug} project={project} priority={index < 2} />)}
      </div>
    </section>
  );
}
