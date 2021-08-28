const fs  = require('fs');
const homedir = require('os').homedir();

const FILE_NAME = `${homedir}/.dockermon/build-docker.sh`;
const TEMPLATE = 
`PROJECT_NAME=$1
PROJECT_PATH=$2
PROJECT_VOLUME_NAME=\${1}_modules

docker build -f $HOME/.dockermon/Dockerfile.dev -t \${PROJECT_NAME} \${PROJECT_PATH}
docker volume create --name \${PROJECT_VOLUME_NAME}
docker run -p 3000:3000 -v \${PROJECT_PATH}:/src -v \${PROJECT_VOLUME_NAME}:/src/node_modules \${PROJECT_NAME}:latest`;

if (!fs.existsSync(FILE_NAME)) {
  fs.writeFileSync(FILE_NAME, TEMPLATE);
};