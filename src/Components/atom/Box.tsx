import type { HTMLAttributes } from 'react';
import { createElement } from 'react';
import classname from 'classnames';
interface BoxI extends HTMLAttributes<HTMLDivElement> {
    card?: boolean;
    styles?: string;
}

export default function Box({ children, card, styles, ...rest }: BoxI): JSX.Element {
    const wrapperClasses = classname({
        'grid grid-cols-gridCard': card,
        [`${styles}`]: styles,
    });
    return createElement('div', { className: wrapperClasses, ...rest }, children);
}
