import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import useSyncCalendars from './hooks/useSyncCalendars';

interface Props {
  items?: ItemCalendar[];
  selectedRangeColor?: string;
  onMonthChange?: () => void;
  onSelectDate?: (
    start: Date | undefined,
    end: Date | undefined,
    data: any | any[],
  ) => void;
  enabledRangeSelection?: boolean;
}

const SyncCalendars = ({
  items,
  onMonthChange,
  onSelectDate,
  selectedRangeColor,
  enabledRangeSelection = true,
}: Props) => {
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
    styles,
  } = useSyncCalendars(
    onSelectDate,
    onMonthChange,
    items,
    enabledRangeSelection,
  );

  return (
    <>
      {loading ? (
        <View>
          <Text>LOADING</Text>
        </View>
      ) : (
        <>
          <CalendarPicker
            allowRangeSelection={enabledRangeSelection}
            restrictMonthNavigation={true}
            initialDate={initialDateOne}
            minDate={minDateOne}
            maxDate={maxDateOne}
            selectedStartDate={selectedStartDateOne}
            selectedEndDate={selectedEndDateOne}
            onDateChange={onDateChangeCalendarOne}
            onMonthChange={onMonthChangeHandler}
            customDatesStyles={styles}
            selectedRangeStyle={{
              backgroundColor: selectedRangeColor
                ? selectedRangeColor
                : '#3498eb',
              transform: [{scaleX: 1}, {scaleY: 1}],
              borderRadius: 0,
              borderWidth: 0,
            }}
            selectedDayStyle={{
              backgroundColor: enabledRangeSelection
                ? selectedRangeColor
                : 'transparent',
            }}
          />
          <CalendarPicker
            allowRangeSelection={enabledRangeSelection}
            restrictMonthNavigation={true}
            initialDate={initialDateTwo}
            minDate={minDateTwo}
            maxDate={maxDateTwo}
            selectedStartDate={selectedStartDateTwo}
            selectedEndDate={selectedEndDateTwo}
            onDateChange={onDateChangeCalendarTwo}
            onMonthChange={undefined}
            customDatesStyles={styles}
            selectedRangeStyle={{
              backgroundColor: selectedRangeColor
                ? selectedRangeColor
                : '#3498eb',
              transform: [{scaleX: 1}, {scaleY: 1}],
              borderRadius: 0,
              borderWidth: 0,
            }}
            selectedDayStyle={{
              backgroundColor: enabledRangeSelection
                ? selectedRangeColor
                : 'transparent',
            }}
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
