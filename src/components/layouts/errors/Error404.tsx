
import { Routes } from '@/routes';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FunctionComponent, ReactElement } from 'react';

type Error404Props = {}

const Error404: FunctionComponent<Error404Props> = ({ }: Error404Props): ReactElement => {
    const { t } = useTranslation('common')

    return <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-48 h-screen sm:py-16 lg:px-8">
        <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{t("error.404")}</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{t("error.404_message")}</p>
        <div className="mt-10">
            <Link href={Routes.home} className="text-sm font-semibold leading-7 text-indigo-600">
                <span aria-hidden="true">&larr;</span> {t("error.back_to_home")}
            </Link>
        </div>
    </main>
}

export default Error404