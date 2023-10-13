import { TBaseElement } from './TBaseElement';

export type TPassword = TBaseElement & {
    type: 'password';
    placeholder: string;
};
