export interface IFivvyCalendarState {
  start: Date | undefined;
  end: Date | undefined;
  setStart: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setEnd: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
