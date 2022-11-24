import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import adapterItem from './adapter/adapterItem';
import {CustomDateStyle} from '../../models/customDateStyle.interface';
import useSyncCalendars from './hooks/useSyncCalendars';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
  onSelectDate?: (start: Date | undefined, end: Date | undefined) => void;
}

const SyncCalendars = ({items, onMonthChange, onSelectDate}: Props) => {
  const {
    initialDateOne,
    initialDateTwo,
    loading,
    maxDateOne,
    maxDateTwo,
    minDateOne,
    minDateTwo,
    selectedEndDateOne,
    selectedEndDateTwo,
    selectedStartDateOne,
    selectedStartDateTwo,
    onDateChangeCalendarOne,
    onDateChangeCalendarTwo,
    onMonthChangeHandler,
  } = useSyncCalendars(onSelectDate, onMonthChange);

  const [styles, setStyles] = useState<any>(undefined);

  useEffect(() => {
    if (items) {
      // TODO: This is where we need to set the customDatesStyles for each calendar
      const customStyles: CustomDateStyle[] = items.map(item =>
        adapterItem(item),
      );
      setStyles(customStyles);
    }
  }, [items]);

  return (
    <>
      {loading ? (
        <View>
          <Text>LOADING</Text>
        </View>
      ) : (
        <>
          <CalendarPicker
            allowRangeSelection={true}
            restrictMonthNavigation={true}
            initialDate={initialDateOne}
            minDate={minDateOne}
            maxDate={maxDateOne}
            selectedStartDate={selectedStartDateOne}
            selectedEndDate={selectedEndDateOne}
            onDateChange={onDateChangeCalendarOne}
            onMonthChange={onMonthChangeHandler}
            customDatesStyles={styles}
          />
          <CalendarPicker
            allowRangeSelection={true}
            restrictMonthNavigation={true}
            initialDate={initialDateTwo}
            minDate={minDateTwo}
            maxDate={maxDateTwo}
            selectedStartDate={selectedStartDateTwo}
            selectedEndDate={selectedEndDateTwo}
            onDateChange={onDateChangeCalendarTwo}
            onMonthChange={undefined}
            customDatesStyles={styles}
          />
        </>
      )}
    </>
  );
};

export default SyncCalendars;

const style = StyleSheet.create({
  rangeStyle: {
    backgroundColor: '#009EFF',
    borderColor: '#009EFF',
    borderWidth: 1,
  },
});
