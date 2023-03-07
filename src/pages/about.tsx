import { HeroContent } from '@/@types';
import MDX from '@/components/MDX/MDX';
import Hero from '@/components/atoms/Hero';
import Meta from '@/components/layouts/meta/Meta';
import ExperienceAndEducation from '@/components/pages/about/ExperienceAndEducation';
import TechSkills from '@/components/pages/about/TechSkills';
import { getHeroBySlug } from '@/lib/hero';
import { Routes } from '@/routes';
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import useTranslation from 'next-translate/useTranslation';
import DefaultLayout from '../layouts/DefaultLayout';


type Props = {
  about: HeroContent;
  trading: HeroContent;
  sport: HeroContent;
};

export default function About({ about, trading, sport }: Props) {
  const { t } = useTranslation('about')

  return (
    <>
      <Meta title={t("title")} url={Routes.about} />
      <DefaultLayout image="/images/studio_4.jpg">
        <Hero
          title={about.title}
          subtitle={about.subtitle}
          image={about.imageUrl}
          right
        >
          <MDX source={about.source} />
        </Hero>

        <ExperienceAndEducation />
        <TechSkills />

        <Hero
          title={trading.title}
          subtitle={trading.subtitle}
          image={trading.imageUrl}
        >
          <MDX source={trading.source} />
        </Hero>
        <Hero
          title={sport.title}
          subtitle={sport.subtitle}
          image={sport.imageUrl}
          right
        >
          <MDX source={sport.source} />
        </Hero>

      </DefaultLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  let about = getHeroBySlug("about", locale);
  about.source = await serialize(about.content);

  let trading = getHeroBySlug("trading", locale);
  trading.source = await serialize(trading.content);

  let sport = getHeroBySlug("sport", locale);
  sport.source = await serialize(sport.content);

  return {
    props: {
      about,
      trading,
      sport
    }
  };
};