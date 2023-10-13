import { TBaseElement } from './TBaseElement';

type TCheckboxValue = {
    id: string;
    value: string;
    displayValue: string;
};

export type TCheckoutbox = TBaseElement & {
    type: 'checkbox';
    values: Array<TCheckboxValue>;
};
