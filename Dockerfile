# Stage 1

#FROM node:10-alpine as build-step
FROM node:10-alpine as build-step
RUN mkdir -p /AngularApp

WORKDIR /AngularApp

COPY package.json build-step/AngularApp
RUN nvm install 11  
RUN nvm install 12
RUN nvm alias default 12  
RUN npm install
RUN npm link @angular/cli

COPY . /AngularApp
RUN node_modules/.bin/ng build --prod
# Stage 2
#FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/docs /usr/share/nginx/html
