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
    items: any[],
  ) => void;
  disabledRageSelection?: boolean;
}

const SyncCalendars = ({
  items,
  onMonthChange,
  onSelectDate,
  selectedRangeColor,
  disabledRageSelection = false,
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
    disabledRageSelection,
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
            allowRangeSelection={!disabledRageSelection}
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
              backgroundColor: !disabledRageSelection
                ? selectedRangeColor
                : 'transparent',
            }}
          />
          <CalendarPicker
            allowRangeSelection={!disabledRageSelection}
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
              backgroundColor: !disabledRageSelection
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
