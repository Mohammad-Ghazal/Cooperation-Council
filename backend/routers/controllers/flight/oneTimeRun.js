const newFlightModel = require("../../../db/models/flightSchema");

let flights = [{ destination: 'TIP', origin: 'LCY', date: '2021-5-14T1:30:00.000+00:00', capacity: 20 }
  , { price: 75, destination: 'FlySFO', origin: 'QAIA', date: '2021-6-11T5:30:00.000+00:00', capacity: 14 }
  , { price: 84, destination: 'FlySFO', origin: 'TIP', date: '2021-3-29T20:30:00.000+00:00', capacity: 10 }
  , { price: 45, destination: 'TIP', origin: 'LCY', date: '2021-1-3T22:30:00.000+00:00', capacity: 17 }
  , { price: 44, destination: 'FlySFO', origin: 'LCY', date: '2021-11-18T3:30:00.000+00:00', capacity: 19 }
  , { price: 100, destination: 'TUN', origin: 'QAIA', date: '2021-1-9T7:30:00.000+00:00', capacity: 19 }
  , { price: 105, destination: 'TUN', origin: 'LCY', date: '2021-6-4T4:30:00.000+00:00', capacity: 7 }
  , { price: 45, destination: 'LCY', origin: 'TIP', date: '2021-4-5T2:30:00.000+00:00', capacity: 13 }
  , { price: 102, destination: 'LCY', origin: 'TUN', date: '2021-2-16T17:30:00.000+00:00', capacity: 13 }
  , { price: 102, destination: 'QAIA', origin: 'TIP', date: '2021-5-16T14:30:00.000+00:00', capacity: 18 }
  , { price: 45, destination: 'LCY', origin: 'TUN', date: '2021-1-23T13:30:00.000+00:00', capacity: 14 }
  , { price: 77, destination: 'FlySFO', origin: 'TUN', date: '2021-1-22T8:30:00.000+00:00', capacity: 5 }
  , { price: 88, destination: 'FlySFO', origin: 'QAIA', date: '2021-4-17T1:30:00.000+00:00', capacity: 17 }
  , { price: 99, destination: 'TUN', origin: 'TIP', date: '2021-9-23T7:30:00.000+00:00', capacity: 19 }
  , { price: 70, destination: 'QAIA', origin: 'TUN', date: '2021-8-14T16:30:00.000+00:00', capacity: 16 }
  , { price: 84, destination: 'QAIA', origin: 'LCY', date: '2021-12-1T11:30:00.000+00:00', capacity: 14 }
  , { price: 80, destination: 'TUN', origin: 'FlySFO', date: '2021-6-9T22:30:00.000+00:00', capacity: 6 }
  , { price: 86, destination: 'LCY', origin: 'QAIA', date: '2021-7-24T1:30:00.000+00:00', capacity: 10 }
  , { price: 46, destination: 'LCY', origin: 'TUN', date: '2021-12-10T4:30:00.000+00:00', capacity: 6 }
  , { price: 201, destination: 'FlySFO', origin: 'TIP', date: '2021-3-20T15:30:00.000+00:00', capacity: 20 }
  , { price: 66, destination: 'LCY', origin: 'TUN', date: '2021-8-2T7:30:00.000+00:00', capacity: 8 }
  , { price: 77, destination: 'TUN', origin: 'TIP', date: '2021-3-22T11:30:00.000+00:00', capacity: 20 }
  , { price: 301, destination: 'TUN', origin: 'QAIA', date: '2021-2-24T23:30:00.000+00:00', capacity: 8 }
  , { price: 102, destination: 'TUN', origin: 'LCY', date: '2021-1-13T23:30:00.000+00:00', capacity: 13 }
  , { price: 315, destination: 'FlySFO', origin: 'LCY', date: '2021-9-23T0:30:00.000+00:00', capacity: 15 }
  , { price: 89, destination: 'TUN', origin: 'LCY', date: '2021-8-8T16:30:00.000+00:00', capacity: 12 }
  , { price: 102, destination: 'TIP', origin: 'TUN', date: '2021-6-30T14:30:00.000+00:00', capacity: 9 }
  , { price: 102, destination: 'TIP', origin: 'LCY', date: '2021-7-23T9:30:00.000+00:00', capacity: 7 }
  , { price: 165, destination: 'TIP', origin: 'TUN', date: '2021-11-26T2:30:00.000+00:00', capacity: 20 }
  , { price: 88, destination: 'LCY', origin: 'TIP', date: '2021-9-3T18:30:00.000+00:00', capacity: 19 }
  , { price: 157, destination: 'FlySFO', origin: 'QAIA', date: '2021-1-26T8:30:00.000+00:00', capacity: 10 }
  , { price: 148, destination: 'LCY', origin: 'TUN', date: '2021-3-15T21:30:00.000+00:00', capacity: 12 }
  , { price: 154, destination: 'LCY', origin: 'QAIA', date: '2021-8-3T4:30:00.000+00:00', capacity: 13 }
  , { price: 111, destination: 'FlySFO', origin: 'QAIA', date: '2021-4-9T0:30:00.000+00:00', capacity: 9 }
  , { price: 257, destination: 'FlySFO', origin: 'QAIA', date: '2021-5-20T15:30:00.000+00:00', capacity: 8 }
  , { price: 221, destination: 'QAIA', origin: 'FlySFO', date: '2021-7-24T21:30:00.000+00:00', capacity: 11 }
  , { price: 485, destination: 'TIP', origin: 'TUN', date: '2021-8-2T0:30:00.000+00:00', capacity: 18 }
  , { price: 102, destination: 'LCY', origin: 'TUN', date: '2021-4-24T8:30:00.000+00:00', capacity: 16 }
  , { price: 102, destination: 'TUN', origin: 'QAIA', date: '2021-4-28T3:30:00.000+00:00', capacity: 10 }
  , { price: 215, destination: 'LCY', origin: 'QAIA', date: '2021-3-13T6:30:00.000+00:00', capacity: 17 }
  , { price: 222, destination: 'TIP', origin: 'LCY', date: '2021-5-19T0:30:00.000+00:00', capacity: 18 }
  , { price: 75, destination: 'LCY', origin: 'TUN', date: '2021-10-11T11:30:00.000+00:00', capacity: 15 }
  , { price: 74, destination: 'FlySFO', origin: 'TUN', date: '2021-9-15T22:30:00.000+00:00', capacity: 6 }
  , { price: 98, destination: 'LCY', origin: 'FlySFO', date: '2021-1-25T17:30:00.000+00:00', capacity: 15 }
  , { price: 700, destination: 'QAIA', origin: 'TIP', date: '2021-7-22T4:30:00.000+00:00', capacity: 17 }
  , { price: 254, destination: 'LCY', origin: 'TIP', date: '2021-4-3T17:30:00.000+00:00', capacity: 8 }
  , { price: 65, destination: 'TIP', origin: 'TUN', date: '2021-6-20T7:30:00.000+00:00', capacity: 11 }
  , { price: 457, destination: 'LCY', origin: 'TUN', date: '2021-5-8T17:30:00.000+00:00', capacity: 18 }
  , { price: 100, destination: 'TUN', origin: 'LCY', date: '2021-12-26T7:30:00.000+00:00', capacity: 15 }
  , { price: 112, destination: 'TUN', origin: 'LCY', date: '2021-11-27T9:30:00.000+00:00', capacity: 6 }
  , { price: 134, destination: 'TIP', origin: 'LCY', date: '2021-1-21T6:30:00.000+00:00', capacity: 6 }
  , { price: 120, destination: 'TIP', origin: 'QAIA', date: '2021-2-22T18:30:00.000+00:00', capacity: 8 }
  , { price: 79, destination: 'LCY', origin: 'QAIA', date: '2021-6-24T4:30:00.000+00:00', capacity: 7 }
  , { price: 111, destination: 'TIP', origin: 'LCY', date: '2021-12-7T18:30:00.000+00:00', capacity: 15 }
  , { price: 167, destination: 'TUN', origin: 'TIP', date: '2021-10-26T21:30:00.000+00:00', capacity: 18 }
  , { price: 125, destination: 'FlySFO', origin: 'QAIA', date: '2021-5-15T17:30:00.000+00:00', capacity: 17 }
  , { price: 130, destination: 'TUN', origin: 'LCY', date: '2021-5-4T4:30:00.000+00:00', capacity: 18 }
  , { price: 162, destination: 'FlySFO', origin: 'QAIA', date: '2021-3-3T21:30:00.000+00:00', capacity: 19 }
  , { price: 155, destination: 'FlySFO', origin: 'TUN', date: '2021-6-2T23:30:00.000+00:00', capacity: 8 }
  , { price: 117, destination: 'TIP', origin: 'LCY', date: '2021-5-19T23:30:00.000+00:00', capacity: 20 }
  , { price: 185, destination: 'QAIA', origin: 'TUN', date: '2021-7-11T9:30:00.000+00:00', capacity: 8 }
  , { price: 143, destination: 'QAIA', origin: 'FlySFO', date: '2021-5-5T2:30:00.000+00:00', capacity: 7 }
  , { price: 167, destination: 'TIP', origin: 'TUN', date: '2021-6-7T16:30:00.000+00:00', capacity: 19 }
  , { price: 144, destination: 'FlySFO', origin: 'QAIA', date: '2021-3-15T2:30:00.000+00:00', capacity: 12 }
  , { price: 155, destination: 'LCY', origin: 'TUN', date: '2021-11-21T19:30:00.000+00:00', capacity: 20 }
  , { price: 166, destination: 'LCY', origin: 'QAIA', date: '2021-10-16T2:30:00.000+00:00', capacity: 15 }
  , { price: 177, destination: 'LCY', origin: 'TUN', date: '2021-4-29T12:30:00.000+00:00', capacity: 15 }
  , { price: 188, destination: 'TIP', origin: 'LCY', date: '2021-8-4T9:30:00.000+00:00', capacity: 8 }
  , { price: 113, destination: 'TIP', origin: 'QAIA', date: '2021-5-17T7:30:00.000+00:00', capacity: 13 }
  , { price: 187, destination: 'LCY', origin: 'TUN', date: '2021-10-13T17:30:00.000+00:00', capacity: 4 }
  , { price: 84, destination: 'TIP', origin: 'QAIA', date: '2021-6-14T3:30:00.000+00:00', capacity: 11 }
  , { price: 212, destination: 'FlySFO', origin: 'TIP', date: '2021-2-4T2:30:00.000+00:00', capacity: 20 }
  , { price: 121, destination: 'LCY', origin: 'TUN', date: '2021-11-3T17:30:00.000+00:00', capacity: 20 }
  , { price: 264, destination: 'TUN', origin: 'QAIA', date: '2021-11-11T0:30:00.000+00:00', capacity: 10 }
  , { price: 114, destination: 'LCY', origin: 'TUN', date: '2021-10-15T2:30:00.000+00:00', capacity: 7 }
  , { price: 116, destination: 'FlySFO', origin: 'QAIA', date: '2021-4-5T17:30:00.000+00:00', capacity: 4 }
  , { price: 120, destination: 'TIP', origin: 'QAIA', date: '2021-5-4T6:30:00.000+00:00', capacity: 13 }
  , { price: 174, destination: 'TIP', origin: 'LCY', date: '2021-11-8T7:30:00.000+00:00', capacity: 9 }
  , { price: 178, destination: 'FlySFO', origin: 'TIP', date: '2021-5-21T11:30:00.000+00:00', capacity: 4 }
  , { price: 198, destination: 'TUN', origin: 'LCY', date: '2021-10-24T21:30:00.000+00:00', capacity: 10 }
  , { price: 189, destination: 'FlySFO', origin: 'TIP', date: '2021-8-22T23:30:00.000+00:00', capacity: 4 }
  , { price: 199, destination: 'TIP', origin: 'LCY', date: '2021-7-10T22:30:00.000+00:00', capacity: 16 }
  , { price: 114, destination: 'FlySFO', origin: 'TIP', date: '2021-5-8T10:30:00.000+00:00', capacity: 7 }
  , { price: 144, destination: 'FlySFO', origin: 'TIP', date: '2021-9-12T19:30:00.000+00:00', capacity: 20 }
  , { price: 156, destination: 'QAIA', origin: 'LCY', date: '2021-7-13T15:30:00.000+00:00', capacity: 17 }
  , { price: 174, destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T17:30:00.000+00:00', capacity: 20 }
  , { price: 171, destination: 'FlySFO', origin: 'LCY', date: '2021-4-28T10:30:00.000+00:00', capacity: 9 }
  , { price: 195, destination: 'QAIA', origin: 'FlySFO', date: '2021-10-27T13:30:00.000+00:00', capacity: 20 }
  , { price: 215, destination: 'LCY', origin: 'TUN', date: '2021-8-17T11:30:00.000+00:00', capacity: 7 }
  , { price: 298, destination: 'TUN', origin: 'LCY', date: '2021-6-23T17:30:00.000+00:00', capacity: 6 }
  , { price: 451, destination: 'TUN', origin: 'QAIA', date: '2021-1-15T0:30:00.000+00:00', capacity: 6 }
  , { price: 651, destination: 'TIP', origin: 'QAIA', date: '2021-3-4T17:30:00.000+00:00', capacity: 18 }
  , { price: 314, destination: 'FlySFO', origin: 'TUN', date: '2021-11-20T12:30:00.000+00:00', capacity: 12 }
  , { price: 154, destination: 'TIP', origin: 'QAIA', date: '2021-2-22T0:30:00.000+00:00', capacity: 4 }
  , { price: 140, destination: 'TIP', origin: 'TUN', date: '2021-2-30T9:30:00.000+00:00', capacity: 10 }
  , { price: 625, destination: 'LCY', origin: 'QAIA', date: '2021-11-29T14:30:00.000+00:00', capacity: 19 }
  , { price: 111, destination: 'QAIA', origin: 'FlySFO', date: '2021-5-19T22:30:00.000+00:00', capacity: 20 }
  , { price: 784, destination: 'FlySFO', origin: 'TUN', date: '2021-6-8T16:30:00.000+00:00', capacity: 12 }
]


const saveRandomData = () => {


  flights.forEach(element => {

    newFlightModel(element).save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

};

saveRandomData()