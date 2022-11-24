import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SyncCalendars from '../syncCalendars/SyncCalendars';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import FivvyCalendarProvider from '../../context/FivvyCalendarProvider';
import {SelectedRangeStyle} from '../../models/selectedRangeStyle.interface';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
  onSelectDate?: (start: Date | undefined, end: Date | undefined) => void;
  selectedRangeColor?: string;
}

const FivvyCalendar = ({
  items,
  onMonthChange,
  onSelectDate,
  selectedRangeColor,
}: Props) => {
  return (
    <FivvyCalendarProvider>
      <SyncCalendars
        items={items}
        onMonthChange={onMonthChange}
        onSelectDate={onSelectDate}
        selectedRangeColor={selectedRangeColor}
      />
    </FivvyCalendarProvider>
  );
};

export default FivvyCalendar;

const styles = StyleSheet.create({});
