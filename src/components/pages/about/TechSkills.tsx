import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';

import Title from '@/components/atoms/Title';
import { getTechskills } from '@/lib/techskills';
import CardGroup from '../../atoms/card/CardGroup';
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
    }, [tech, lang])

    return <>
        <div className="overflow-hidden my-16">
            <div>
                <div className="max-w-2xl md:mx-auto lg:text-center">
                    <Title title={t("techskills.title")} subtitle={t("title")}>
                        <span className="inline-block flex-shrink-0 rounded-md bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-900 px-2 py-1 text-xs md:text-base font-bold text-indigo-800">
                            {t("techskills.description")}
                        </span>
                    </Title>
                </div>
                <CardGroup group={tech} />
            </div>
        </div>
    </>
}


export default TechSkills;