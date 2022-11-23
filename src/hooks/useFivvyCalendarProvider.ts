import {useContext} from 'react';
import {FivvyCalendarContext} from '../context/FivvyCalendarContext';

export const useFivvyCalendarProvider = () => {
  const {start, end, setStart, setEnd} = useContext(FivvyCalendarContext);
  return {start, end, setStart, setEnd};
};
