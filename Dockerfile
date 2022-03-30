# Stage 1

#FROM node:10-alpine as build-step

RUN mkdir -p /AngularApp

WORKDIR /AngularApp

COPY package.json /AngularApp
RUN npm install

COPY . /AngularApp
RUN npm run build --prod
# Stage 2
#FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/docs /usr/share/nginx/html
