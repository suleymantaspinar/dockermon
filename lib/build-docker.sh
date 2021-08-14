#!/bin/sh
docker build -f Dockerfile.dev -t test-dockermon .
docker volume create --name test-dockermon-node-modules
docker run -v $(pwd)/${PROJECT_PATH}:/source -v test-dockermon-node-modules:/source/node_modules -p 3000:3000 test-dockermon:latest