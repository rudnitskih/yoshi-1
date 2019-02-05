#!/usr/bin/env node
const importLocal = require('import-local');
const verifyMinimumNodeVersion = require('yoshi-helpers/verifyMinimumNodeVersion');

verifyMinimumNodeVersion(`8.7.0`);

if (!importLocal(__filename)) {
  require('./yoshi-cli');
}
