import React from 'react';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import {StylesProps} from './styles/Calendar.stylesheet';
import {utils} from './utils';
import useSyncCalendar from './hooks/useSyncCalendar';
import dayjs from 'dayjs';
import {Moment} from 'moment';
import {Logger} from './utils/logger';
import moment from 'moment';

type Props = {};

const Calendar = (props: Props) => {
  const {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    currentMonthNumberCalendarOne,
    currentYearNumberCalendarOne,
    setCurrentMonthNumberCalendarOne,
    setCurrentYearNumberCalendarOne,
    onCalendarOnePress,
    onCalendarTwoPress,
    onChangeDateCalendarOne,
    onChangeDateCalendarTwo,
  } = useSyncCalendar();

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

  /*  const minDateCalendarTwo = () => {
    let month = currentMonthNumberCalendarOne;
    let year = currentYearNumberCalendarOne;

    if (!currentMonthNumberCalendarOne) {
      month = utils.getCurrentMonth() + 1;
      year = new Date().getFullYear();
    }

    if (month === 11) {
      year! += 1;
    }

    const date = dayjs().month(month!).year(year!).date(1).toDate();

    Logger.log(date!.toString());
    return date;
  }; */

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onDateChangeCalendarOne}
        onMonthChange={onMonthChangeCalendarOne}
        selectedStartDate={startCalendarOne}
        selectedEndDate={endCalendarOne}
      />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onDateChangeCalendarTwo}
        initialDate={utils.getDateNextMonth(
          currentMonthNumberCalendarOne ?? utils.getCurrentMonth(),
          currentYearNumberCalendarOne ?? new Date().getFullYear(),
        )}
        //minDate={minDateCalendarTwo()}
        //maxDate={moment('2023-12-31').toDate()}
        restrictMonthNavigation={true}
        selectedStartDate={startCalendarTwo}
        selectedEndDate={endCalendarTwo}
      />
    </>
  );
};

export default Calendar;
