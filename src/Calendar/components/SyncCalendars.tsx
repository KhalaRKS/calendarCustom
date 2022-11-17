import React, {useEffect, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import useSyncCalendar from '../hooks/useSyncCalendar';
import {StylesProps} from '../styles/Calendar.stylesheet';
import {Days} from '../constants/constants';
import useCustomStyles from '../hooks/useCustomStyles';
import {SyncCalendarProps} from '../interfaces/SyncCalendarProps.interface';

function SyncCalendars({
  data,
  billColor,
  promotionColor,
  paymentDeadlineColor,
}: SyncCalendarProps) {
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

  const {customStyles} = useCustomStyles(data);

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onDateChangeCalendarOne}
        onMonthChange={onMonthChangeCalendarOne}
        selectedStartDate={startCalendarOne}
        selectedEndDate={endCalendarOne}
        customDatesStyles={customStyles}
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
        customDatesStyles={customStyles}
        // cuanto mas grand eel numero, mas achica el calendario
        scaleFactor={375}
      />
    </>
  );
}

export default SyncCalendars;
