import dayjs from 'dayjs';
import moment, {Moment} from 'moment';

export const utils = {
  getToday: () => {
    return dayjs().toDate();
  },

  getNextMonth: () => {
    return dayjs()
      .month(dayjs().month() + 1)
      .date(1)
      .toDate();
  },

  momentToDate: (date: Moment) => {
    return date.toDate();
  },
};
