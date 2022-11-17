import moment from 'moment/moment';
let today = moment();
let day = today.clone().startOf('month');

export const Days = [
  {
    // Esta fecha se deberia pasa dinamicamente para referenciar el dia por la prop data dentro del componente SyncCalendar
    day: {
      date: moment()
        .year(2022)
        .month(10)
        .date(Math.random() * 31),
      // Set colors to date
      //   style: {
      //     backgroundColor: 'rgba(253,107,107, 0.3)',
      //     borderWidth: 1,
      //     borderColor: 'rgba(253,107,107, 1)',
      //   },
      //   textStyle: {color: 'black'}, // sets the font color
      //   containerStyle: [], // extra styling for day container
      //   allowDisabled: false, // allow custom style to apply to disabled dates
      // },
    },
    // Estos gastos deberian ser dinamicos cuando se pasen por la prop data dentro del componente SyncCalendar
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
    //   vencimiento: [
    //  {   visa: 'credito',
    //     monto: '20$',}
    //   ],
    //    promociones: [
    //     {
    //      local: 'target',
    //      discount: '15%',
    //      tc: 'visa BofA',
    //     }
    //   ]
  },
  {
    day: {
      date: moment()
        .year(2022)
        .month(10)
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
        .month(10)
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
        .month(10)
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
        .month(10)
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
