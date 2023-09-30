import { TFormBaseElement } from '../TFormBaseElement';

export type TEmail = TFormBaseElement & {
    type: 'email';
    placeholder: string;
};
