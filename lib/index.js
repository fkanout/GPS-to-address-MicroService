const seneca = require('seneca')();
const rpn = require('request-promise-native');
const constants = require('./constants');


seneca.add('task:geolocation', (msg, cb) => {
  console.log(msg);
  cb(null, { msg: 'its working' });
});

seneca.listen({ path: constants.service.path, port: constants.service.port });
