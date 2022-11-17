import {Bills} from '../interfaces/CustomStyles.interface';

export const styles = {
  getWidthOfDay: (bills: Bills[], offers: []): Number => {
    let mostRelevantNumber: Number = -1;

    if (!isNaN(bills.length) && !isNaN(offers.length)) {
      if (bills.length > offers.length) {
        mostRelevantNumber = bills.length;
      } else {
        mostRelevantNumber = offers.length;
      }
    } else if (!isNaN(bills.length)) {
      mostRelevantNumber = bills.length;
    } else {
      mostRelevantNumber = offers.length;
    }
    switch (mostRelevantNumber) {
      case mostRelevantNumber <= 3:
        return 40;
      case mostRelevantNumber > 3 && mostRelevantNumber <= 6:
        return 55;
      case mostRelevantNumber > 6:
        return 60;

      default:
        break;
    }
    return 1;
  },
};
