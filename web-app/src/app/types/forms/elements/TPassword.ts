import { TFormBaseElement } from '../TFormBaseElement';

export type TPassword = TFormBaseElement & {
    type: 'password';
    placeholder: string;
};
