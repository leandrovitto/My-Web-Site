import Meta from '@/components/layouts/meta/Meta';
import Portfolio from '@/components/pages/portfolio/Portfolio';
import Projects from '@/components/pages/portfolio/Projects';
import WakaTime from '@/components/pages/portfolio/WakaTime';
import { getAllProjects } from '@/lib/projects';
import { Routes } from '@/routes';
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import useTranslation from 'next-translate/useTranslation';
import DefaultLayout from '../layouts/DefaultLayout';
import { ProjectContent } from '@/@types';

type Props = {
  projects: ProjectContent[];
  portfolio: ProjectContent[];
};

export default function Home({ projects, portfolio }: Props) {
  const { t } = useTranslation('portfolio')

  return (
    <>
      <Meta title={t("title")} url={Routes.portfolio} />
      <DefaultLayout>
        <Projects projects={projects} />
        <Portfolio portfolio={portfolio} />
        <WakaTime />
      </DefaultLayout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  let projects = getAllProjects(locale);

  projects.forEach(async (p) => {
    const mdxSource = await serialize(p.content)
    p.source = mdxSource;
  })

  const portfolio = projects.filter((p) => p.portfolio === true);
  projects = projects.filter((p) => p.portfolio === false);

  return {
    props: {
      projects,
      portfolio
    }
  };
};