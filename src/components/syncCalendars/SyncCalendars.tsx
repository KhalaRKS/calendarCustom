import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useSingleCalendar from './hooks/useSingleCalendar';
import CalendarPicker from 'react-native-calendar-picker';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import moment, {Moment} from 'moment';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {SELECTION_DATE} from '../../types/selectionDate.type';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
}

const SyncCalendars = ({items, onMonthChange}: Props) => {
  const [styles, setStyles] = useState(undefined);

  const {
    initialDate: initialDateOne,
    setInitialDate: setInitialDateOne,
    minDate: minDateOne,
    maxDate: maxDateOne,
    selectedStartDate: selectedStartDateOne,
    selectedEndDate: selectedEndDateOne,
  } = useSingleCalendar();

  const {
    initialDate: initialDateTwo,
    setInitialDate: setInitialDateTwo,
    minDate: minDateTwo,
    maxDate: maxDateTwo,
    selectedStartDate: selectedStartDateTwo,
    selectedEndDate: selectedEndDateTwo,
  } = useSingleCalendar();

  useEffect(() => {
    if (items) {
      // TODO: This is where we need to set the customDatesStyles for each calendar
      setStyles(undefined);
    }
  }, [items]);

  const initialDateHandler = (initialDate?: Date) => {
    console.log('initialDateHandler', initialDate);
    const today = initialDate || new Date();
    const nextMonth = moment(today).add(1, 'month').toDate();
    setInitialDateOne(today);
    setInitialDateTwo(nextMonth);
  };

  const onMonthChangeHandler: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    const nextMonth = moment(date).add(1, 'month').toDate();
    console.log('prevMonth', date, 'nextMonth', nextMonth);
    initialDateHandler(nextMonth);
  };

  useEffect(() => {
    initialDateHandler();
  }, []);

  const onPressCalendarOne = () => {};
  const onPressCalendarTwo = () => {};

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
