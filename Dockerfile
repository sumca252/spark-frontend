FROM node:16-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src  ./src 
COPY ./public ./public
COPY .env.production* ./.env


COPY webpack.dev.config.js ./

EXPOSE 3000

CMD npm run prod

