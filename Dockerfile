# Stage 1

FROM node AS build
WORKDIR /Tauqeerapp

COPY . ./
COPY package.json /Tauqeerapp/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /Tauqeerapp
CMD ng serve --host 0.0.0.0


