import moment from 'moment';
import {ItemCalendar} from '../models/itemCalendar.interface';

const randomColorRGB = () => {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return `rgb(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)})`;
};

const randomDay = () => {
  const random = Math.floor(Math.random() * 30);
  return random;
};

export const generateDates = (startDate: Date, endDate: Date) => {
  const dates: ItemCalendar[] = [];
  const currentDate = moment(startDate);
  const stopDate = moment(endDate);
  while (currentDate <= stopDate) {
    const color = randomColorRGB();

    dates.push({
      date: currentDate.toDate(),
      backgroundColor: color,
      borderColor: color.replace('rgb', 'rgba').replace(')', ', 0.5)'),
      title: `Titulo ${currentDate.format('DD/MM/YYYY')}`,
      description: `Description ${currentDate.format('DD/MM/YYYY')}`,
      value: randomDay(),
    });
    currentDate.add(randomDay(), 'days');
  }
  return dates;
};
