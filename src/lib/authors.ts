import { Lang } from "@/@types/lang.enum";
import { AuthorContent } from "@/@types";

import enAuthors from "../../content/authors/_en_authors";
import itAuthors from "../../content/authors/_it_authors";

export type Authors = { [key: string]: AuthorContent };

export const getAuthor = (lang: string = Lang.EN, slug: keyof Authors): AuthorContent => {
  let authors: Authors;

  if (lang === Lang.IT) {
    authors = itAuthors;
  } else {
    authors = enAuthors;
  }

  return authors[slug];
};