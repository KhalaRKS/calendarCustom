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
  const [start, setStart] = useState<Date | undefined>(undefined);
  const [end, setEnd] = useState<Date | undefined>(undefined);

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

  const initializeSyncCalendars = () => {
    initialDateHandler();
    minDateHanlder();
    maxDateHanlder();
  };

  useEffect(() => {
    initializeSyncCalendars();
  }, []);

  //

  const onPressCalendarOne = (date: Moment) => {
    // si no hay fecha de inicio, se setea la fecha seleccionada
    if (!start && !end) {
      setStart(date.toDate());
      setSelectedStartDateOne(date.toDate());
      setSelectedStartDateTwo(date.toDate());
      return;
    }

    if (start && !end) {
      // si hay fecha de inicio, se setea la fecha de fin
      setEnd(date.toDate());
      setSelectedEndDateOne(date.toDate());
      setSelectedEndDateTwo(date.toDate());
      return;
    }

    if (start && end) {
      setStart(undefined);
      setEnd(undefined);
      setSelectedStartDateOne(undefined);
      setSelectedStartDateTwo(undefined);
      setSelectedEndDateOne(undefined);
      setSelectedEndDateTwo(undefined);
      return;
    }
  };

  const onPressCalendarTwo = (date: Moment) => {
    if (!start && !end) {
      // mover el calendario 1 a la fecha seleccionada
      initialDateHandler(date.toDate());
      minDateHanlder(date.toDate());
      maxDateHanlder(date.toDate());
      setStart(date.toDate());
      setSelectedStartDateOne(date.toDate());
      setSelectedStartDateTwo(date.toDate());
      return;
    }

    if (start && !end) {
      // si hay fecha de inicio, se setea la fecha de fin
      setEnd(date.toDate());
      setSelectedEndDateOne(date.toDate());
      setSelectedEndDateTwo(date.toDate());
      return;
    }

    if (start && end) {
      setStart(undefined);
      setEnd(undefined);
      setSelectedStartDateOne(undefined);
      setSelectedStartDateTwo(undefined);
      setSelectedEndDateOne(undefined);
      setSelectedEndDateTwo(undefined);
      return;
    }
  };

  const onDateChangeCalendarOne: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    onPressCalendarOne(date);
  };

  const onDateChangeCalendarTwo: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    onPressCalendarTwo(date);
  };

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
        onDateChange={onDateChangeCalendarOne}
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
        onDateChange={onDateChangeCalendarTwo}
        onMonthChange={undefined}
        customDatesStyles={styles}
      />
    </>
  );
};

export default SyncCalendars;

const styles = StyleSheet.create({});
