# Stage 1

FROM node AS build
WORKDIR /app

COPY . ./
COPY package.json /Tauqeerapp/package.json

RUN npm install
RUN npm install -g @angular/cli
RUN -p 4202:4200 app:latest

COPY . /app
CMD ng serve --host 0.0.0.0


