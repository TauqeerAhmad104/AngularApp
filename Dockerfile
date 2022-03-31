# Stage 1

FROM node AS build
WORKDIR /app

COPY . ./
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /app
#EXPOSE 4242

CMD ng serve --host 0.0.0.0:4242

#CMD ["npm", "run", "start"]


