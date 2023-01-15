FROM node:16-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# mount cache to speed up build time
RUN --mount=type=cache,target=/usr/src/app/node_modules \
    --mount=type=cache,target=/root/.npm \
    npm install

COPY . .

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80

