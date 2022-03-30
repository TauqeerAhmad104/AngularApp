# Stage 1

#FROM node:10-alpine as build-step
FROM node:14-alpine as build-step
RUN mkdir -p /AngularApp

WORKDIR /AngularApp

COPY package.json build-step/AngularApp  
RUN npm install
RUN npm link @angular/cli

COPY . /AngularApp
RUN cd AngularApp
RUN npm install
RUN npm start
# Stage 2
#FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/docs /usr/share/nginx/html
