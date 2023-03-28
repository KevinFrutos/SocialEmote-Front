FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN echo 'export const url = "https://socialemoteapi.duckdns.org";' > /app/src/components/controllers/env.js

RUN npm run build

WORKDIR /app/dist

EXPOSE 80