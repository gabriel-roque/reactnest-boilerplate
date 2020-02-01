FROM node:12.2.0-alpine

WORKDIR /app

COPY ./package.json /app
RUN sh -c 'npm install'

COPY ./ /app

EXPOSE 3000

# CMD [ "npm", "start" ]
