import useTranslation from 'next-translate/useTranslation';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import Title from '../../atoms/Title';
import Image from 'next/image';

interface ExperienceItem {
    title: string,
    description: string,
    date: string,
}

interface EducationItem extends ExperienceItem {
    source: string,
}

type Props = {}

const Timeline = ({ items }: { items: Array<ExperienceItem | EducationItem> }) => {
    return <ol className="border-l border-neutral-300 dark:border-neutral-500 my-6">
        {items.map((exp, idx) => {
            return <TimelineItem key={idx} item={exp} />
        })}
    </ol>
}

const TimelineItem = ({ item }: { item: (ExperienceItem | EducationItem) }) => {
    return <li className='border-b border-neutral-300 dark:border-neutral-500 my-2 py-2'>
        <div className="flex-start flex items-center">
            <div
                className="-ml-[9px] mr-3 h-[16px] w-[16px] rounded-full bg-indigo-500 dark:bg-neutral-500"></div>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-300 font-semibold">
                {item?.date}
            </p>
        </div>
        <div className="ml-3">
            <h4 className="text-base md:text-lg font-bold">{item?.title}</h4>
            {(item as EducationItem)?.source && <h4 className="text-gray-400 text-sm">{(item as EducationItem).source}</h4>}
            <p className="text-neutral-500 text-justify dark:text-neutral-300 text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: item?.description }} />
        </div>
    </li>
}

const ExperienceAndEducation: FunctionComponent<Props> = ({ }: Props): ReactElement => {
    const { t } = useTranslation('about')

    const experience = t('experience.content', {}, { returnObjects: true }) as Array<ExperienceItem>;
    const education = t('education.content', {}, { returnObjects: true }) as Array<EducationItem>;
    const courses = t('courses.content', {}, { returnObjects: true }) as Array<EducationItem>;

    return <>
        <div className='my-8'>
            <Title title={t("experience.title")} subtitle={t("title")} />
            <Timeline items={experience} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <Title title={t("education.title")} subtitle={t("title")} />
                <Timeline items={education} />
            </div>

            <div>
                <Title title={t("courses.title")} subtitle={t("title")} />
                <Timeline items={courses} />
            </div>
        </div>
    </>
}


export default ExperienceAndEducation;