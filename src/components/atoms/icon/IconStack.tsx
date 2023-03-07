import { FunctionComponent, ReactElement } from 'react';
import Icon from './Icon';

type IconStackProps = {
    stack: string[];
    className?: string;
}

const IconStack: FunctionComponent<IconStackProps> = ({ stack, className }: IconStackProps): ReactElement => {
    return <div className="flex flex-rows gap-1">
        {stack.map((name, idx) => {
            return <div key={idx} className=''>
                <Icon
                    icon={name}
                    className='bg-white'
                />
            </div>
        })}
    </div>;
}

export default IconStack;