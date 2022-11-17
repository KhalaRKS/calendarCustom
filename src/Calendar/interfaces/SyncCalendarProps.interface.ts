import {customStyles} from './CustomStyles.interface';

export interface SyncCalendarProps {
  data: customStyles[];
  billColor?: String;
  promotionColor?: String;
  paymentDeadlineColor?: String;
}
