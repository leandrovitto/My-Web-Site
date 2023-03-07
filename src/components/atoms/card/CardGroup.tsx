import clsx from 'clsx';
import { FunctionComponent, ReactElement } from 'react';
import { ProjectContent, TechskillContent } from '@/@types';
import CardItem from './CardItem';

type CardGroupProps = {
    big?: boolean,
    group: ProjectContent[] | TechskillContent[];
}

const CardGroup: FunctionComponent<CardGroupProps> = ({ big = false, group }: CardGroupProps): ReactElement => {
    const classes = "list-none -ml-0"

    return <ul role="list"
        className={clsx(
            classes,
            [{ 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6': !big }],
            [{ 'grid grid-cols-1 gap-y-4': big }],
        )}
    >
        {group.map((item, idx) => <CardItem key={idx} item={item} big={big} />)}
    </ul>
}

export default CardGroup;