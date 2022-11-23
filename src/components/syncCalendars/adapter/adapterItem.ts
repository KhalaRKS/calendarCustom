import {ItemCalendar} from './../../../models/itemCalendar.interface';

export default function adapterItem(item: ItemCalendar) {
  let customDateStyle = {
    day: {
      date: item.date,
      style: {
        backgroundColor: item.backgroundColor,
        borderWidth: 1,
        borderColor: item.borderColor,
      },
      textStyle: {color: 'black'},
      containerStyle: [],
      allowDisabled: false,
    },
    liabilities: item.liabilities ? item.liabilities : [],
    offers: item.offers ? item.offers : [],
  };
  return customDateStyle;
}
