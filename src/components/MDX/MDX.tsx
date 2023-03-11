import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement, Suspense } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

//Components
import Code from './Code';
import Icon from '../atoms/icon/Icon';
import ImageViewer from './ImageViewer';
import LinkIcon from '../atoms/icon/LinkIcon';

const components = { Code, Icon, LinkIcon, ImageViewer };

type Props = {
    source: MDXRemoteSerializeResult;
}

const MDX: FunctionComponent<Props> = ({ source }: Props): ReactElement => {
    const { t } = useTranslation('about')

    return <>
        <Suspense fallback={<>Loading...</>}>
            <MDXRemote {...source} components={components} />
            {/* {JSON.stringify(source)} */}
        </Suspense>
    </>
}


export default MDX;