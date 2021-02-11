/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (err, res, body) => {
    if (err) {
      callback(err);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const IP = JSON.parse(body).ip;
    return callback(null, IP);
    
  });
  // use request to fetch IP address from JSON API
};

const fetchCoordsByIP = function(ip, callback) {

};


module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
};
