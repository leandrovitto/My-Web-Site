import React from 'react'
import { Routes } from '@/routes';
import useTranslation from 'next-translate/useTranslation';

export interface navItem {
    name: string,
    href: string,
    icon?: any,
    external?: boolean
}

const useMenuHook = (): [
    menu: navItem[],
] => {
    const { t } = useTranslation('common')

    const menu = [
        {
            name: t("menu.home"),
            href: Routes.home,
            icon: "bar_chart",
        },
        {
            name: t("menu.about"),
            href: Routes.about,
            icon: "shield_lock",
        },
        {
            name: t("menu.portfolio"),
            href: Routes.portfolio,
            icon: "box_circles"
        },
        /* {
            name: t("menu.isjeady"),
            href: 'https://www.isjeady.com',
            icon: Squares2X2Icon,
            external: true
        } */
    ]

    return [
        menu
    ]

};

export default useMenuHook;