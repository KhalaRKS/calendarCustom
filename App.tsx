import React from 'react';
import FivvyCalendar from './src/components/fivvyCalendar/FivvyCalendar';
import {StyleSheet, Text, View} from 'react-native';
import useFivvyCalendar from './src/components/fivvyCalendar/hooks/useFivvyCalendar';
import {generateDates} from './src/constants/constants';
const App = () => {
  return (
    <View style={styles.viewStyle}>
      <FivvyCalendar
        onSelectDate={(start, end, item) => {
          console.log(`start: ${start}, end: ${end}`);
          console.log(item);
        }}
        onMonthChange={() => {
          console.log('cambie de mes');
        }}
        items={[
          {
            date: new Date('2022-11-25'),
            backgroundColor: 'red',
            borderColor: 'red',
            title: 'hola',
          },
          {
            date: new Date('2022-11-25'),
            backgroundColor: 'red',
            borderColor: 'red',
            title: 'mundo',
          },
          {
            date: new Date('2022-11-20'),
            backgroundColor: 'red',
            borderColor: 'red',
          },
          {
            date: new Date('20212-11-06'),
            backgroundColor: 'red',
            borderColor: 'red',
          },
          {
            date: new Date('2022-11-03'),
            backgroundColor: 'red',
            borderColor: 'red',
          },
        ]}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
  },
});
