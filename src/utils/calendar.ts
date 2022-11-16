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

  getNextMonth: (month: number = 0, year: number): Date => {
    return dayjs()
      .month(month + 1)
      .year(year)
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
