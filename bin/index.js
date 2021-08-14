#!/usr/bin/env node

require('../lib/generate-docker');
const { Command } = require('commander');
const program = new Command();
var cp = require('child_process');

program.version('0.0.1');

program
  .description('This is the very first version of dockermon')
  .command('start [path]')
  .option('--test', 'Log the test option')
  .action(
    // buildDockerImage().createDockerVolume().runDockerContainer()
    cp.exec('chmod +x lib/build-docker.sh & lib/build-docker.sh ', function(err, stdout, stderr) {
      if(err) console.log("1", err)
      if(stderr) console.log("2", stderr)
    })
  )