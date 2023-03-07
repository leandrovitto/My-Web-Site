import { FunctionComponent, MouseEvent, ReactElement } from 'react';
import Icon from './Icon';

type BtnIconProps = {
    id: string,
    icon: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const BtnIcon: FunctionComponent<BtnIconProps> = ({ id, icon, onClick }: BtnIconProps): ReactElement => {
    const classes = "cursor-pointer rounded-lg flex items-center justify-center hover:ring-2 ring-indigo-500 transition-all duration-300 focus:outline-none"

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event);
    }

    return <button
        id={id}
        onClick={handleClick}
        className={classes}
    >
        <Icon icon={icon} />
    </button>
}

export default BtnIcon;
