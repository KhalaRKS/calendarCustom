import React from 'react';
import SyncCalendars from './components/SyncCalendars';

type Props = {
  customStyles: customStyles[];
};
interface customStyles {
  day: Date;
  bills: Bills;
}
interface Bills {
  amount: Number;
  name: String;
}

const Calendar = (props: Props) => {
  return (
    <>
      <SyncCalendars />
    </>
  );
};

export default Calendar;
