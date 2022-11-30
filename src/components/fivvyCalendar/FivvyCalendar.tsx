import React = require('react');
import {StyleSheet} from 'react-native';
import FivvyCalendarProvider from '../../context/FivvyCalendarProvider';
import {ItemCalendar} from '../../models/itemCalendar.interface';
import SyncCalendars from '../syncCalendars/SyncCalendars';

interface Props {
  items?: ItemCalendar[];
  onMonthChange?: () => void;
  onSelectDate?: (
    start: Date | undefined,
    end: Date | undefined,
    items: any[],
  ) => void;
  selectedRangeColor?: string;
  disabledRageSelection?: boolean;
  prevButtonIcon?: string | JSX.Element;
  nextButtonIcon?: string | JSX.Element;
}

const FivvyCalendar = ({
  items,
  onMonthChange,
  onSelectDate,
  selectedRangeColor,
  disabledRageSelection,
  prevButtonIcon,
  nextButtonIcon,
}: Props) => {
  return (
    <FivvyCalendarProvider>
      <SyncCalendars
        items={items}
        onMonthChange={onMonthChange}
        onSelectDate={onSelectDate}
        selectedRangeColor={selectedRangeColor}
        disabledRageSelection={disabledRageSelection}
        prevButtonIcon={prevButtonIcon}
        nextButtonIcon={nextButtonIcon}
      />
    </FivvyCalendarProvider>
  );
};

export default FivvyCalendar;

const styles = StyleSheet.create({});
