useEffect(() => {
  if (!billDays || billDays.length <= 0) return;

  let auxCustomDays = [];
  let auxChartValues = [];
  billDays.forEach((el, index) => {
    console.log('cada billday tiene dentro', el);
    auxChartValues.push({
      date: el.day.date,
      count: el.bills.length,
    });
    auxCustomDays.push({
      ...el.day,
      style: {
        backgroundColor:
          el.bills.length > 3
            ? 'rgba(255,191,0, 0.3)'
            : 'rgba(253,107,107, 0.3)',
        borderColor:
          el.bills.length > 3
            ? 'rgba(253,107,107, 0.3)'
            : 'rgba(255,191,0, 0.3)',
      },
      textStyle: {
        color: '#000000',
        fontWeight: 'bold',
      },
      containerStyle: {
        width: el.bills.length > 3 ? 60 : 32,
        height: el.bills.length > 3 ? 60 : 32,
        marginTop: 3,
        marginLeft:
          el.bills.length > 3
            ? Math.floor((43 - 43) / 2)
            : Math.floor((43 - 32) / 2),
        marginRight: Math.floor((43 - random_size) / 2),
        backgroundColor:
          el.bills.length > 3
            ? 'rgba(253,107,107, 0.3)'
            : 'rgba(255,191,0, 0.3)',
        borderColor:
          el.bills.length > 3 ? 'rgba(253,107,107, 1)' : 'rgba(255,191,0, 1)',
        borderWidth: 1,
        borderRadius: 50,
      },
    });
  });
  setCustomDatesStyles(auxCustomDays);
  setChartValues(auxChartValues);
  console.log(Math.random() * (12 - 9) + 9);
}, [billDays]);

const onDateChange = async datePicked => {
  const Bills = await billDays.find(
    e => e.day.date.format('MM-DD-yyyy') === datePicked.format('MM-DD-yyyy'),
  );
  if (!Bills || Bills.length < 1) {
    setBillsAndDebt([]);
  } else {
    setBillsAndDebt(Bills.bills);
  }
};
