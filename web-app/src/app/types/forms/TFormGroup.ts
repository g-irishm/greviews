import { TCheckoutbox, TDate, TEmail, TFile, TImage, TNumber, TPassword, TSelect, TTel, TText, TUrl } from './elements';


export type TFormGroup = {
    name: string; // for internal purpose
    title: string; // for displaying in storefont
    elements: Array< TCheckoutbox | TDate | TEmail | TFile | TImage | TNumber | TPassword | TSelect | TTel | TText | TUrl >;
}
