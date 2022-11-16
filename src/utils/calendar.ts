import dayjs from 'dayjs';
import moment, {Moment} from 'moment';

export const utils = {
  getToday: (): Date => {
    return dayjs().toDate();
  },

  getNumberMonth: (date: Moment): number => {
    return moment(date).month();
  },

  getYear: (date: Moment): number => {
    return moment(date).year();
  },

  getCurrentMonth: () => {
    return dayjs().month();
  },

  getDateNextMonth: (month: number, year: number): Date => {
    let m = month;
    let y = year;

    if (month === 11) {
      m = 0;
      y = year + 1;
      return dayjs().month(m).year(y).date(1).toDate();
    }

    return dayjs()
      .month(m + 1)
      .year(y)
      .date(1)
      .toDate();
  },

  getMinDateSecondCalendar: (month: number = 1): Date => {
    return dayjs()
      .month(dayjs().month() + month)
      .date(1)
      .toDate();
  },

  getMaxDateSecondCalendar: (month: number = 1): Date => {
    return dayjs()
      .month(dayjs().month() + month)
      .endOf('month')
      .toDate();
  },
};
