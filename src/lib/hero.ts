import { HeroContent } from "@/@types";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export function getProjectsDirectory(lang = "") {
  return join(process.cwd(), `/content/hero/_${lang}`);
}

export function getHeroBySlug(slug = "", lang = "") {
  const realSlug = slug.replace(/\.mdx$/, "");

  const fullPath = join(getProjectsDirectory(lang), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = data as HeroContent;
  items.content = content;

  // Validate slug string
  if (data.slug !== realSlug) {
    throw new Error("slug field not match with the path of its content source");
  }

  return items;
}