import {Offers} from './offers.interface';
import {Liabilities} from './liabilities.interface';
import {Moment} from 'moment';
export interface CustomDateStyle {
  date: Moment;
  style: DateStyles;
  liabilities?: Liabilities[];
  offers?: Offers[];
}

interface DateStyles {
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
}

interface DateTextStyle {
  color: string;
}
