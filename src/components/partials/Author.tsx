
import { AuthorContent } from '@/@types';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react'

type AuthorProps = {
    author: AuthorContent;
}

const Author: FunctionComponent<AuthorProps> = ({ author }: AuthorProps): ReactElement => {
    return <>{
        author ?
            <div className="relative flex items-center gap-x-4">
                < Image src={author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" width={100} height={100} />
                <div className="text-sm leading-5">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                        <a href={author.href}>
                            <span className="absolute inset-0" />
                            {author.name}
                        </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{author.introduction}</p>
                </div>
            </div > :
            <p className='text-red-500 text-xs font-bold'>Author Null</p>
    }</>
}

export default Author