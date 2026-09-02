import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { getCookie, setCookie } from 'cookies-next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';

const ChangeLanguage: FunctionComponent = (): ReactElement => {
    const { t, lang } = useTranslation("common")
    const { asPath, locale, defaultLocale } = useRouter()

    const languages = t('languages', {}, { returnObjects: true }) as Array<{ name: string, code: string }>;
    const classes = "flex h-9 items-center gap-1 border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 font-mono text-[11px] font-semibold tracking-[0.08em] text-[var(--ink)] transition-colors hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"

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
                <Menu.Button data-cy="language-menu" className={classes}>
                    {lang.toUpperCase()}
                    <span aria-hidden="true">+</span>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right border border-[var(--line)] bg-[var(--surface-raised)] p-1 focus:outline-none">
                    <div>
                        {languages.map((lng, idx) => {
                            return <Menu.Item key={idx}>
                                {({ active }) => (
                                    <Link href={asPath} locale={lng.code}
                                        className={clsx(
                                            active ? 'bg-[var(--surface)] text-[var(--ink)]' : 'text-[var(--muted)]',
                                            'block px-3 py-2 font-mono text-xs',
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
