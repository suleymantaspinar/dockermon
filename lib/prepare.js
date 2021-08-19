require('./generate-dockerfile');
require('./generate-docker-sh');

const crypto = require("crypto");
const cp = require('child_process');
const homedir = require('os').homedir();

module.exports.buildThings = function() {
  const child = cp.spawn(
    `chmod +x ${homedir}/.dockermon/build-docker.sh && ${homedir}/.dockermon/build-docker.sh`,
    [`test-dockermon-${crypto.randomBytes(3).toString('hex')}`],
    {
      stdio: 'pipe',
      shell: true
    }
  )

  child.stdout.on('data', (data) => {
    console.log("Dockermon is doing things stdout", String(data))
  })
  child.stderr.on('data', (data) => {
    console.log("Dockermon is doing things on stderr", String(data))
  })
}