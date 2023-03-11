import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type TechskillContent = {
    readonly title: string;
    readonly icon: string;
    readonly skills: string[];
};

export type AuthorContent = {
    readonly name: string;
    readonly introduction: string;
    readonly href: string;
    readonly imageUrl: string;
};

export type ProjectContent = {
    readonly slug: string;
    readonly title: string;
    readonly href: string;
    readonly imageUrl: string;
    readonly date: string;
    readonly datetime: string;
    readonly category: string;
    readonly author: string;
    readonly portfolio: boolean;
    readonly stack: string[];
    readonly gallery: string[];
    content: string;
    source: MDXRemoteSerializeResult;
};

export type HeroContent = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string;
    readonly imageUrl: string;
    content: string;
    source: MDXRemoteSerializeResult;
};

export type Social = { name: string, link: string }[];

export type Config = {
    readonly base_url: string;
    readonly image: string;
    readonly author: string;
    readonly twitter_account: string;
    readonly link_cv_en: string;
    readonly link_cv_it: string;
    readonly site_keywords: string[];
    readonly social: Social;
};