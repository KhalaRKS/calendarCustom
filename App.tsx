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
  Button,
  Text,
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import moment, {Moment} from 'moment';

const FIRST_CALENDAR_MONTH = dayjs().month();
const SECOND_CALENDAR_MONTH = dayjs().add(1, 'month').month();
const QUANTITY_DAYS_FIRST_CALENDAR = dayjs().daysInMonth();
const QUANTITY_DAYS_SECOND_CALENDAR = dayjs().add(1, 'month').daysInMonth();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [customDatesStyles, setCustomDatesStyles] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState(undefined);
  const [firstDateSelected, setFirstDateSelected] = useState(undefined);
  const [secondDateSelected, setSecondDateSelected] = useState(undefined);
  const [minDateSecondCalendar, setMinDateSecondCalendar] = useState(
    null as Date,
  );

  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(undefined);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const createActualMonthPreferences = () => {};

  const onDateChange = (momentDate: Moment, type: String) => {
    // console.log(date, type);
    let date = momentDate;
    console.log(type);
    // if(type == 'END_DATE' && ){}
    //Si la fecha seleccionada esta en el mismo mes que la fecha inicial
    //Si la fecha seleccionada esta en un mes distinto al mes de la fecha inicial

    if (firstDateSelected !== undefined && secondDateSelected !== undefined) {
      setSelectedStartDate(firstDateSelected);
      setSecondDateSelected(undefined);
      setFirstDateSelected(new Date(date));
    }

    if (firstDateSelected == null && secondDateSelected == null) {
      setSelectedStartDate(date);
      setFirstDateSelected(new Date(date));
    }
    if (
      dayjs(date).month() === SECOND_CALENDAR_MONTH &&
      firstDateSelected != null &&
      type === 'START_DATE'
    ) {
      // SE DEBERIA MARCAR LA FECHA INICIAL DE ESTE CALENDARIO EN EL PRINCIPIO DE MES, Y LA FECHA FINAL EN LA SEGUNDA FECHA SELECCIONADA
      console.log('SEGUNDO CASO: ' + date);
    }

    if (
      dayjs(date).month() === FIRST_CALENDAR_MONTH &&
      firstDateSelected != null
    ) {
    }
    if (dayjs(date).month() === FIRST_CALENDAR_MONTH) {
      setFirstDateSelected(momentDate);

      console.log(QUANTITY_DAYS_SECOND_CALENDAR);

      // createActualMonthPreferences(date);
    }
    // console.log('Es igual: ' + dayjs().month());

    // console.log('ddayjs primera fehca: ' + dayjs(date).format());

    // console.log('dayjs fecha: ' + dayjs(date).month());

    // setSelectedStartDate(typeof date);
    // console.log('que fecha tiene' + dayjs(date).add(1, 'month').toDate());

    // console.log('Dayjs' + dayjs().date(31).toDate());
    return;
  };
  const onChangeDate = (date, type) => {
    console.log(type);

    if (start == undefined) return setStart(date);

    if (end == undefined) return setEnd(date);
  };

  const nextDay = () => setStart(day => moment(day).add(1, 'day'));
  const endDay = () => setEnd(day => moment(day).add(1, 'day'));

  const resetDay = () => setStart(undefined);
  // Si startDate y EndDate tienen informacion, al seleccionarse una nueva fecha, estos 2 valores tienen que resetearse y guardar en
  // startDate con el valor de la nueva fecha
  /*
  El estado de la fecha inicial, debe preguntar si es > a la fecha minima de ese mes.
  La fecha de cierre, debe marcar todos los dias inferiores a la misma.
  Caso 1: Si la fecha de cierre es del mismo mes que la fecha inicial, se deben seleccionar todos los dias hasta la fecha inicial
  Caso 2: En caso que sea el mes siguiente, se deben seleccionar hasta el primer dia del mes seleccionado.

  Al seleccionar una fecha en el calendario, se deberia preguntar si el mes de la fecha seleccionada es igual o mayor al mes del datepicker menor.
  En caso de que sea igual al mes del datepicker con las fechas mas proximas, se deberia poder seleccionar una fecha final en el siguiente datepicker del mes proximo.
  En caso de que el mes de la fecha inicial sea mayor al mes mas cercano (Datepicker con mes actual), se deberia cambiar el minDate del primer datepicker a la fecha seleccionada en el 2do datepicker, y la fecha final del datepicker, deberia ser sobre el mismo datepicker.
   */
  useEffect(() => {
    setMinDateSecondCalendar(
      dayjs()
        .month(dayjs().month() + 1)
        .date(1)
        .toDate(),
    );
  }, []);

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
        <Button title="Boton" onPress={nextDay}></Button>
        <Button title="Reset" onPress={resetDay}></Button>
        <View>
          <CalendarPicker
            allowRangeSelection={true}
            minDate={dayjs().toDate()}
            onDateChange={(date, type) => onChangeDate(date, type)}
            previousTitle={'<'}
            nextTitle={'>'}
            // selectedEndDate={secondDateSelected}
            // initialDate={press}
            selectedStartDate={start}
            previousTitleStyle={styles.previousTitleStyle}
            selectedDayStyle={styles.selectedDayStyle}
            nextTitleStyle={styles.previousTitleStyle}
            customDatesStyles={customDatesStyles}
            dayLabelsWrapper={styles.dayLabelsWrapper}
            todayBackgroundColor={'transparent'}
            todayTextStyle={styles.todayText}
            selectedRangeStyle={styles.rangeStyled}
          />
          {/* <CalendarPicker
            allowRangeSelection={true}
            onDateChange={(date, type) => onDateChange(date, type)}
            previousTitle={'<'}
            nextTitle={'>'}
            // selectedStartDate={selectedStartDate}
            // selectedEndDate={secondDateSelected}
            selectedRangeStyle={styles.rangeStyled}
            minDate={minDateSecondCalendar}
            initialDate={dayjs(minDateSecondCalendar).date(31).toDate()}
            maxDate={dayjs(minDateSecondCalendar).endOf('month').toDate()}
            previousTitleStyle={styles.previousTitleStyle}
            selectedDayStyle={styles.selectedDayStyle}
            nextTitleStyle={styles.previousTitleStyle}
            customDatesStyles={customDatesStyles}
            dayLabelsWrapper={styles.dayLabelsWrapper}
          /> */}
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
  todayText: {
    color: 'red',
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
  rangeStyled: {
    backgroundColor: '#46AEFC',
    color: 'blue',
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
