import Button from '@/components/atoms/Button';
import SocialBar from '@/components/layouts/SocialBar';
import { getAuthor } from '@/lib/authors';
import config from '@/lib/config';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { FunctionComponent, ReactElement, useContext, useState } from 'react';
import Title from '../../atoms/Title';
import Icon from '../../atoms/icon/Icon';
import AboutTypewriter from '@/components/layouts/AboutTypewriter';
import { VisitedContext } from '@/context/visited/visited.context';
import { Lang } from '@/@types';

type Props = {}

const Details: FunctionComponent<Props> = ({ }: Props): ReactElement => {
    const { t, lang } = useTranslation('common')
    const { t: thome } = useTranslation('home')

    const { visited } = useContext(VisitedContext);
    const authors = getAuthor(lang, config.author)

    const DownloadCVButton = () => {
        const downloadCV = () => {
            let link = "";
            if (lang == Lang.IT) {
                link = config.link_cv_it
            } else {
                link = config.link_cv_en
            }
            window.open(link, "_blank", "noreferrer");
        }

        return <>
            <Button className='my-2' onClick={downloadCV} icon="pdf">
                <p>{t("btn.download_cv") + ` - ` + lang.toLocaleUpperCase()}</p>
            </Button>
        </>
    }

    const DetailSection = () => {
        return <div className="max-w-md">
            <Title title={t("profile.name")} subtitle={thome(visited ? "welcome_back" : "welcome")} size='md'>
                <div>

                    <div className="font-mono text-sm font-bold text-gray-500 dark:text-gray-300">
                        <AboutTypewriter />
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-300 mt-2 py-1 border-t border-gray-300">
                        <Icon icon="envelope" withoutStyle className="mr-2" />
                        {t("profile.email")}
                    </div>
                    <div className="hidden md:block">
                        <DownloadCVButton />
                    </div>
                </div>
            </Title>
        </div>

    }

    return <div>
        <div className="mx-auto max-w-5xl md:px-10">
            <div className="-mt-14 sm:-mt-8 sm:flex sm:space-x-5">
                <div className="flex items-start mx-auto justify-center md:justify-start">
                    {authors && <Image alt="avatar" className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-gray-900 sm:mx-auto sm:text-center sm:h-32 sm:w-32" src={authors.imageUrl} width="128" height="128" />}
                </div>
                <div className="hidden md:flex flex-1">
                    <DetailSection />
                    <SocialBar />
                </div>
            </div>
            <div className="mt-1 flex-1 md:hidden">
                <DetailSection />
                <SocialBar />
                <DownloadCVButton />
            </div>
        </div>
    </div>
}


export default Details;
