FROM node:14.0.0-alpine

WORKDIR /api

COPY ./ /api

COPY ./.env /api

COPY ./package.json /api
RUN sh -c 'npm install'

EXPOSE 3000
