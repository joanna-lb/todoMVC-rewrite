FROM node:current-alpine

WORKDIR '/app'
COPY package.json .

RUN npm install
RUN npm install json-server -g

COPY . .
EXPOSE 8081
RUN npm run build

CMD npm start
