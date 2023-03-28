FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

WORKDIR dist

EXPOSE 80