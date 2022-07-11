FROM node:14.18.1-alpine AS build-step

RUN mkdir /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

# RUN npm start
CMD ["npm", "start"]
