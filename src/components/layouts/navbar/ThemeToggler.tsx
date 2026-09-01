import { useTheme } from 'next-themes';
import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';

import Icon from '@/components/atoms/icon/Icon';

export enum ThemesEnum {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light'
}

const ThemeToggler: FunctionComponent = (): ReactElement | null => {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const nextTheme = (): ThemesEnum => {
        switch (theme ?? ThemesEnum.SYSTEM) {
            case ThemesEnum.SYSTEM:
                return ThemesEnum.DARK;
            case ThemesEnum.DARK:
                return ThemesEnum.LIGHT;
            case ThemesEnum.LIGHT:
                return ThemesEnum.SYSTEM;
            default:
                return ThemesEnum.DARK;
        }
    };

    const handleClick = () => setTheme(nextTheme());

    const renderIcon = (): string => {
        switch (theme) {
            case ThemesEnum.SYSTEM:
                return "desktop";
            case ThemesEnum.DARK:
                return "moon";
            case ThemesEnum.LIGHT:
            default:
                return "sun";
        }
    }

    if (!mounted)
        return null;

    return <button
        id="btn_theme_toggler"
        type="button"
        onClick={handleClick}
        aria-label={t('theme.next', { theme: t(`theme.${nextTheme()}`) })}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)] transition-colors hover:bg-[var(--surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
        <Icon icon={renderIcon()} />
    </button>
};

export default ThemeToggler;
