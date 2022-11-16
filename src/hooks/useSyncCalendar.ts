import React from 'react';
import useSingleCalendar from './useSingleCalendar';
import {Moment} from 'moment';
import {utils} from '../utils/calendar';
import {Logger} from '../utils/logger';

const useSyncCalendar = () => {
  const {
    start: startCalendarOne,
    end: endCalendarOne,
    setStart: setStartCalendarOne,
    setEnd: setEndCalendarOne,
    onChangeDate: onChangeDateCalendarOne,
    reset: resetCalendarOne,
    currentMonthNumber: currentMonthNumberCalendarOne,
    currentYearNumber: currentYearNumberCalendarOne,
    setCurrentMonthNumber: setCurrentMonthNumberCalendarOne,
    setCurrentYearNumber: setCurrentYearNumberCalendarOne,
  } = useSingleCalendar();

  const {
    start: startCalendarTwo,
    end: endCalendarTwo,
    setStart: setStartCalendarTwo,
    setEnd: setEndCalendarTwo,
    onChangeDate: onChangeDateCalendarTwo,
    reset: resetCalendarTwo,
  } = useSingleCalendar();

  const onCalendarOnePress = (date: Moment) => {
    if (startCalendarTwo && endCalendarTwo) {
      resetCalendarTwo();
    }
  };

  const onCalendarTwoPress = (date: Moment) => {
    if (startCalendarOne && endCalendarOne) {
      resetCalendarOne();
    }

    if (startCalendarOne && !endCalendarOne) {
      setEndCalendarTwo(date.toDate());
      setEndCalendarOne(date.toDate());
    }
  };

  return {
    startCalendarOne,
    endCalendarOne,
    currentMonthNumberCalendarOne,
    currentYearNumberCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onCalendarOnePress,
    onChangeDateCalendarOne,
    setCurrentMonthNumberCalendarOne,
    setCurrentYearNumberCalendarOne,
    onChangeDateCalendarTwo,
    onCalendarTwoPress,
  };
};

export default useSyncCalendar;
