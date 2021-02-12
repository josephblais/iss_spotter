// index.js
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// let IPfreely = "";

// fetchMyIP((error, ip) => {
//   if (error) {
//     // console.log("It didn't work!" , error);
//     return;
//   }

//   // console.log('It worked! Returned IP:' , ip);
//   IPfreely += ip;
//   return ip;
// });


// fetchCoordsByIP(IPfreely, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });



const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  // console.log(passTimes);
  // console.log(typeof passTimes);
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});