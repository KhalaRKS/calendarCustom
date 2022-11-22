import {useState} from 'react';
import {
  CustomDatesStylesFunc,
  CustomDateStyle,
  DateChangedCallback,
} from 'react-native-calendar-picker';
import {Moment} from 'moment';
import {SELECTION_DATE} from '../../../types/selectionDate.type';

const useSingleCalendar = () => {
  const [initialDate, setInitialDate] = useState<Date | undefined>(undefined);
  const [minDate, setMinDate] = useState<Date | undefined>(undefined);
  const [maxDate, setMaxDate] = useState<Date | undefined>(undefined);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(
    undefined,
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined,
  );
  const [customDatesStyles, setCustomDateStyles] = useState<
    CustomDateStyle[] | CustomDatesStylesFunc | undefined
  >(undefined);

  const [onDateChange, setOnDateChange] = useState<
    DateChangedCallback | undefined
  >(undefined);

  const [onMonthChange, setOnMonthChange] = useState<
    DateChangedCallback | undefined
  >(undefined);

  return {
    initialDate,
    setInitialDate,
    minDate,
    setMinDate,
    maxDate,
    setMaxDate,
    selectedStartDate,
    setSelectedStartDate,
    selectedEndDate,
    setSelectedEndDate,
    customDatesStyles,
    setCustomDateStyles,
    onDateChange,
    setOnDateChange,
    onMonthChange,
    setOnMonthChange,
  };
};

export default useSingleCalendar;
