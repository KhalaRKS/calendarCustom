import React from 'react';
import FivvyCalendar from './src/components/fivvyCalendar/FivvyCalendar';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.viewStyle}>
      <FivvyCalendar
        onSelectDate={(start, end, items) => {
          console.log(`start: ${start}, end: ${end}`);

          items.forEach(item => {
            console.log(item.title);
          });
        }}
        onMonthChange={() => {
          console.log('cambie de mes');
        }}
        disabledRageSelection
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
