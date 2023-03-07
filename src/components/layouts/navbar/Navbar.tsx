import Icon from '@/components/atoms/icon/Icon';
import useMenuHook from '@/hooks/MenuHook';
import { Routes } from '@/routes';
import { Popover, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, FunctionComponent, ReactElement } from 'react';
import ChangeLanguage from './ChangeLanguage';
import ThemeToggler from './ThemeToggler';





type NavbarProps = {}


const Logo = () => {
    const { t } = useTranslation('common')

    return <Link href={Routes.home}>
        <div className='flex flex-row gap-2 items-center'>
            <span className="sr-only">Your Company</span>
            <Image
                className="h-16 w-auto sm:h-10 "
                src="/images/logo.png"
                alt=""
                width={"100"}
                height={"100"}
            />
            <div>
                <p>{t("profile.name")}</p>
                <p className='text-xs text-gray-600 dark:text-gray-400'>({t("personal_site")})</p>
            </div>
        </div>
    </Link>
}

const MenuMobile = () => {
    const { t } = useTranslation('common')
    const [menu] = useMenuHook();

    return <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex  items-center justify-between">
                        <Logo />
                        <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <Icon icon="close" withoutStyle />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid grid-cols-2 gap-y-8">
                            {menu.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    target={item.external ? "__blank" : "_self"}
                                    className="-m-3 flex items-center rounded-md p-3  hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    <Icon size={6} className="text-indigo-600 dark:text-indigo-100" icon={item.icon} withoutStyle />
                                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="flex items-center justify-end md:flex md:flex-1 lg:w-0 gap-2 py-4 px-4">
                    <ThemeToggler />
                    <ChangeLanguage />
                </div>
            </div>
        </Popover.Panel>
    </Transition>
}

export const Navbar: FunctionComponent<NavbarProps> = ({ }: NavbarProps): ReactElement => {
    const { t } = useTranslation('common')
    const [menu] = useMenuHook();

    return <nav>
        <Popover>
            <div className=''>
                <div className="flex items-center justify-between border-gray-100 py-2 md:justify-start md:space-x-10 px-4 max-w-7xl mx-auto ">
                    <div className="flex gap-2 justify-start lg:w-0 lg:flex-1 items-center">
                        <Logo />
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus:outline-none border border-gray-300">
                            <span className="sr-only">Open menu</span>
                            <Icon icon="menu" withoutStyle />
                        </Popover.Button>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        {menu.map((item, idx) => (
                            <Link
                                id={`menu_item_${idx}`}
                                key={idx}
                                href={item.href}
                                target={item.external ? "__blank" : "_self"}
                                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <Icon size={6} className="text-indigo-600 dark:text-indigo-100" icon={item.icon} withoutStyle />
                                <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-2">
                        <ThemeToggler />
                        <ChangeLanguage />
                    </div>
                </div>
                <MenuMobile />
            </div>
        </Popover>
    </nav>
}