import React, {useState} from 'react';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import dayjs from 'dayjs';
import {styles, StylesProps} from './styles/Calendar.stylesheet';
import {Moment} from 'moment';
import useCalendar from './hooks/useCalendar';
import {Button, Text} from 'react-native';

type Props = {};

const Calendar = (props: Props) => {
  const [start1, setStart1] = useState<Date | undefined>();
  const [end1, setEnd1] = useState<Date | undefined>();
  const [start2, setStart2] = useState<Date | undefined>();
  const [end2, setEnd2] = useState<Date | undefined>();

  const reset = () => {
    setStart1(undefined);
    setEnd1(undefined);
    setStart2(undefined);
    setEnd2(undefined);
  };

  const getToday = () => {
    return dayjs().toDate();
  };

  const getNextMonth = () => {
    return dayjs()
      .month(dayjs().month() + 1)
      .date(1)
      .toDate();
  };

  const momentToDate = (date: Moment) => {
    return date.toDate();
  };

  enum CalendarType {
    ONE,
    TWO,
  }

  const isCalendar = (date: Moment): CalendarType => {
    if (dayjs().month() === date.month()) {
      return CalendarType.ONE;
    }
    return CalendarType.TWO;
  };

  const onChangeDate: DateChangedCallback = (date, type) => {
    if (!date) {
      return;
    }

    isCalendar(date);
  };

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        minDate={getToday()}
        onDateChange={onChangeDate} /* 
        selectedStartDate={start1}
        selectedEndDate={end1} */
      />
      <Button title="Reset" onPress={reset} />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onChangeDate} /* 
        selectedStartDate={start2}
        selectedEndDate={end2} */
        initialDate={getNextMonth()}
        minDate={getNextMonth()}
      />
    </>
  );
};

export default Calendar;
