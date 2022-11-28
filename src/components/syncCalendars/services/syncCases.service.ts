import {Moment} from 'moment';

export enum SyncCalendarsCases {
  NO_START_NO_END = 'NO_START_NO_END',
  START_NO_END = 'START_NO_END',
  START_END = 'START_END',
}

export const getSyncCalendarsCase = (
  start: Date | undefined,
  end: Date | undefined,
): SyncCalendarsCases => {
  if (!start && !end) {
    return SyncCalendarsCases.NO_START_NO_END;
  }
  if (start && !end) {
    return SyncCalendarsCases.START_NO_END;
  }
  if (start && end) {
    return SyncCalendarsCases.START_END;
  }
  return SyncCalendarsCases.NO_START_NO_END;
};
