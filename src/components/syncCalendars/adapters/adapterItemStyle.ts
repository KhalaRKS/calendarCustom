import {CustomDateStyle} from '../../../models/customDateStyle.interface';
import {ItemCalendar} from '../../../models/itemCalendar.interface';

export default function adapterItemStyle(
  item: ItemCalendar,
  scale: number,
): CustomDateStyle {
  let customDateStyle = {
    date: item.date,
    style: {
      borderRadius: 50,
      borderWidth: 1,
      backgroundColor: item.backgroundColor,
      borderColor: item.borderColor,
      transform: [
        {scale: Number(`1.${scale}`) > 1.5 ? 1.5 : Number(`1.${scale}`)},
      ],
    },
    textStyle: {color: 'black'},
  };

  return customDateStyle;
}
