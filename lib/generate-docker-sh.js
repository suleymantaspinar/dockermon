const fs  = require('fs');
const homedir = require('os').homedir();

const FILE_NAME = `${homedir}/.dockermon/build-docker.sh`;
const TEMPLATE = 
`PROJECT_NAME=$1
PROJECT_VOLUME_NAME=\${1}_modules

docker build -f $HOME/.dockermon/Dockerfile.dev -t \${PROJECT_NAME} . &&
docker volume create --name \${PROJECT_VOLUME_NAME} &&
docker run \${PROJECT_NAME}:latest`;

if (!fs.existsSync(FILE_NAME)) {
  fs.writeFileSync(FILE_NAME, TEMPLATE);
};