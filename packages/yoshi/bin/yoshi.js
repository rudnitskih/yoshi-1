#!/usr/bin/env node
const importLocal = require('import-local');
const verifyNodeVersion = require('../src/verify-node-version');

verifyNodeVersion();

if (!importLocal(__filename)) {
  require('./yoshi-cli');
}
