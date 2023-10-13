import { TBaseElement } from './TBaseElement';

type TSelectOptions = {
    id: string;
    value: string;
    displayValue: string;
}

export type TSelect = TBaseElement & {
    type: 'select';
    placeholder: string;
    options: Array<TSelectOptions>;
};
