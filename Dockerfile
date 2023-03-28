FROM node:lts-alpine3.15 as prod

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN echo 'export const url = "https://socialemoteapi.duckdns.org";' > /app/src/components/controllers/env.js

RUN npm run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=prod /app/dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]