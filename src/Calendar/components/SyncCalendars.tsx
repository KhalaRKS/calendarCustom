import React, {useEffect, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import useSyncCalendar from '../hooks/useSyncCalendar';
import {StylesProps} from '../styles/Calendar.stylesheet';
import {Days} from '../constants/constants';
type Props = {};

function SyncCalendars({}: Props) {
  const {
    startCalendarOne,
    endCalendarOne,
    startCalendarTwo,
    endCalendarTwo,
    onDateChangeCalendarOne,
    onMonthChangeCalendarOne,
    onDateChangeCalendarTwo,
    getInitialAndMinDateCalendarTwo,
    maxDateCalendarTwo,
  } = useSyncCalendar();

  const [customDatesStyles, setCustomDatesStyles] = useState();
  const [billDays, setBillDays] = useState([]);
  useEffect(() => {
    setBillDays(Days);
    console.log(billDays);
  }, [Days]);
  let random_size = 37;
  useEffect(() => {
    if (!billDays || billDays.length <= 0) return;

    let auxCustomDays = [];
    billDays.forEach((el, index) => {
      console.log('cada billday tiene dentro', el);
      auxCustomDays.push({
        ...el.day,
        style: {
          backgroundColor:
            el.bills.length > 3
              ? 'rgba(255,191,0, 0.3)'
              : 'rgba(253,107,107, 0.3)',
          borderColor:
            el.bills.length > 3
              ? 'rgba(253,107,107, 0.3)'
              : 'rgba(255,191,0, 0.3)',
        },
        textStyle: {
          color: '#000000',
          fontWeight: 'bold',
        },
        containerStyle: {
          width: el.bills.length > 3 ? 60 : 32,
          height: el.bills.length > 3 ? 60 : 32,
          marginTop: 3,
          marginLeft:
            el.bills.length > 3
              ? Math.floor((43 - 43) / 2)
              : Math.floor((43 - 32) / 2),
          marginRight: Math.floor((43 - random_size) / 2),
          backgroundColor:
            el.bills.length > 3
              ? 'rgba(253,107,107, 0.3)'
              : 'rgba(255,191,0, 0.3)',
          borderColor:
            el.bills.length > 3 ? 'rgba(253,107,107, 1)' : 'rgba(255,191,0, 1)',
          borderWidth: 1,
          borderRadius: 50,
        },
      });
    });
    setCustomDatesStyles(auxCustomDays);
  }, [billDays]);

  useEffect(() => {
    console.log(customDatesStyles);
  }, []);

  return (
    <>
      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onDateChangeCalendarOne}
        onMonthChange={onMonthChangeCalendarOne}
        selectedStartDate={startCalendarOne}
        selectedEndDate={endCalendarOne}
        customDatesStyles={customDatesStyles}
      />

      <CalendarPicker
        {...StylesProps}
        allowRangeSelection={true}
        onDateChange={onDateChangeCalendarTwo}
        initialDate={getInitialAndMinDateCalendarTwo()}
        minDate={getInitialAndMinDateCalendarTwo()}
        maxDate={maxDateCalendarTwo()}
        restrictMonthNavigation={true}
        selectedStartDate={startCalendarTwo}
        selectedEndDate={endCalendarTwo}
        customDatesStyles={customDatesStyles}
        dayShape={'square'}
        // cuanto mas grand eel numero, mas achica el calendario
        scaleFactor={400}
      />
    </>
  );
}

export default SyncCalendars;
