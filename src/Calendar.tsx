import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {styles, StylesProps} from './styles/Calendar.stylesheet';
import {Button} from 'react-native';
import {utils} from './utils';
import {Logger} from './utils/logger';
import useSyncCalendar from './hooks/useSyncCalendar';
import dayjs from 'dayjs';

type Props = {};

const Calendar = (props: Props) => {
  const {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    currentMonthCalendarOne,
    currentYearCalendarOne,
    setCurrentMonthCalendarOne,
    onCalendarOnePress,
    onCalendarTwoPress,
    onChangeDateCalendarOne,
    onChangeDateCalendarTwo,
    setCurrentYearCalendarOne,
  } = useSyncCalendar();

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={(date, type) => {
          onChangeDateCalendarOne(date, type);
          onCalendarOnePress(date);
        }}
        onMonthChange={date => {
          setCurrentMonthCalendarOne(utils.getNumberMonth(date));
          setCurrentYearCalendarOne(utils.getYear(date));
        }}
        selectedStartDate={startCalendarOne}
        selectedEndDate={endCalendarOne}
      />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={(date, type) => {
          onChangeDateCalendarTwo(date, type);
          onCalendarTwoPress(date);
        }}
        initialDate={utils.getNextMonth(
          currentMonthCalendarOne ?? utils.getCurrentMonth(),
          currentYearCalendarOne ?? new Date().getFullYear(),
        )}
        minDate={dayjs()
          .month(currentMonthCalendarOne ?? utils.getCurrentMonth() + 1)
          .year(currentYearCalendarOne ?? new Date().getFullYear())
          .date(1)
          .toDate()}
        maxDate={utils.getMaxDateSecondCalendar()}
        restrictMonthNavigation={true}
        selectedStartDate={startCalendarTwo}
        selectedEndDate={endCalendarTwo}
      />
    </>
  );
};

export default Calendar;
