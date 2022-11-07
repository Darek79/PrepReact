import type { HTMLAttributes } from 'react';
import { createElement } from 'react';
interface ImageI extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export default function Image({ src, alt, children, ...rest }: ImageI): JSX.Element {
    return createElement('img', { src: src, alt: alt, rest }, children);
}
