import { FunctionComponent, ReactElement, ReactNode } from 'react';
import LinkIcon from '../atoms/icon/LinkIcon';
import { Social } from '@/@types';
import config from '@/lib/config';


type SocialBarProps = {}

const SocialBar: FunctionComponent<SocialBarProps> = ({ }: SocialBarProps): ReactElement => {
    const social: Social = config.social;

    return <div className="flex flex-1 md:justify-end gap-2 text-left my-2">
        {social.map((s, idx) => {
            return <LinkIcon key={idx} icon={s.name} link={s.link} />
        })}
    </div>
}

export default SocialBar;