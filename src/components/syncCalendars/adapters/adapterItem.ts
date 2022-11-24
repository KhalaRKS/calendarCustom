import {ItemCalendar} from '../../../models/itemCalendar.interface';
import {IItemaAdapted} from '../../../models/itemsAdapted.interface';

export const adapterItem = (items: ItemCalendar[]) => {
  const itemsAdapted: IItemaAdapted[] = [];

  items.forEach(item => {
    const adapted = itemsAdapted.find(
      itemRepeat => itemRepeat.item.date.getTime() === item.date.getTime(),
    );
    if (adapted) {
      adapted.quantity++;
    } else {
      itemsAdapted.push({item, quantity: 1});
    }
  });

  return itemsAdapted;
};
