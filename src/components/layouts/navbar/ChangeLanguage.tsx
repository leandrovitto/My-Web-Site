import Icon from '@/components/atoms/icon/Icon';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';

const ChangeLanguage: FunctionComponent = (): ReactElement => {
    const { t, lang } = useTranslation("common")
    const { locale, defaultLocale } = useRouter()

    const languages = t('languages', {}, { returnObjects: true }) as Array<{ name: string, code: string }>;
    const classes = "p-2 h-10 font-bold text-sm flex-shrink-0 rounded-lg text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-gray-800 cursor-pointer rounded-lg flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"

    const NEXT_LOCALE = "NEXT_LOCALE";

    useEffect(() => {
        const persistLocaleCookie = () => {
            const date = new Date()
            const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
            date.setTime(date.getTime() + expireMs)
            setCookie(NEXT_LOCALE, locale, { expires: date, path: "/" });
        }

        const cookie = getCookie(NEXT_LOCALE);
        if (!cookie || cookie != locale) {
            persistLocaleCookie();
        }

    }, [locale, defaultLocale])

    return <>
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={classes}>
                    {lang.toUpperCase()}
                    <Icon icon="arrowdown" size={5} withoutStyle className="-mr-1 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {languages.map((lng, idx) => {
                            return <Menu.Item key={idx}>
                                {({ active }) => (
                                    <Link href="/" locale={lng.code}
                                        className={clsx(
                                            active ? 'bg-gray-100 dark:bg-gray-800  text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-100',
                                            'block px-4 py-2 text-sm',
                                            lng.code === lang ? 'font-bold' : ''
                                        )}
                                    >
                                        {lng.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </>
}

export default ChangeLanguage;