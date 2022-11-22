import moment from 'moment';

export const getNextMonth = (date: Date) => {
  return moment(date).add(1, 'month').toDate();
};

export const getFirstDayOfMonth = (date: Date) => {
  return moment(date).startOf('month').toDate();
};
