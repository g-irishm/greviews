import { TFormBaseElement } from '../TFormBaseElement';

type TCheckboxValue = {
    id: string;
    value: string;
    displayValue: string;
};

export type TCheckoutbox = TFormBaseElement & {
    type: 'checkbox';
    values: Array<TCheckboxValue>;
};
