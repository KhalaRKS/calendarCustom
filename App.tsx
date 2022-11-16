/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  useWindowDimensions,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Calendar from './src/Calendar/Calendar';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(undefined);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          {/*  */}
          <Calendar />
          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const useStyle = () => {
  const dimensions = useWindowDimensions();
  console.log('Logging dimensions', dimensions);

  const stylesPrueba = StyleSheet.create({
    container: {
      display: 'flex',
      height: dimensions.height,
      width: dimensions.width,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      color: 'black',
    },
  });

  return {stylesPrueba};
};
