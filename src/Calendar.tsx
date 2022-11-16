import React, {useEffect, useRef, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {styles, StylesProps} from './styles/Calendar.stylesheet';
import useCalendar from './hooks/useCalendar';
import {Button, Text} from 'react-native';
import {utils} from './utils';
import {Logger} from './utils/logger';
import {Moment} from 'moment';

type Props = {};

const Calendar = (props: Props) => {
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

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        minDate={utils.getToday()}
        onDateChange={(date, type) => {
          onChangeDateCalendarOne(date, type);
          onCalendarOnePress();
        }}
        selectedStartDate={startCalendarOne}
        selectedEndDate={endCalendarOne}
      />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={(date, type) => {
          onChangeDateCalendarTwo(date, type);
          onCalendarTwoPress(date);
        }}
        initialDate={utils.getNextMonth()}
        minDate={utils.getNextMonth()}
        selectedStartDate={startCalendarTwo}
        selectedEndDate={endCalendarTwo}
      />
      <Button
        title="Reset"
        onPress={() => {
          resetCalendarOne();
          resetCalendarTwo();
        }}
      />
      <Button
        title="log"
        onPress={() => {
          Logger.log(
            `start1: ${startCalendarOne}, end1: ${endCalendarOne}, start2: ${startCalendarTwo}, end2: ${endCalendarTwo}`,
          );
        }}
      />
    </>
  );
};

export default Calendar;
