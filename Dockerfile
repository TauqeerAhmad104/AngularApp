# Stage 1

FROM node AS build
WORKDIR /app

COPY . ./
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /app

EXPOSE 4200


CMD ["ng", "serve", "--host", "0.0.0.0"]

#CMD ["ng serve", "docker run -d -p host 0.0.0.0:4242", "daemon off;"]
#CMD ["ng serve", "-g", "--host 0.0.0.0", "daemon off;"]
#CMD ng serve --host 0.0.0.0

#CMD ["npm", "run", "start"]


