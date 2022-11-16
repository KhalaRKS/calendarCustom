import useSingleCalendar from './useSingleCalendar';
import {Moment} from 'moment';
import {utils} from '../utils/calendar';
import moment from 'moment';
import {DateChangedCallback} from 'react-native-calendar-picker';

const useSyncCalendar = () => {
  const {
    start: startCalendarOne,
    end: endCalendarOne,
    setStart: setStartCalendarOne,
    setEnd: setEndCalendarOne,
    onChangeDate: onChangeDateCalendarOne,
    reset: resetCalendarOne,
    currentMonthNumber: currentMonthNumberCalendarOne,
    currentYearNumber: currentYearNumberCalendarOne,
    setCurrentMonthNumber: setCurrentMonthNumberCalendarOne,
    setCurrentYearNumber: setCurrentYearNumberCalendarOne,
  } = useSingleCalendar();

  const {
    start: startCalendarTwo,
    end: endCalendarTwo,
    setStart: setStartCalendarTwo,
    setEnd: setEndCalendarTwo,
    onChangeDate: onChangeDateCalendarTwo,
    reset: resetCalendarTwo,
  } = useSingleCalendar();

  const onCalendarOnePress = (date: Moment) => {
    if (startCalendarTwo && endCalendarTwo) {
      resetCalendarTwo();
    }
  };

  const onCalendarTwoPress = (date: Moment) => {
    if (startCalendarOne && endCalendarOne) {
      resetCalendarOne();
    }

    if (startCalendarOne && !endCalendarOne) {
      setEndCalendarTwo(date.toDate());
      setEndCalendarOne(date.toDate());
    }
  };

  const onDateChangeCalendarOne: DateChangedCallback = (date, type) => {
    onChangeDateCalendarOne(date, type);
    onCalendarOnePress(date);
  };

  const onMonthChangeCalendarOne = (date: Moment) => {
    setCurrentMonthNumberCalendarOne(utils.getNumberMonth(date));
    setCurrentYearNumberCalendarOne(utils.getYear(date));
  };

  const onDateChangeCalendarTwo: DateChangedCallback = (date, type) => {
    onChangeDateCalendarTwo(date, type);
    onCalendarTwoPress(date);
  };

  const maxDateCalendarTwo = () => {
    const currentDate: Date = utils.getDateNextMonth(
      currentMonthNumberCalendarOne ?? utils.getCurrentMonth(),
      currentYearNumberCalendarOne ?? new Date().getFullYear(),
    );

    const maxDate = moment(currentDate).endOf('month');

    return maxDate.toDate();
  };

  const getInitialAndMinDateCalendarTwo = () => {
    return utils.getDateNextMonth(
      currentMonthNumberCalendarOne ?? utils.getCurrentMonth(),
      currentYearNumberCalendarOne ?? new Date().getFullYear(),
    );
  };

  return {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onDateChangeCalendarOne,
    onMonthChangeCalendarOne,
    onDateChangeCalendarTwo,
    getInitialAndMinDateCalendarTwo,
    maxDateCalendarTwo,
  };
};

export default useSyncCalendar;
