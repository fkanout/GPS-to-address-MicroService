const seneca = require('seneca')({ log: 'quiet' });
const rpn = require('request-promise-native');
const constants = require('./constants');

(() => {
  seneca.add('task:geolocation', (msg, cb) => { // eslint-disable-line consistent-return
    if (msg.gps && (typeof (msg.gps.lat) === 'number' && typeof (msg.gps.log) === 'number')) {
      rpn(`${constants.addressAPI}${msg.gps.lat},${msg.gps.log}`)
        .then((resolvedAddress) => {
          const { status, results } = JSON.parse(resolvedAddress);
          if (status === 'OK') { return cb(null, { address: results[0].formatted_address }); }
          return cb({ err: 'Status is not ok' });
        })
        .catch(err => cb(err));
    } else return cb({ err: 'GPS coordinates are not valid' });
  });
  seneca.ready((err) => {
    if (err) { throw (err); }
    process.stdout.write(`${new Date()} Geolocation service is up and runnin...`);
  });
  seneca.listen({ path: constants.service.path, port: constants.service.port });
})();

