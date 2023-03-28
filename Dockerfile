FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm install

CMD ["npm", "run", "build"]

COPY dist/assets /app/assets
COPY dist/index.html /app/index.html

EXPOSE 80