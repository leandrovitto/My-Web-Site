import { ProjectContent } from "@/@types";

export type PortfolioProject = Pick<
  ProjectContent,
  "slug" | "title" | "date" | "category" | "content" | "portfolio"
> & {
  imageUrl?: string;
  href?: string;
  gallery?: string[];
  stack?: string[];
  outcome?: string;
  featured?: boolean;
};

export function normalizeProject(project: ProjectContent): PortfolioProject {
  const { imageUrl, href, gallery, stack, outcome, featured, source, ...required } = project;

  return {
    ...required,
    gallery: gallery ?? [],
    stack: stack ?? [],
    ...(imageUrl ? { imageUrl } : {}),
    ...(href && href !== "#" ? { href } : {}),
    ...(outcome ? { outcome } : {}),
    ...(featured === true ? { featured: true } : {}),
  };
}

export function getFeaturedProjects(
  projects: PortfolioProject[],
  limit = 3,
): PortfolioProject[] {
  return [...projects]
    .sort(
      (first, second) =>
        Number(second.featured === true) - Number(first.featured === true) ||
        Number(second.date) - Number(first.date),
    )
    .slice(0, limit);
}
