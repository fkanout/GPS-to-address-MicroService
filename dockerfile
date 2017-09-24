FROM node:8.4.0

MAINTAINER FaisalKANOUT

RUN mkdir -p /home/notifydriver/gpsToAddress

WORKDIR /home/notifydriver/gpsToAddress

COPY package.json /home/notifydriver/gpsToAddress

RUN npm install

COPY . /home/notifydriver/gpsToAddress

ENV SERVICE_PORT=9001

EXPOSE 9001

CMD [ "node", "bin/app.js" ]