import moment from 'moment';

export const Days = [
  {
    day: {
      date: moment()
        .year(2022)
        .month(9)
        .date(Math.random() * 31),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(253,107,107, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(253,107,107, 1)',
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Oil Station',
        amount: 39.99,
      },
      {
        title: 'Shopping',
        amount: 45.99,
      },
      {
        title: 'Food market',
        amount: 15.45,
      },
      {
        title: 'Bank',
        amount: 19.99,
      },
    ],
  },
  {
    day: {
      date: moment()
        .year(2022)
        .month(9)
        .date(Math.random() * 31),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(253,107,107, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(253,107,107, 1)',
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Oil Station',
        amount: 339.99,
      },
      {
        title: 'Shopping',
        amount: 65.99,
      },
    ],
  },
  {
    day: {
      date: moment()
        .year(2022)
        .month(9)
        .date(Math.random() * 31),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(253,107,107, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(253,107,107, 1)',
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Oil Station',
        amount: 3.99,
      },
      {
        title: 'Shopping',
        amount: 4.99,
      },
      {
        title: 'Food market',
        amount: 1.45,
      },
      {
        title: 'Bank',
        amount: 1.99,
      },
      {
        title: 'Food market',
        amount: 435.45,
      },
      {
        title: 'Bank',
        amount: 193.99,
      },
    ],
  },
  {
    day: {
      date: moment()
        .year(2022)
        .month(9)
        .date(Math.random() * 31),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(255,191,0, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,191,0, 1)',
        width: 50,
        height: 50,
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Shopping',
        amount: 2.99,
      },
    ],
  },
  {
    day: {
      date: moment()
        .year(2022)
        .month(9)
        .date(Math.random() * 31),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(255,191,0, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,191,0, 1)',
        width: 50,
        height: 50,
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Shopping',
        amount: 2.99,
      },
    ],
  },
  {
    day: {
      date: new Date('25-10-2022'),
      // Set colors to date
      style: {
        backgroundColor: 'rgba(255,191,0, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,191,0, 1)',
        width: 50,
        height: 50,
      },
      textStyle: {color: 'black'}, // sets the font color
      containerStyle: [], // extra styling for day container
      allowDisabled: false, // allow custom style to apply to disabled dates
    },
    bills: [
      {
        title: 'Shopping',
        amount: 2.99,
      },
    ],
  },
];
