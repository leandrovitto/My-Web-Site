
import config from '@/lib/config';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FunctionComponent, ReactElement } from 'react';

type BaseMetaProps = {
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
    url: string;
}

const BaseMeta: FunctionComponent<BaseMetaProps> = ({
    title,
    description,
    keywords,
    author,
    url,
}: BaseMetaProps): ReactElement => {
    const { t: tseo } = useTranslation('seo')

    return <Head>
        <title>
            {title ? [title, tseo('title')].join(" | ") : tseo('title')}
        </title>
        <meta
            name="description"
            content={description ? description : tseo('description')}
        />
        <meta
            name="keywords"
            content={
                keywords
                    ? keywords.join(",")
                    : config.site_keywords.join(",")
            }
        />
        {author && <meta name="author" content={author} />}
        <link rel="canonical" href={config.base_url + url} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}

export default BaseMeta