import { TBaseElement } from './TBaseElement';

export type TEmail = TBaseElement & {
    type: 'email';
    placeholder: string;
};
