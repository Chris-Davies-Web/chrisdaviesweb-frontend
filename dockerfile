FROM node:latest as build-stage
WORKDIR /
COPY package*.json ./
RUN npm install
COPY ./ .
RUN export NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM nginx as production-stage
RUN mkdir /app
RUN ls -l
RUN pwd
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf