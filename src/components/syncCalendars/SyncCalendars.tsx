import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useSingleCalendar from './hooks/useSingleCalendar';
import CalendarPicker from 'react-native-calendar-picker';

const SyncCalendars = () => {
  const {
    initialDate: initialDateOne,
    minDate: minDateOne,
    maxDate: maxDateOne,
    selectedStartDate: selectedStartDateOne,
    selectedEndDate: selectedEndDateOne,
    onDateChange: onDateChangeOne,
    onMonthChange: onMonthChangeOne,
    customDatesStyles: customDatesStylesOne,
  } = useSingleCalendar();

  const {
    initialDate: initialDateTwo,
    minDate: minDateTwo,
    maxDate: maxDateTwo,
    selectedStartDate: selectedStartDateTwo,
    selectedEndDate: selectedEndDateTwo,
    onDateChange: onDateChangeTwo,
    onMonthChange: onMonthChangeTwo,
    customDatesStyles: customDatesStylesTwo,
  } = useSingleCalendar();

  return (
    <>
      <CalendarPicker
        allowRangeSelection={true}
        restrictMonthNavigation={true}
        initialDate={initialDateOne}
        minDate={minDateOne}
        maxDate={maxDateOne}
        selectedStartDate={selectedStartDateOne}
        selectedEndDate={selectedEndDateOne}
        onDateChange={onDateChangeOne}
        onMonthChange={onMonthChangeOne}
        customDatesStyles={customDatesStylesOne}
      />
      <CalendarPicker
        allowRangeSelection={true}
        restrictMonthNavigation={true}
        initialDate={initialDateTwo}
        minDate={minDateTwo}
        maxDate={maxDateTwo}
        selectedStartDate={selectedStartDateTwo}
        selectedEndDate={selectedEndDateTwo}
        onDateChange={onDateChangeTwo}
        onMonthChange={onMonthChangeTwo}
        customDatesStyles={customDatesStylesTwo}
      />
    </>
  );
};

export default SyncCalendars;

const styles = StyleSheet.create({});
