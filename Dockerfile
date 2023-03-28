FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN echo 'export const url = "https://socialemoteapi.duckdns.org";' > /app/src/components/controllers/env.js

CMD ["npm", "run", "build"]

EXPOSE 80