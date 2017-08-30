
# Obtain full address from GPS coordinates, Micro-Service.
*Part of NotifyDriver project's back-end*

This is a simple microservice developed with [Seneca](http://senecajs.org/) microservices toolkit.
Its aim is to get the user full address from his GPS coordinates.
It can be used under *service-to-service*  or *user-to-service* patterns. To communicate with it, I used HTTP as transport (pipeline).

![alt text](https://raw.githubusercontent.com/fkanout/GPS-to-address-MicroService/master/demo/demo.gif)

# How to use

`git clone https://github.com/fkanout/GPS-to-address-MicroService`

`cd GPS-to-address-MicroService`

`npm install`

*for developement*

`node bin/app.js` 

*for production*:

use the `IIFE (Immediately Invoked Function Expression)`directly from `lib/index.js`


*By default the service is available on:*

`http://localhost:8888/geolocation`



# Example

`curl -d '{"task": "geolocation", "gps": {"lat":48.8529806, "log":2.3273854 }}' http://localhost:8888/geolocation`

- HTTP method: `POST`
- body: `{"task": "geolocation", "gps": {"lat":` **LAT_VALUE**`, "log": `**LOG_VALUE**` }}`

# ENV variables

`SERVICE_PORT` *service listing port*

`SERVICE_PATH` *service's route*

`ADDRESS_API` *The URL of the external API to resolve address, e.g: Google API*

# Who am I

[Website](https://www.kanout.com)

[Linkedin](https://www.linkedin.com/in/faisalkanout/)
