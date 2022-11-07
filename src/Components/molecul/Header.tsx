import type { HTMLAttributes } from 'react';
export interface HeaderI extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    restH2?: HTMLAttributes<HTMLElement>;
    restP?: HTMLAttributes<HTMLElement>;
}

export default function Header({ title, description, children, restH2, restP, ...rest }: HeaderI): JSX.Element {
    return (
        <header {...rest}>
            <h2 {...restH2}>{title}</h2>
            <p {...restP}>{description}</p>
            {children}
        </header>
    );
}
