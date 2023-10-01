import { TBaseElement } from './TBaseElement';

export type TText = TBaseElement & {
    type: 'text';
    placeholder: string;
};
