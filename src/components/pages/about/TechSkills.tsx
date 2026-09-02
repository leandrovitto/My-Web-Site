import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { getTechskills } from '@/lib/techskills';
import { TechskillContent } from '@/@types';

type Props = {}

const TechSkills: FunctionComponent<Props> = ({ }: Props): ReactElement => {
    const { t, lang } = useTranslation('common');

    const [tech, setTech] = useState<TechskillContent[]>([]);

    useEffect(() => {
        (async () => {
            const t = await getTechskills(lang);
            setTech(t)
        })()
    }, [lang])

    return <>
        <section className="my-16">
            <SectionHeading eyebrow={t("capabilities.eyebrow")} title={t("techskills.title")} description={t("techskills.description")} />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {tech.map((group) => <article data-cy="capability-group" key={group.title} className="border border-[var(--line)] bg-[var(--surface-raised)] p-5">
                    <h3 className="font-mono text-base font-semibold">{group.title}</h3>
                    <ul className="mt-4 flex list-none flex-wrap gap-2 !ml-0">
                        {group.skills.map((skill) => <li key={skill} className="border border-[var(--line)] px-2 py-1 font-mono text-xs text-[var(--muted)]">{skill}</li>)}
                    </ul>
                </article>)}
            </div>
        </section>
    </>
}


export default TechSkills;
