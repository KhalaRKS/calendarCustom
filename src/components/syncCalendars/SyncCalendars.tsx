import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleCalendar from '../singleCalendar/SingleCalendar';

const SyncCalendars = () => {
  return (
    <>
      <SingleCalendar />
      <SingleCalendar />
    </>
  );
};

export default SyncCalendars;

const styles = StyleSheet.create({});
