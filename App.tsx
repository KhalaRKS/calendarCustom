import React from 'react';
import FivvyCalendar from './src/components/fivvyCalendar/FivvyCalendar';
import {StyleSheet, Text, View} from 'react-native';
import useFivvyCalendar from './src/components/fivvyCalendar/hooks/useFivvyCalendar';
import {data} from './src/constants/constants';
const App = () => {
  return (
    <View style={styles.viewStyle}>
      <FivvyCalendar
        onSelectDate={(start, end) => {
          console.log(`start: ${start}, end: ${end}`);
        }}
        items={data}
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
