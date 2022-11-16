import {useState} from 'react';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {TYPESELECT} from '../types/select.type';

type Props = {};

const useSingleCalendar = () => {
  const [start, setStart] = useState<Date | undefined>();
  const [end, setEnd] = useState<Date | undefined>();
  const [currentMonthNumber, setCurrentMonthNumber] = useState<
    number | undefined
  >();
  const [currentYearNumber, setCurrentYearNumber] = useState<
    number | undefined
  >();

  const reset = () => {
    setStart(undefined);
    setEnd(undefined);
    setCurrentMonthNumber(undefined);
    setCurrentYearNumber(undefined);
  };

  const onChangeDate: DateChangedCallback = (date, type: TYPESELECT) => {
    if (!date) {
      return;
    }

    if (type === 'START_DATE') {
      setStart(date.toDate());
      setEnd(undefined);
    }

    if (type === 'END_DATE') {
      setEnd(date.toDate());
    }
  };

  return {
    start,
    end,
    currentMonthNumber,
    currentYearNumber,
    setStart,
    setEnd,
    reset,
    onChangeDate,
    setCurrentMonthNumber,
    setCurrentYearNumber,
  };
};

export default useSingleCalendar;
