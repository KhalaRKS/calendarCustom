export interface ItemCalendar {
  date: Date;
  color: string;
  titulo?: string;
  description?: string;
  callback?: () => void;
}
