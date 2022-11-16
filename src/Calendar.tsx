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
        initialDate={getInitialAndMinDateCalendarTwo()}
        minDate={getInitialAndMinDateCalendarTwo()}
        maxDate={maxDateCalendarTwo()}
        restrictMonthNavigation={true}
        selectedStartDate={startCalendarTwo}
        selectedEndDate={endCalendarTwo}
      />
    </>
  );
};

export default Calendar;
