#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { buildThings } = require('../lib/prepare')

program.version('0.0.1');

program
  .description('This is the very first version of dockermon. Start testing')
  .command('start [path]')
  .option('--test', 'Log the test option')
  .action(buildThings())