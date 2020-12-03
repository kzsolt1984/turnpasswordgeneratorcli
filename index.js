#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const generator  = require('./lib/generator');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Generator', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  const generated = await generator(credentials.secret, credentials.validityInSec, credentials.name)

  console.log(`
    Username: ${chalk.blue(generated.username)}
    Password: ${chalk.green(generated.password)}
  `)
};

run();
