import {useState} from 'react';
import {
  CustomDatesStylesFunc,
  CustomDateStyle,
  DateChangedCallback,
} from 'react-native-calendar-picker';

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
  };
};

export default useSingleCalendar;
