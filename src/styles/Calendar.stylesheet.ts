import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  graphContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  todayText: {
    color: 'red',
  },

  previousTitleStyle: {
    color: '#46AEFC',
    fontSize: 30,
  },
  selectedDayStyle: {
    width: 25,
    height: 25,
    color: 'green',
    backgroundColor: '#46AEFC',
  },
  dayLabelsWrapper: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  billItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  },
  billItemText: {
    color: 'black',
  },
  rangeStyled: {
    backgroundColor: '#46AEFC',
    color: 'blue',
  },
});

export const StylesProps = {
  previousTitle: '<',
  nextTitle: '>',
  previousTitleStyle: styles.previousTitleStyle,
  selectedDayStyle: styles.selectedDayStyle,
  nextTitleStyle: styles.previousTitleStyle,
  dayLabelsWrapper: styles.dayLabelsWrapper,
  todayBackgroundColor: 'transparent',
  todayTextStyle: styles.todayText,
  selectedRangeStyle: styles.rangeStyled,
};
