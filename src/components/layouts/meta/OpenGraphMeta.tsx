import useTranslation from "next-translate/useTranslation";
import config from "../../../lib/config";
import Head from "next/head";
import { FunctionComponent, ReactElement } from 'react';

type OpenGraphProps = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  type?: string
};

const OpenGraphMeta: FunctionComponent<OpenGraphProps> = ({
  url,
  title,
  description,
  image,
  type = "website" //Or "article"
}: OpenGraphProps): ReactElement => {
  const { t: tseo } = useTranslation('seo')

  return (
    <Head>
      <meta property="og:site_name" content={tseo('title')} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, tseo('title')].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={description ? description : tseo('description')}
      />
      <meta
        property="og:image"
        content={image ? image : config.image}
      />
      <meta property="og:type" content={type} />
    </Head>
  );
}

export default OpenGraphMeta