export interface ItemCalendar {
  date: Date;
  backgroundColor: string;
  borderColor: string;
  title?: string;
  description?: string;
  value?: number | string;
  callback?: () => void;
}
