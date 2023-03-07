import Meta from '@/components/layouts/meta/Meta';
import { Routes } from '@/routes';
import useTranslation from 'next-translate/useTranslation';
import DefaultLayout from '../layouts/DefaultLayout';
import Error404 from '@/components/layouts/errors/Error404';



export default function Home() {
    const { t } = useTranslation('common')

    return (
        <>
            <Meta title={t("title")} url={Routes.home} />
            <DefaultLayout>
                <Error404 />
            </DefaultLayout>
        </>
    )
}
