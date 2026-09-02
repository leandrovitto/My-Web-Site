import Meta from '@/components/layouts/meta/Meta';
import SiteShell from '@/components/layouts/SiteShell';
import CareerHero from '@/components/pages/homepage/CareerHero';
import FeaturedWork from '@/components/pages/homepage/FeaturedWork';
import WorkingPrinciples from '@/components/pages/homepage/WorkingPrinciples';
import CodewavePromotion from '@/components/pages/homepage/CodewavePromotion';
import MetricStrip from '@/components/portfolio/MetricStrip';
import { PortfolioProject, getFeaturedProjects, normalizeProject } from '@/lib/portfolio';
import { getAllProjects } from '@/lib/projects';
import { Routes } from '@/routes';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = { featuredProjects: PortfolioProject[] };

export default function Home({ featuredProjects }: Props) {
  const { t } = useTranslation('home')
  const metrics = t('metrics', {}, { returnObjects: true }) as { label: string; value: string }[];

  return (
    <>
      <Meta title={t("title")} url={Routes.home} />
      <SiteShell>
        <CareerHero />
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10"><MetricStrip metrics={metrics} /></div>
        <FeaturedWork projects={featuredProjects} />
        <CodewavePromotion />
        <WorkingPrinciples />
      </SiteShell>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: { featuredProjects: getFeaturedProjects(getAllProjects(locale).map(normalizeProject).filter((project) => project.featured)) },
});
