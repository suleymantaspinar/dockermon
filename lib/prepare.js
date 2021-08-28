require('./generate-dockerfile');
require('./generate-docker-sh');

const crypto = require("crypto");
const cp = require('child_process');
const homedir = require('os').homedir();
const cwd = process.cwd();

module.exports.buildThings = function() {
  const child = cp.spawn(
    `chmod +x ${homedir}/.dockermon/build-docker.sh && ${homedir}/.dockermon/build-docker.sh`,
    [`test-dockermon-${crypto.randomBytes(3).toString('hex')}`, cwd],
    {
      stdio: 'pipe',
      shell: true
    }
  )
}