
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';
import SocialBar from './SocialBar';
import useMenuHook from '@/hooks/MenuHook';
import Link from 'next/link';

const Footer: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation('common')
    const [menu] = useMenuHook();

    return <footer className="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="px-10 my-4">
            <div className="border-t border-gray-900/10 dark:border-gray-100/10">
            </div>
        </div>
        <div className='flex flex-row max-w-7xl  mx-auto'>
            <div className='w-4/6 p-8'>
                <div className="flex flex-col justify-start">
                    <Image
                        className="h-10 w-10 mb-2"
                        src="/images/logo.png"
                        alt="Leandro"
                        width={50}
                        height={50}
                    />
                    <p className="text-base mb-2 text-gray-600 dark:text-gray-100">
                        {t("footer.message")}
                    </p>
                    <SocialBar />
                </div>
            </div>
            <div className='w-2/6  p-8'>
                <ul role="list" className="mt-6 space-y-4 list-none">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} target={item.external ? "__blank" : "_self"} className="text-sm font-bold leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-100 hover:dark:text-gray-400">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="px-10 my-4">
            <div className="border-t border-gray-900/10 dark:border-gray-100/10">
                <p className="text-center font-bold text-xs leading-5 text-gray-500 dark:text-gray-300 py-4">
                    &copy; {t("footer.rights")}
                    <br></br>
                    {t("footer.love")}
                </p>
            </div>
        </div>

    </footer>
}

export default Footer;