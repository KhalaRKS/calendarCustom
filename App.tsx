import React from 'react';
import FivvyCalendar from './src/components/fivvyCalendar/FivvyCalendar';
import {Text, View} from 'react-native';
import useFivvyCalendar from './src/components/fivvyCalendar/hooks/useFivvyCalendar';

const App = () => {
  return (
    <View>
      <FivvyCalendar
        onSelectDate={(start, end) => {
          console.log(`start: ${start}, end: ${end}`);
        }}
      />
    </View>
  );
};

export default App;
