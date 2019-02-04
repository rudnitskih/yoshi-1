const pkg = require('../package.json');
const semver = require('semver');

module.exports = function verifyNodeVersion() {
  const requiredVersion = pkg.engines.node;
  const currentVersion = process.version;
  const isValid = semver.satisfies(currentVersion, requiredVersion);
  if(!isValid) {
    throw new Error(`Must use node.js version ${requiredVersion}`);
  }
};
