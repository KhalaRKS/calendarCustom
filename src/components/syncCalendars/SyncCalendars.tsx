import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useSingleCalendar from './hooks/useSingleCalendar';
import CalendarPicker from 'react-native-calendar-picker';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import adapterItem from './adapter/adapterItem';
import {CustomDateStyle} from '../../models/customDateStyle.interface';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
}

const SyncCalendars = ({items, onMonthChange}: Props) => {
  const [styles, setStyles] = useState<CustomDateStyle[]>([]);

  const {
    initialDate: initialDateOne,
    minDate: minDateOne,
    maxDate: maxDateOne,
    selectedStartDate: selectedStartDateOne,
    selectedEndDate: selectedEndDateOne,
    onDateChange: onDateChangeOne,
    onMonthChange: onMonthChangeOne,
  } = useSingleCalendar();

  const {
    initialDate: initialDateTwo,
    minDate: minDateTwo,
    maxDate: maxDateTwo,
    selectedStartDate: selectedStartDateTwo,
    selectedEndDate: selectedEndDateTwo,
    onDateChange: onDateChangeTwo,
    onMonthChange: onMonthChangeTwo,
  } = useSingleCalendar();

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
      <CalendarPicker
        allowRangeSelection={true}
        restrictMonthNavigation={true}
        initialDate={initialDateOne}
        minDate={minDateOne}
        maxDate={maxDateOne}
        selectedStartDate={selectedStartDateOne}
        selectedEndDate={selectedEndDateOne}
        onDateChange={onDateChangeOne}
        onMonthChange={onMonthChangeOne}
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
        onDateChange={onDateChangeTwo}
        onMonthChange={onMonthChangeTwo}
        customDatesStyles={styles}
      />
    </>
  );
};

export default SyncCalendars;

const styles = StyleSheet.create({});
