import {useEffect, useState} from 'react';
import {Days} from '../constants/constants';

function useCustomStyles(data) {
  const [customStyles, setCustomStyles] = useState();

  useEffect(() => {
    if (!Days) return null;

    let random_size = 37;

    let auxCustomDays = [];
    Days.forEach((date, index) => {
      console.log('cada billday tiene dentro', date);
      auxCustomDays.push({
        ...date.day,
        style: {
          backgroundColor:
            date.bills.length > 3 ? 'transparent' : 'rgba(253,107,107, 0.3)',
          borderColor:
            date.bills.length > 3
              ? 'rgba(255,191,0, 0.3)'
              : 'rgba(253,107,107, 0.5)',
        },
        textStyle: {
          color: '#000000',
          fontWeight: 'bold',
        },
        containerStyle: {
          position: 'relative',
          width: date.bills.length > 3 ? 50 : 32,
          height: date.bills.length > 3 ? 50 : 32,
          marginTop: 0,
          marginLeft:
            date.bills.length > 3
              ? Math.floor((43 - 43) / 2)
              : Math.floor((43 - 32) / 2),
          marginRight: Math.floor((43 - random_size) / 2),
          bottom: 0,
          backgroundColor:
            date.bills.length > 3
              ? 'rgba(253,107,107, 0.3)'
              : 'rgba(253,107,107, 0.3)',
          borderColor:
            date.bills.length > 3
              ? 'rgba(253,107,107, 1)'
              : 'rgba(255,191,0, 1)',
          borderWidth: 1,
          borderRadius: 50,
        },
      });
    });
    setCustomStyles(auxCustomDays);
  }, [Days]);

  return {
    customStyles,
  };
}

export default useCustomStyles;
