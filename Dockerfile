# Stage 1

FROM node AS build
WORKDIR /app

COPY . ./
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /app

CMD ng serve --host 0.0.0.0

RUN -p 4201:4200 app:latest
