
import config from '@/lib/config';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FunctionComponent, ReactElement } from 'react';
import BaseMeta from './BaseMeta';
import TwitterCardMeta from './TwitterCardMeta';
import OpenGraphMeta from './OpenGraphMeta';

type MetaProps = {
    url: string;
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
    image?: string;
    type?: string
}

const Meta: FunctionComponent<MetaProps> = ({
    title,
    description,
    keywords,
    author,
    url,
    image,
    type = "website" //Or "article"
}: MetaProps): ReactElement => {
    return <>
        <BaseMeta title={title} url={url} description={description} keywords={keywords} author={author} />
        <TwitterCardMeta title={title} url={url} description={description} />
        <OpenGraphMeta title={title} url={url} description={description} image={image} type={type} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
}

export default Meta