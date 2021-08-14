const fs  = require('fs');

const FILE_NAME = `Dockerfile.dev`
const TEMPLATE = `
FROM node:14-alpine as base
COPY . /src
WORKDIR /src
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
CMD ["nodemon", "index.js"]
`
fs.writeFileSync(FILE_NAME, TEST_TEMPLATE)