FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]