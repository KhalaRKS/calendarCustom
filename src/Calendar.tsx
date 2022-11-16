import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {styles, StylesProps} from './styles/Calendar.stylesheet';
import {Button} from 'react-native';
import {utils} from './utils';
import {Logger} from './utils/logger';
import useSyncCalendar from './hooks/useSyncCalendar';

type Props = {};

const Calendar = (props: Props) => {
  const {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onCalendarOnePress,
    onCalendarTwoPress,
    onChangeDateCalendarOne,
    onChangeDateCalendarTwo,
  } = useSyncCalendar();

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
