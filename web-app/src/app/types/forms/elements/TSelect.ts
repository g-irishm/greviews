import { TFormBaseElement } from '../TFormBaseElement';

type TSelectOptions = {
    id: string;
    value: string;
    displayValue: string;
}

export type TSelect = TFormBaseElement & {
    type: 'select';
    placeholder: string;
    options: Array<TSelectOptions>;
};
