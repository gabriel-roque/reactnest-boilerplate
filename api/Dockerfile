FROM node:12.2.0-alpine

WORKDIR /api

COPY ./package.json /api
RUN sh -c 'npm install'

COPY ./ /api

EXPOSE 8080

# CMD [ "npm", "start"]
