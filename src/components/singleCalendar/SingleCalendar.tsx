import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker, {
  CustomDatesStylesFunc,
  CustomDateStyle,
  DateChangedCallback,
} from 'react-native-calendar-picker';
import {Moment} from 'moment';
import {SELECTION_DATE} from '../../types/selectionDate.type';
import useSingleCalendar from './hooks/useSingleCalendar';

const SingleCalendar = () => {
  const {
    minDate,
    maxDate,
    selectedStartDate,
    selectedEndDate,
    onDateChange,
    customDatesStyles,
    initialDate,
    onMonthChange,
    setCustomDateStyles,
    setInitialDate,
    setMaxDate,
    setMinDate,
    setSelectedEndDate,
    setSelectedStartDate,
    setOnDateChange,
    setOnMonthChange,
  } = useSingleCalendar();

  return (
    <CalendarPicker
      allowRangeSelection={true}
      restrictMonthNavigation={true}
      initialDate={initialDate}
      minDate={minDate}
      maxDate={maxDate}
      selectedStartDate={selectedStartDate}
      selectedEndDate={selectedEndDate}
      onDateChange={onDateChange}
      onMonthChange={onMonthChange}
      customDatesStyles={customDatesStyles}
    />
  );
};

export default SingleCalendar;

const styles = StyleSheet.create({});
