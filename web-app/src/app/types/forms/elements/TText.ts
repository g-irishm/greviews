import { TFormBaseElement } from '../TFormBaseElement';

export type TText = TFormBaseElement & {
    type: 'text';
    placeholder: string;
};
