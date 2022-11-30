import React, {useState} from 'react';
import FivvyCalendar from './src/components/fivvyCalendar/FivvyCalendar';
import {StyleSheet, Text, View} from 'react-native';
import Icon from './Icon';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <View style={styles.viewStyle}>
      <FivvyCalendar
        prevButtonIcon={<Icon deg={180} />}
        nextButtonIcon={<Icon deg={0} />}
        onSelectDate={(start, end, items) => {
          console.log(`start: ${start}, end: ${end}`);

          console.log(items);
        }}
        onMonthChange={() => {
          console.log('cambie de mes');
        }}
        selectedRangeColor={'#aa62d496'}
        items={[
          {
            date: new Date('2022-12-10'),
            backgroundColor: 'rgba(210, 100, 200, 0.2)',
            borderColor: 'red',
            title: '2',
          },
          {
            date: new Date('2022-12-10'),
            backgroundColor: 'rgba(210, 100, 200, 0.2)',
            borderColor: 'red',
            title: '1',
          },
          {
            date: new Date('2022-11-8'),
            backgroundColor: 'rgba(210, 100, 200, 0.2)',
            borderColor: 'red',
            title: '6',
          },
          {
            date: new Date('2022-11-03'),
            backgroundColor: 'rgba(210, 100, 200, 0.2)',
            borderColor: 'red',
            title: 'hola',
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
