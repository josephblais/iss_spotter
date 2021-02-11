// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

let IPfreely = "";

fetchMyIP((error, ip) => {
  if (error) {
    // console.log("It didn't work!" , error);
    return;
  }

  // console.log('It worked! Returned IP:' , ip);
  IPfreely += ip;
  return ip;
});


fetchCoordsByIP(IPfreely, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});