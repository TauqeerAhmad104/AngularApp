# Stage 1

FROM node AS build
WORKDIR /app

COPY . ./
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /app
#RUN -p 4242:4200 myapp:latest
EXPOSE 4242


CMD ["ng serve", "-g", "daemon off" "--host 0.0.0.0;"]
#CMD ng serve --host 0.0.0.0

#CMD ["npm", "run", "start"]


