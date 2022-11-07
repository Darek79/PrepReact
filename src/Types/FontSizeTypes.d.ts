import { text_sizes } from 'StyleVars/stylevars';

export type TextKeys = keyof typeof text_sizes;
export type FontSizesProps = typeof text_sizes[TextKeys];
