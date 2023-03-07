import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement } from 'react';

import Title from '@/components/atoms/Title';
import Icon from '../../atoms/icon/Icon';

type Props = {}

const Manifest: FunctionComponent<Props> = ({ }: Props): ReactElement => {
    const { t } = useTranslation('common')

    const manifest = t('manifest.content', {}, { returnObjects: true }) as Array<{ title: string, description: string, icon: string }>;

    return <div className="">
        <div className="mx-auto lg:text-center">
            <Title title={t("manifest.title")} subtitle={t("title")} />
        </div>
        <div>
            <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {manifest.map((feature) => (
                    <div key={feature.title} className="relative p-8 border border-gray-100 dark:border-gray-600 dark:bg-gray-900 hover:bg-gray-100 hover:dark:bg-gray-900/50 cursor-pointer rounded-xl">
                        <dt className="inline-flex items-center gap-2 text-base font-semibold">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg  hover:animate-ping">
                                <Icon icon="code" className="animate-spin-15" />
                            </div>
                            {feature.title}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: feature.description }} />
                    </div>
                ))}
            </dl>
        </div>
    </div>
}


export default Manifest;