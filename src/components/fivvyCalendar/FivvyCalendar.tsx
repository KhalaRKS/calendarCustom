import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SyncCalendars from '../syncCalendars/SyncCalendars';
import {ItemCalendar} from '../../models/itemCalendar.interface';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
}

const FivvyCalendar = ({items, onMonthChange}: Props) => {
  return (
    <View>
      <SyncCalendars items={items} onMonthChange={onMonthChange} />
    </View>
  );
};

export default FivvyCalendar;

const styles = StyleSheet.create({});
