import useTranslation from "next-translate/useTranslation";
import config from "../../../lib/config";
import Head from "next/head";
import { FunctionComponent, ReactElement } from 'react';

type TwitterCardProps = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
};

const TwitterCardMeta: FunctionComponent<TwitterCardProps> = ({
  title,
  description,
  url,
  image,
}: TwitterCardProps): ReactElement => {
  const { t: tseo } = useTranslation('seo')

  return (
    <Head>
      <meta name="twitter:creator" content={config.author} />
      <meta name="twitter:image" content={new URL(image ? image : config.image, config.base_url).toString()} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={config.twitter_account} />
      <meta property="twitter:url" content={new URL(url, config.base_url).toString()} />
      <meta
        property="twitter:title"
        content={title ? [title, tseo('title')].join(" | ") : tseo('title')}
      />
      <meta
        property="twitter:description"
        content={description ? description : tseo('description')}
      />
    </Head>
  );
}

export default TwitterCardMeta
