const fs  = require('fs');
const homedir = require('os').homedir();

const DIR_NAME = `${homedir}/.dockermon`
const FILE_NAME = `${homedir}/.dockermon/Dockerfile.dev`
const TEMPLATE = 
`FROM node:14-alpine as base
COPY . /src
WORKDIR /src
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
CMD ["nodemon", "index.js"]`

if (!fs.existsSync(DIR_NAME)){
  fs.mkdirSync(DIR_NAME);
}

if (!fs.existsSync(FILE_NAME)) {
  fs.writeFileSync(FILE_NAME, TEMPLATE);
}