import {useState} from 'react';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {TYPESELECT} from '../types/select.type';

type Props = {};

const useSingleCalendar = () => {
  const [start, setStart] = useState<Date | undefined>();
  const [end, setEnd] = useState<Date | undefined>();
  const [currentMonth, setCurrentMonth] = useState<number | undefined>();
  const [currentYear, setCurrentYear] = useState<number | undefined>();

  const reset = () => {
    setStart(undefined);
    setEnd(undefined);
    setCurrentMonth(undefined);
    setCurrentYear(undefined);
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
    currentMonth,
    currentYear,
    setStart,
    setEnd,
    reset,
    onChangeDate,
    setCurrentMonth,
    setCurrentYear,
  };
};

export default useSingleCalendar;
