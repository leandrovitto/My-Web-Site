import Image from 'next/image';
import React, { FunctionComponent, ReactElement } from 'react';
import Title from '../atoms/Title';
import useTranslation from 'next-translate/useTranslation';


type HeroProps = {
    title: string;
    children: ReactElement;
    image: string;
    subtitle?: string;
    right?: boolean;
}

const Hero: FunctionComponent<HeroProps> = ({
    image,
    title,
    subtitle,
    children,
    right = false,
}: HeroProps): ReactElement => {

    const Img = () => {
        return <Image src={image} className="rounded-lg" width={1280} height={1024} alt="studio" />
    }

    return <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center lg:mx-0 lg:max-w-none">
        {!right && <Img />}
        <Title title={title} subtitle={subtitle ? subtitle : ""}>
            <div className='break-normal whitespace-pre-line lg:text-lg text-base'>
                {children}
            </div>
        </Title>
        {right && <Img />}
    </div>
}


export default Hero;