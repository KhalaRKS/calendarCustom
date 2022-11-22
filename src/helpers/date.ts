import moment from 'moment';

export const getNextMonth = (date: Date) => {
  return moment(date).add(1, 'month').toDate();
};
