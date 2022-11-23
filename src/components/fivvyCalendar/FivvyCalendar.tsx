import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SyncCalendars from '../syncCalendars/SyncCalendars';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import FivvyCalendarProvider from '../../context/FivvyCalendarProvider';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
  onSelectDate?: (start: Date | undefined, end: Date | undefined) => void;
}

const FivvyCalendar = ({items, onMonthChange, onSelectDate}: Props) => {
  return (
    <FivvyCalendarProvider>
      <SyncCalendars
        items={items}
        onMonthChange={onMonthChange}
        onSelectDate={onSelectDate}
      />
    </FivvyCalendarProvider>
  );
};

export default FivvyCalendar;

const styles = StyleSheet.create({});
