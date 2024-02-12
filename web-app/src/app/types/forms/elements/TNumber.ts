import { TBaseElement } from './TBaseElement';

export type TNumber = TBaseElement & {
    type: 'number';
    min: number;
    max: number;
};
