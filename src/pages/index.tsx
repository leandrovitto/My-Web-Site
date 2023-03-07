import TechSkills from '@/components/pages/about/TechSkills';
import Meta from '@/components/layouts/meta/Meta';
import Manifest from '@/components/pages/homepage/Manifest';
import { Routes } from '@/routes';
import useTranslation from 'next-translate/useTranslation';
import Content from '../components/pages/homepage/Content';
import Details from '../components/pages/homepage/Details';
import DefaultLayout from '../layouts/DefaultLayout';

type Props = {};

export default function Home({ }: Props) {
  const { t } = useTranslation('home')

  return (
    <>
      <Meta title={t("title")} url={Routes.home} />
      <DefaultLayout image="/images/hero.jpg">
        <Details />
        <Content />
        <TechSkills />
        <Manifest />
      </DefaultLayout>
    </>
  )
}