import {Moment} from 'moment';
import {Liabilities} from './liabilities.interface';
import {Offers} from './offers.interface';

export interface ItemCalendar {
  date: Moment;
  backgroundColor: string;
  borderColor: string;
  titulo?: string;
  description?: string;
  callback?: () => void;
  liabilities?: Liabilities[];
  offers?: Offers[];
}
