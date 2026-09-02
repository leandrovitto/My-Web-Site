import Meta from '@/components/layouts/meta/Meta';
import SiteShell from '@/components/layouts/SiteShell';
import CaseStudyGrid from '@/components/portfolio/CaseStudyGrid';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { getAllProjects } from '@/lib/projects';
import { normalizeProject, PortfolioProject } from '@/lib/portfolio';
import { Routes } from '@/routes';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  projects: PortfolioProject[];
};

export default function PortfolioPage({ projects }: Props) {
  const { t } = useTranslation('portfolio')

  return (
    <>
      <Meta title={t("title")} url={Routes.portfolio} />
      <SiteShell>
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <div className="mt-10"><CaseStudyGrid projects={projects} /></div>
        </section>
      </SiteShell>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  const projects = getAllProjects(locale).map(normalizeProject);

  return {
    props: {
      projects
    }
  };
};
