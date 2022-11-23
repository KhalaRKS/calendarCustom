import {createContext} from 'react';
import {IFivvyCalendarState} from '../models/fivvycalendar.state.interface';

export const FivvyCalendarContext = createContext({} as IFivvyCalendarState);
