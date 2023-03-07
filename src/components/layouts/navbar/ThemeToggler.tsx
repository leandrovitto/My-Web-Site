import { useTheme } from 'next-themes';
import { FunctionComponent, ReactElement } from 'react';
import React, { useState, useEffect } from 'react';

import { IconType } from "@react-icons/all-files";
import BtnIcon from '@/components/atoms/icon/BtnIcon';

export enum ThemesEnum {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light'
}

const ThemeToggler: FunctionComponent = (): ReactElement | null => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const handleClick = () => {
        let newTheme = ThemesEnum.LIGHT;
        switch (theme) {
            case ThemesEnum.SYSTEM:
                newTheme = ThemesEnum.DARK
                break;
            case ThemesEnum.DARK:
                newTheme = ThemesEnum.LIGHT
                break;
            case ThemesEnum.LIGHT:
                newTheme = ThemesEnum.SYSTEM
                break;
        }
        setTheme(newTheme)
    }

    const renderIcon = (): string => {
        switch (theme) {
            case ThemesEnum.SYSTEM:
                return "desktop"
                break;
            case ThemesEnum.DARK:
                return "moon"
                break;
            case ThemesEnum.LIGHT:
            default:
                return "sun"
                break;

        }
    }

    if (!mounted)
        return null;

    return <BtnIcon id="btn_theme_toggler" onClick={handleClick} icon={renderIcon()} />
};

export default ThemeToggler;