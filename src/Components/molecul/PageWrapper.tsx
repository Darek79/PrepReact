import { HTMLAttributes } from 'react';

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className="grid grid-cols-mobile sm:grid-cols-tablet lg:grid-cols-desktop" {...rest}>
            <div className="col-start-1 sm:col-start-2 max-w-7xl justify-self-center w-full">{children}</div>
        </div>
    );
}
