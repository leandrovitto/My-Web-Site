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
            name: t("menu.profile"),
            href: Routes.profile,
            icon: "shield_lock",
        },
        {
            name: t("menu.work"),
            href: Routes.work,
            icon: "box_circles"
        },
        /* {
            name: t("menu."),
            href: '',
            icon: Squares2X2Icon,
            external: true
        } */
    ]

    return [
        menu
    ]

};

export default useMenuHook;
