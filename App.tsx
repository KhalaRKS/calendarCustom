/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import dayjs from 'dayjs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [customDatesStyles, setCustomDatesStyles] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onDateChange = (date: any, type: string) => {
    console.log(date, type);
    setSelectedStartDate(date);
    console.log('Dayjs' + dayjs().date(31).toDate());
    return;
  };

  console.log(dayjs().format());

  /*
  El estado de la fecha inicial, debe preguntar si es > a la fecha minima de ese mes.
  La fecha de cierre, debe marcar todos los dias inferiores a la misma.
  Caso 1: Si la fecha de cierre es del mismo mes que la fecha inicial, se deben seleccionar todos los dias hasta la fecha inicial
  Caso 2: En caso que sea el mes siguiente, se deben seleccionar hasta el primer dia del mes seleccionado.
   */
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <CalendarPicker
            minDate={new Date()}
            onDateChange={(date, type) => onDateChange(date, type)}
            previousTitle={'<'}
            nextTitle={'>'}
            previousTitleStyle={styles.previousTitleStyle}
            selectedDayStyle={styles.selectedDayStyle}
            nextTitleStyle={styles.previousTitleStyle}
            customDatesStyles={customDatesStyles}
            dayLabelsWrapper={styles.dayLabelsWrapper}
            todayBackgroundColor="#a0db8e"></CalendarPicker>
          <CalendarPicker
            onDateChange={(date, type) => onDateChange(date, type)}
            previousTitle={'<'}
            nextTitle={'>'}
            maxDate={dayjs().date(31).toDate()}
            previousTitleStyle={styles.previousTitleStyle}
            selectedDayStyle={styles.selectedDayStyle}
            nextTitleStyle={styles.previousTitleStyle}
            customDatesStyles={customDatesStyles}
            dayLabelsWrapper={styles.dayLabelsWrapper}></CalendarPicker>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
export const styles = StyleSheet.create({
  graphContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  previousTitleStyle: {
    color: '#46AEFC',
    fontSize: 30,
  },
  selectedDayStyle: {
    width: 25,
    height: 25,
    color: 'green',
    backgroundColor: '#46AEFC',
  },
  dayLabelsWrapper: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  billItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  },
  billItemText: {
    color: 'black',
  },
});

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
