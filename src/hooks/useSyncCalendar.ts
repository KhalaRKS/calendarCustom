import React from 'react';
import useCalendar from './useCalendar';
import {Moment} from 'moment';
import {utils} from '../utils/calendar';

const useSyncCalendar = () => {
  const {
    start: startCalendarOne,
    end: endCalendarOne,
    setStart: setStartCalendarOne,
    setEnd: setEndCalendarOne,
    onChangeDate: onChangeDateCalendarOne,
    reset: resetCalendarOne,
  } = useCalendar();

  const {
    start: startCalendarTwo,
    end: endCalendarTwo,
    setStart: setStartCalendarTwo,
    setEnd: setEndCalendarTwo,
    onChangeDate: onChangeDateCalendarTwo,
    reset: resetCalendarTwo,
  } = useCalendar();

  const onCalendarOnePress = () => {
    if (startCalendarTwo && endCalendarTwo) {
      resetCalendarTwo();
    }
  };

  const onCalendarTwoPress = (date: Moment) => {
    if (startCalendarOne && endCalendarOne) {
      resetCalendarOne();
    }

    if (startCalendarOne && !endCalendarOne) {
      setStartCalendarTwo(utils.getNextMonth());
      setEndCalendarTwo(date.toDate());
      setEndCalendarOne(date.toDate());
    }
  };

  return {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onChangeDateCalendarOne,
    onChangeDateCalendarTwo,
    onCalendarOnePress,
    onCalendarTwoPress,
  };
};

export default useSyncCalendar;
