FROM node:8

WORKDIR /tmp
COPY package.json /tmp/
COPY package-lock.json /tmp
RUN npm install npm@6.4.1 -g
RUN npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
