FROM debian

RUN apt-get update

RUN apt-get install -y gnupg2 curl git git-core

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get install -y nodejs

RUN mkdir microservices/

WORKDIR microservices

RUN rm -rf GPS-to-address-MicroService true

RUN git clone https://github.com/fkanout/GPS-to-address-MicroService

WORKDIR GPS-to-address-MicroService

RUN npm install

ENV SERVICE_PORT=9001

EXPOSE 9001

CMD [ "node", "bin/app.js" ]



