import Image from "next/image";
import { ReactElement } from "react";
import { PortfolioProject } from "@/lib/portfolio";

type CaseStudyCardProps = {
  project: PortfolioProject;
  priority?: boolean;
};

export default function CaseStudyCard({ project, priority = false }: CaseStudyCardProps): ReactElement {
  return (
    <article data-cy="case-study" className="flex h-full flex-col border border-[var(--line)] bg-[var(--surface-raised)]">
      {project.imageUrl && (
        <div className="relative aspect-[16/9] border-b border-[var(--line)]">
          <Image src={project.imageUrl} alt="" fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
          <time dateTime={String(project.date)}>{project.date}</time>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>
        <h3 className="mt-4 font-mono text-xl font-semibold text-[var(--ink)]">{project.title}</h3>
        {project.outcome && <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.outcome}</p>}
        {project.stack && project.stack.length > 0 && (
          <ul aria-label={`${project.title} stack`} className="mt-5 flex list-none flex-wrap gap-2 !ml-0">
            {project.stack.map((technology) => <li key={technology} className="border border-[var(--line)] px-2 py-1 font-mono text-xs text-[var(--muted)]">{technology}</li>)}
          </ul>
        )}
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit font-mono text-sm font-semibold text-[var(--accent)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" aria-label={`Visit ${project.title}`}>
            Visit project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
