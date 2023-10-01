import { TCheckoutbox, TDate, TEmail, TFile, TImage, TNumber, TPassword, TSelect, TTel, TText, TUrl } from './elements';


export type TFormGroup = {
    name: string;
    elements: Array<TCheckoutbox | TDate | TEmail | TFile | TImage | TNumber | TPassword | TSelect | TTel | TText | TUrl>;
}
