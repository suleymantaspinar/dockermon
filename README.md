# dockermon
Dockermon is a simple CLI tool for running node js applications in a docker container with a hot reload.

# Motivation
Former versions of node.js v16 don't support Apple Silicon natively. This makes it difficult to setup a local development environment with hot reload. In order to do that you need to write a bunch of docker commands. (creating docker volume for node modules, installing nodemon on docker image, mounting volumes, creating docker ignore file to ignore node_modules folder, etc...) With this simple automation tool you can create a local development environment faster.

# Installation

```
npm install -g dockermon 
```

# Usage
In your project dir.Run:
```
dockermon .
```
It will build a Docker image for your project and will run the container. Then you can start editing your project which runs on the container from your host.
