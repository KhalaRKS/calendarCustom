import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useSingleCalendar from './hooks/useSingleCalendar';
import CalendarPicker from 'react-native-calendar-picker';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import moment, {Moment} from 'moment';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {SELECTION_DATE} from '../../types/selectionDate.type';
import {
  getNextMonth,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} from '../../helpers/date';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
}

const SyncCalendars = ({items, onMonthChange}: Props) => {
  const [styles, setStyles] = useState(undefined);
  const [lastInitialDate, setLastInitialDate] = useState<Date | undefined>(
    undefined,
  );

  const {
    initialDate: initialDateOne,
    setInitialDate: setInitialDateOne,
    minDate: minDateOne,
    setMinDate: setMinDateOne,
    maxDate: maxDateOne,
    setMaxDate: setMaxDateOne,
    selectedStartDate: selectedStartDateOne,
    setSelectedStartDate: setSelectedStartDateOne,
    selectedEndDate: selectedEndDateOne,
    setSelectedEndDate: setSelectedEndDateOne,
  } = useSingleCalendar();

  const {
    initialDate: initialDateTwo,
    setInitialDate: setInitialDateTwo,
    minDate: minDateTwo,
    setMinDate: setMinDateTwo,
    maxDate: maxDateTwo,
    setMaxDate: setMaxDateTwo,
    selectedStartDate: selectedStartDateTwo,
    setSelectedStartDate: setSelectedStartDateTwo,
    selectedEndDate: selectedEndDateTwo,
    setSelectedEndDate: setSelectedEndDateTwo,
  } = useSingleCalendar();

  useEffect(() => {
    if (items) {
      // TODO: This is where we need to set the customDatesStyles for each calendar
      setStyles(undefined);
    }
  }, [items]);

  // initial date sync
  const initialDateHandler = (initialDate?: Date) => {
    const today = initialDate || new Date();
    const nextMonth = getNextMonth(today);
    setInitialDateOne(today);
    setInitialDateTwo(nextMonth);
  };

  const minDateHanlder = (date?: Date) => {
    const nextMonth = getNextMonth(date || new Date());
    const nextMonthFirstDay = getFirstDayOfMonth(nextMonth);
    setMinDateTwo(nextMonthFirstDay);
  };

  const maxDateHanlder = (date?: Date) => {
    const nextMonth = getNextMonth(date || new Date());
    const nextMonthLastDay = getLastDayOfMonth(nextMonth);
    setMaxDateTwo(nextMonthLastDay);
  };

  const onMonthChangeHandler: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    initialDateHandler(date.toDate());
    minDateHanlder(date.toDate());
    maxDateHanlder(date.toDate());
    onMonthChange && onMonthChange();
  };

  useEffect(() => {
    initialDateHandler();
    minDateHanlder();
    maxDateHanlder();
  }, []);

  //
  const onPressCalendarOne = () => {};
  const onPressCalendarTwo = () => {};

  const onDateChangeCalendarOne: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {};

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
        onDateChange={undefined}
        onMonthChange={onMonthChangeHandler}
        customDatesStyles={styles}
      />
      <CalendarPicker
        allowRangeSelection={true}
        restrictMonthNavigation={true}
        initialDate={initialDateTwo}
        minDate={minDateTwo}
        maxDate={maxDateTwo}
        selectedStartDate={selectedStartDateTwo}
        selectedEndDate={selectedEndDateTwo}
        onDateChange={undefined}
        onMonthChange={undefined}
        customDatesStyles={styles}
      />
    </>
  );
};

export default SyncCalendars;

const styles = StyleSheet.create({});
