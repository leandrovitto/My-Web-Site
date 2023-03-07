import useTranslation from "next-translate/useTranslation";
import config from "../../../lib/config";
import Head from "next/head";
import { FunctionComponent, ReactElement } from 'react';

type TwitterCardProps = {
  url: string;
  title?: string;
  description?: string;
};

const TwitterCardMeta: FunctionComponent<TwitterCardProps> = ({
  title,
  description,
  url,
}: TwitterCardProps): ReactElement => {
  const { t: tseo } = useTranslation('seo')

  return (
    <Head>
      <meta name="twitter:creator" content={config.author} />
      <meta name="twitter:image" content={config.image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={config.twitter_account} />
      <meta property="twitter:url" content={config.base_url + url} />
      <meta
        property="twitter:title"
        content={title ? [title, tseo('title')].join(" | ") : ""}
      />
      <meta
        property="twitter:description"
        content={description ? description : tseo('description')}
      />
    </Head>
  );
}

export default TwitterCardMeta