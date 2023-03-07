import { ProjectContent, TechskillContent } from '@/@types';
import MDX from '@/components/MDX/MDX';
import Author from '@/components/partials/Author';
import { getAuthor } from '@/lib/authors';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import BtnIcon from '../icon/BtnIcon';
import Icon from '../icon/Icon';
import IconStack from '../icon/IconStack';

type CardItemProps = {
    big?: boolean,
    item: ProjectContent | TechskillContent;
}

const CardItem: FunctionComponent<CardItemProps> = ({ big = false, item }: CardItemProps): ReactElement => {
    const { t, lang } = useTranslation('portfolio')

    const linkNone = "#"

    const DownloadButton = ({ link = "" }) => {
        const openLink = () => {
            window.open(link, "_blank", "noreferrer");
        }
        return <BtnIcon id="btn_theme_toggler" onClick={openLink} icon="link" />
    }

    const ImageBig = ({ imageUrl, big }: { imageUrl: string, big?: boolean }) => {
        return <>
            {big ? <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <Image
                    src={imageUrl}
                    alt=""
                    className="inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover object-right "
                    width={500}
                    height={500}
                />
            </div> :
                <Image
                    src={imageUrl}
                    alt=""
                    className="inset-0 h-24 w-24 rounded-2xl bg-gray-50 object-cover object-right md:mx-2"
                    width={200}
                    height={200}
                />
            }
        </>
    }

    const Linked = ({ item, children }: { item: ProjectContent | TechskillContent, children: ReactNode }) => {
        const hasLink = ((item as ProjectContent)?.href && (item as ProjectContent).href != linkNone) ?? false;

        return hasLink ? <Link href={(item as ProjectContent).href} target='_blank' className='hover:ring-2 hover:rounded-2xl md:mr-4' as="div">
            {children}
        </Link> :
            <div className='md:mr-4'>{children}</div>
    }

    return <li className="col-span-1 divide-y border border-gray-300 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 rounded-lg shadow-sm hover:bg-indigo-50 dark:hover:bg-gray-900">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
            <Linked item={item}>
                {(item as ProjectContent).imageUrl && <ImageBig imageUrl={(item as ProjectContent).imageUrl} big={big} />}

                {!(item as ProjectContent).imageUrl && <>
                    <div className='mx-auto animate-spin-15 w-10 md:mx-2'>
                        <Icon
                            icon={(item as TechskillContent).icon ? (item as TechskillContent).icon : "github"}
                            size={10}
                            className='text-indigo-600 dark:text-indigo-500'
                            withoutStyle
                        />
                    </div>
                </>}
            </Linked>

            <div className="flex-1">
                <div className="flex items-center gap-x-4 text-xs my-2">
                    {(item as ProjectContent).date && <time dateTime={(item as ProjectContent).datetime} className="text-gray-500 dark:text-gray-300">
                        {(item as ProjectContent).date}
                    </time>}
                    {(item as ProjectContent).category && <div
                        className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {(item as ProjectContent).category}
                    </div>}
                </div>

                <div className='text-xl font-bold text-indigo-600 dark:text-indigo-500'>{item.title}</div>
                {(item as ProjectContent).source && <div className="text-sm">
                    <MDX source={(item as ProjectContent).source} />
                </div>}

                {(item as TechskillContent).skills && <ul className='list-disc ml-6 mt-1 text-sm text-gray-500 dark:text-gray-200 font-semibold'>
                    {(item as TechskillContent).skills.map((s, idx) => <li key={idx}>{s}</li>)}
                </ul>}

                {(item as ProjectContent).stack && <div className="mt-2">
                    <IconStack stack={(item as ProjectContent).stack} />
                </div>}
            </div>
        </div>


        {(item as ProjectContent).author && (item as ProjectContent).href &&
            <div className="-mt-px flex mx-auto divide-x divide-gray-200 dark:divide-gray-700 ">
                <div className='w-5/6 flex justify-start px-4 my-2'>
                    <Author author={getAuthor(lang, (item as ProjectContent).author)} />
                </div>
                {(item as ProjectContent).href != linkNone && <div className="w-1/6 flex justify-center my-2">
                    <DownloadButton link={(item as ProjectContent).href} />
                </div>}
            </div>
        }
    </li>
}

export default CardItem;