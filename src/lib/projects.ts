import { ProjectContent } from "@/@types";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

//Projects API
export function getProjectsDirectory(lang = "") {
  return join(process.cwd(), `/content/projects/_${lang}`);
}

export function getProjectsSlugs(lang = "") {
  return fs.readdirSync(getProjectsDirectory(lang));
}

export function getProjectsBySlug(slug = "", lang = "") {
  const realSlug = slug.replace(/\.mdx$/, "");

  const fullPath = join(getProjectsDirectory(lang), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = data as ProjectContent;
  items.content = content;

  // Validate slug string
  if (data.slug !== realSlug) {
    throw new Error("slug field not match with the path of its content source");
  }

  return items;
}

export function getAllProjects(lang = ""): ProjectContent[] {
  const slugs = getProjectsSlugs(lang);

  const projects = slugs
    .filter((it) => it.endsWith(".mdx"))
    .map((slug) => getProjectsBySlug(slug, lang))
    .sort((projects1, projects2) => (projects1.date > projects2.date ? -1 : 1));
  return projects;
}

/* 
let projectCache: ProjectContent[];

export function fetchProjectContent(): ProjectContent[] {
  if (projectCache) {
    return projectCache;
  } 

  // Sort Projects by date
  projectCache = allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return projectCache;
}
 */