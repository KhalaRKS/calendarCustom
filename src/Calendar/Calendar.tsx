import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import useSyncCalendar from './hooks/useSyncCalendar';
import {StylesProps} from './styles/Calendar.stylesheet';

type Props = {};

const Calendar = (props: Props) => {
  const {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onDateChangeCalendarOne,
    onMonthChangeCalendarOne,
    onDateChangeCalendarTwo,
    getInitialAndMinDateCalendarTwo,
    maxDateCalendarTwo,
  } = useSyncCalendar();

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
