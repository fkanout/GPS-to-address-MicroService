const seneca = require('seneca')()
const rpn = require('request-promise-native');

seneca.add('task:geolocation', (msg, cb) => {
    console.log(msg);
    cb(null, { msg: 'its working' });
});
seneca.listen({ path: '/geolocation', port: 8888});
