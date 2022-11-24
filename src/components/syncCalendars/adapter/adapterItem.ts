import {CustomDateStyle} from '../../../models/customDateStyle.interface';
import {ItemCalendar} from './../../../models/itemCalendar.interface';

export default function adapterItem(item: ItemCalendar): CustomDateStyle {
  let customDateStyle = {
    date: item.date,
    style: {
      backgroundColor: item.backgroundColor,
      borderWidth: 1,
      borderColor: item.borderColor,
      width: item.liabilities ? (item.liabilities?.length > 3 ? 50 : 32) : 32,
      height: item.liabilities ? (item.liabilities?.length > 3 ? 50 : 32) : 32,
    },
    textStyle: {color: 'black'},
    containerStyle: {
      position: 'relative',
      width: item.liabilities ? (item.liabilities?.length > 3 ? 50 : 32) : 32,
      height: item.liabilities ? (item.liabilities?.length > 3 ? 50 : 32) : 32,
    },

    allowDisabled: false,
    liabilities: item.liabilities ? item.liabilities : [],
    offers: item.offers ? item.offers : [],
  };
  return customDateStyle;
}
