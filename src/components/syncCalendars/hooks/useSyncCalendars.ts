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
import adapterItemStyle from '../adapters/adapterItemStyle';
import {adapterItem} from '../adapters/adapterItem';
import {CustomDateStyle} from '../../../models/customDateStyle.interface';
import {ItemCalendar} from '../../../models/itemCalendar.interface';
import {IItemaAdapted} from '../../../models/itemsAdapted.interface';
import moment from 'moment';
import {ReferenceCalendar} from '../../../enums/refCalendar.enum';
import {
  SyncCalendarsCases,
  getSyncCalendarsCase,
} from '../services/syncCases.service';

const useSyncCalendars = (
  onSelectDate?: (
    start: Date | undefined,
    end: Date | undefined,
    item?: any[] | any,
  ) => void | undefined,
  onMonthChange?: (() => void) | undefined,
  items?: ItemCalendar[],
  disabledRageSelection?: boolean,
) => {
  const {start, end, setStart, setEnd} = useFivvyCalendarProvider();
  const [styles, setStyles] = useState<any>(undefined);
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

  const selectedStart = (date?: Moment) => {
    setStart(date?.toDate());
    setSelectedStartDateOne(date?.toDate());
    setSelectedStartDateTwo(date?.toDate());
  };

  const selectedEnd = (date?: Moment) => {
    setEnd(date?.toDate());
    setSelectedEndDateOne(date?.toDate());
    setSelectedEndDateTwo(date?.toDate());
  };

  const resetDates = () => {
    setStart(undefined);
    setEnd(undefined);
    setSelectedStartDateOne(undefined);
    setSelectedStartDateTwo(undefined);
    setSelectedEndDateOne(undefined);
    setSelectedEndDateTwo(undefined);
  };

  const dateHandler = (date?: Date | Moment | undefined) => {
    let d = date;

    moment.isMoment(date) && (d = date.toDate());

    initialDateHandler(d as Date | undefined);
    minDateHanlder(d as Date | undefined);
    maxDateHanlder(d as Date | undefined);
  };

  const onMonthChangeHandler: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    dateHandler(date);
    onMonthChange && onMonthChange();
  };

  const getDateInfo = (date?: Date) => {
    if (!date) {
      return;
    }

    const dateInfo = items?.filter(
      item =>
        moment(item.date).format('YYYY-MM-DD') ===
        moment(date).format('YYYY-MM-DD'),
    );

    return dateInfo;
  };

  const calendarCases = {
    [SyncCalendarsCases.NO_START_NO_END]: (
      date: Moment,
      calendar: ReferenceCalendar,
    ) => {
      calendar === ReferenceCalendar.ONE && dateHandler(date);
      selectedStart(date);
      onSelectDate && onSelectDate(date.toDate(), undefined);

      return;
    },

    [SyncCalendarsCases.START_NO_END]: (date: Moment) => {
      selectedEnd(date);
      onSelectDate && onSelectDate(start, date.toDate());

      return;
    },

    [SyncCalendarsCases.START_END]: (date: Moment) => {
      resetDates();
      onSelectDate && onSelectDate(undefined, undefined);

      return;
    },
  };

  const onPressCalendar = (date: Moment, calendar: ReferenceCalendar) => {
    setLoadgin(true);
    const syncCalendarsCase = getSyncCalendarsCase(start, end);
    calendarCases[syncCalendarsCase](date, calendar);
  };

  const infoItemHandler = (date: Moment) => {
    if (!onSelectDate) return;

    const dateInfo = getDateInfo(date && date.toDate());
    onSelectDate(
      date && date.toDate(),
      date && date.toDate(),
      dateInfo?.map(item => {
        return {
          title: item.title,
          description: item.description,
          value: item.value,
          date: item.date,
          cb: item.callback,
        };
      }),
    );
  };

  const onDateChangeCalendarOne: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    if (!disabledRageSelection) {
      onPressCalendar(date, ReferenceCalendar.ONE);
    }

    infoItemHandler(date);
  };

  const onDateChangeCalendarTwo: DateChangedCallback = (
    date: Moment,
    type: SELECTION_DATE,
  ) => {
    if (!disabledRageSelection) {
      onPressCalendar(date, ReferenceCalendar.TWO);
    }

    infoItemHandler(date);
  };

  useEffect(() => {
    dateHandler();
  }, []);

  useEffect(() => {
    if (loading) {
      setLoadgin(false);
    }
  }, [loading]);

  useEffect(() => {
    if (items) {
      const itemsAdapted = adapterItem(items);
      const customDatesStyles: CustomDateStyle[] = itemsAdapted.map(item => {
        return adapterItemStyle(item.item, item.quantity);
      });

      setStyles(customDatesStyles);
    }
  }, [items]);

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
    styles,
    loading,
  };
};

export default useSyncCalendars;
