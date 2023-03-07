import clsx from 'clsx';
import React, { FunctionComponent, MouseEvent, ReactElement, useState, useEffect } from 'react'
import { ThemeColors } from '../../@types';
import Icon from './icon/Icon';

export interface ButtonType extends Pick<ThemeColors, 'default' | 'info' | 'success' | 'warning' | 'error'> {
    [key: string]: string;
}

type ButtonProps = {
    children: ReactElement | ReactElement[],
    type?: keyof ButtonType,
    icon?: string,
    className?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FunctionComponent<ButtonProps> = ({ children, type, onClick, className, icon }: ButtonProps): ReactElement => {

    const classes = "inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2"
    const classes2 = "text-sm font-medium  shadow-sm hover:ring-2 ring-indigo-500 transition-all duration-300 focus:outline-none hover:ml-2"

    const [colorClasses, setColorClasses] = useState<string>("white");

    useEffect(() => {
        let classes = "";
        switch (type) {
            case 'success':
                classes = `bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 text-white `
                break;
            case 'error':
                classes = `bg-red-600 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900 text-white`
                break;
            case 'warning':
                classes = `bg-yellow-500 hover:bg-yellow-600/70 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-600 `
                break;
            case 'info':
                classes = `bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 text-white `
                break;
            default:
                classes = `bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 text-gray-700 dark:text-white`
                break;
        }
        setColorClasses(classes)
    }, [type])

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event);
    }

    return <button
        onClick={handleClick}
        className={clsx(
            classes,
            classes2,
            colorClasses,
            className
        )}
    >
        {icon && <Icon className="-ml-1 mr-2" icon={icon} withoutStyle />}
        {children}
    </button>
}

export default Button;