import { aspect_ratios } from 'StyleVars/stylevars';

export type AspectKeys = keyof typeof aspect_ratios;
export type AspectRatiosProps = typeof aspect_ratios[AspectKeys];
