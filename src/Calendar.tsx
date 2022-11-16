import React, {useState} from 'react';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import dayjs from 'dayjs';
import {styles, StylesProps} from './styles/Calendar.stylesheet';
import {Moment} from 'moment';
import useCalendar from './hooks/useCalendar';
import {Button, Text} from 'react-native';
import {TYPESELECT} from './types/select.type';
import {utils} from './utils';
import {Logger} from './utils/logger';

type Props = {};

const Calendar = (props: Props) => {
  const [start, setStart] = useState<Date | undefined>();
  const [end, setEnd] = useState<Date | undefined>();

  const reset = () => {
    setStart(undefined);
    setEnd(undefined);
    setStart2(undefined);
    setEnd2(undefined);
  };

  const onChangeDate: DateChangedCallback = (date, type: TYPESELECT) => {
    if (!date) {
      return;
    }

    if (type === 'START_DATE') {
      Logger.log('START_DATE');
      setStart(date.toDate());
      setEnd(undefined);
    }

    if (type === 'END_DATE') {
      Logger.log('END_DATE');
      setEnd(date.toDate());
    }
  };

  // ------------------------------------------------------------
  const [start2, setStart2] = useState<Date | undefined>();
  const [end2, setEnd2] = useState<Date | undefined>();

  const onChangeDate2: DateChangedCallback = (date, type) => {
    if (!date) {
      return;
    }
  };

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        minDate={utils.getToday()}
        onDateChange={onChangeDate}
        selectedStartDate={start}
        selectedEndDate={end}
      />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onChangeDate2}
        initialDate={utils.getNextMonth()}
        minDate={utils.getNextMonth()}
      />
      <Button title="Reset" onPress={reset} />
      <Button
        title="log"
        onPress={() => {
          Logger.log(
            `start1: ${start}, end1: ${end}, start2: ${start2}, end2: ${end2}`,
          );
        }}
      />
    </>
  );
};

export default Calendar;
