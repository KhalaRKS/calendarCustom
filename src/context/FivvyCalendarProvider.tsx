import React, {useState} from 'react';
import {FivvyCalendarContext} from './FivvyCalendarContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const FivvyCalendarProvider = ({children}: Props) => {
  const [start, setStart] = useState<Date | undefined>(undefined);
  const [end, setEnd] = useState<Date | undefined>(undefined);

  return (
    <FivvyCalendarContext.Provider
      value={{
        start,
        end,
        setStart,
        setEnd,
      }}>
      {children}
    </FivvyCalendarContext.Provider>
  );
};

export default FivvyCalendarProvider;
