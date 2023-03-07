import { Lang } from "@/@types/lang.enum";
import englishAuthors from "../../content/authors/_en_authors";
import { AuthorContent } from "@/@types";

//Projects API
export type Authors = { [key: string]: AuthorContent };

export const getAuthor = (lang: string = Lang.EN, slug: keyof Authors): AuthorContent => {
  let authors: Authors;

  if (lang === Lang.IT) {
    authors = englishAuthors;
  } else {
    authors = englishAuthors;
  }

  return authors[slug];
};