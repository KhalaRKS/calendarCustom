import React, {useEffect, useState} from 'react';
import {useFivvyCalendarProvider} from '../../../hooks/useFivvyCalendarProvider';
import useSingleCalendar from './useSingleCalendar';
import {
  getNextMonth,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} from '../../../helpers/date';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {Moment} from 'moment';
import {SELECTION_DATE} from '../../../types/selectionDate.type';

const useSyncCalendars = (
  onSelectDate?: (
    start: Date | undefined,
    end: Date | undefined,
  ) => void | undefined,
  onMonthChange?: (() => void) | undefined,
) => {
  const {start, end, setStart, setEnd} = useFivvyCalendarProvider();

  const [loading, setLoadgin] = useState<boolean>(false);

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
    setLoadgin(true);
    // si no hay fecha de inicio, se setea la fecha seleccionada
    if (!start && !end) {
      setStart(date.toDate());
      setSelectedStartDateOne(date.toDate());
      setSelectedStartDateTwo(date.toDate());

      if (onSelectDate) {
        onSelectDate(date.toDate(), undefined);
      }

      return;
    }

    if (start && !end) {
      // si hay fecha de inicio, se setea la fecha de fin
      setEnd(date.toDate());
      setSelectedEndDateOne(date.toDate());
      setSelectedEndDateTwo(date.toDate());

      if (onSelectDate) {
        onSelectDate(start, date.toDate());
      }

      return;
    }

    if (start && end) {
      setStart(undefined);
      setEnd(undefined);
      setSelectedStartDateOne(undefined);
      setSelectedStartDateTwo(undefined);
      setSelectedEndDateOne(undefined);
      setSelectedEndDateTwo(undefined);

      if (onSelectDate) {
        onSelectDate(undefined, undefined);
      }

      return;
    }
  };

  const onPressCalendarTwo = (date: Moment) => {
    setLoadgin(true);

    if (!start && !end) {
      // mover el calendario 1 a la fecha seleccionada
      initialDateHandler(date.toDate());
      minDateHanlder(date.toDate());
      maxDateHanlder(date.toDate());
      setStart(date.toDate());
      setSelectedStartDateOne(date.toDate());
      setSelectedStartDateTwo(date.toDate());

      if (onSelectDate) {
        onSelectDate(date.toDate(), undefined);
      }

      return;
    }

    if (start && !end) {
      // si hay fecha de inicio, se setea la fecha de fin
      setEnd(date.toDate());
      setSelectedEndDateTwo(date.toDate());
      setSelectedEndDateOne(date.toDate());

      if (onSelectDate) {
        onSelectDate(start, date.toDate());
      }

      return;
    }

    if (start && end) {
      setStart(undefined);
      setEnd(undefined);
      setSelectedStartDateOne(undefined);
      setSelectedStartDateTwo(undefined);
      setSelectedEndDateOne(undefined);
      setSelectedEndDateTwo(undefined);

      if (onSelectDate) {
        onSelectDate(undefined, undefined);
      }

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

  useEffect(() => {
    if (loading) {
      setLoadgin(false);
    }
  }, [loading]);

  return {
    initialDateOne,
    initialDateTwo,
    minDateOne,
    minDateTwo,
    maxDateOne,
    maxDateTwo,
    selectedStartDateOne,
    selectedStartDateTwo,
    selectedEndDateOne,
    selectedEndDateTwo,
    onMonthChangeHandler,
    onDateChangeCalendarOne,
    onDateChangeCalendarTwo,
    loading,
  };
};

export default useSyncCalendars;
