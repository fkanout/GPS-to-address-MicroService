module.exports = {
  addressAPI: process.env.ADDRESS_API || 'http://maps.googleapis.com/maps/api/geocode/json?latlng=',
  service: {
    port: process.env.SERVICE_PORT || 8888,
    path: process.env.SERVICE_PATH || '/geolocation',
  },
};
