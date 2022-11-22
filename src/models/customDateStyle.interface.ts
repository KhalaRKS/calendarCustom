import {Offers} from './offers.interface';
import {Liabilities} from './liabilities.interface';
export interface CustomDateStyle {
  day: DateAtributes;
  liabilities: Liabilities[] | [];
  offers: Offers[] | [];
}

interface DateAtributes {
  date: Date;
  style: DateStyles;
  textStyle: DateTextStyle;
  containerStyle?: any[];
  allowDisabled: boolean;
}

interface DateStyles {
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
}

interface DateTextStyle {
  color: string;
}
