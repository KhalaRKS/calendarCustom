import {useState} from 'react';
import {DateChangedCallback} from 'react-native-calendar-picker';
import {TYPESELECT} from '../types/select.type';

type Props = {};

const useCalendar = () => {
  const [start, setStart] = useState<Date | undefined>();
  const [end, setEnd] = useState<Date | undefined>();

  const reset = () => {
    setStart(undefined);
    setEnd(undefined);
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
    setStart,
    setEnd,
    reset,
    onChangeDate,
  };
};

export default useCalendar;
