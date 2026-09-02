import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement } from 'react';
import SectionHeading from '@/components/portfolio/SectionHeading';
import Timeline, { TimelineEntry } from '@/components/portfolio/Timeline';

type Props = {}

const ExperienceAndEducation: FunctionComponent<Props> = ({ }: Props): ReactElement => {
    const { t } = useTranslation('about')

    const experience = t('experience.content', {}, { returnObjects: true }) as TimelineEntry[];
    const education = t('education.content', {}, { returnObjects: true }) as TimelineEntry[];
    const courses = t('courses.content', {}, { returnObjects: true }) as TimelineEntry[];

    return <>
        <section data-cy="career-timeline" className='mt-16'>
            <SectionHeading eyebrow={t("timeline.eyebrow")} title={t("experience.title")} />
            <div className="mt-8"><Timeline entries={experience} /></div>
        </section>

        <section className='mt-16 grid grid-cols-1 gap-12 md:grid-cols-2'>
            <div>
                <SectionHeading title={t("education.title")} />
                <div className="mt-6"><Timeline entries={education} /></div>
            </div>

            <div>
                <SectionHeading title={t("courses.title")} />
                <div className="mt-6"><Timeline entries={courses} /></div>
            </div>
        </section>
    </>
}


export default ExperienceAndEducation;
