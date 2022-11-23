import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SyncCalendars from '../syncCalendars/SyncCalendars';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import FivvyCalendarProvider from '../../context/FivvyCalendarProvider';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
}

const FivvyCalendar = ({items, onMonthChange}: Props) => {
  return (
    <FivvyCalendarProvider>
      <SyncCalendars items={items} onMonthChange={onMonthChange} />
    </FivvyCalendarProvider>
  );
};

export default FivvyCalendar;

const styles = StyleSheet.create({});
