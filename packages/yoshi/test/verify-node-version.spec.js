const verifyNodeVersion = require('../src/verify-node-version');
const expect = require('chai').expect;

describe('mocked outdated node version', function() {
  beforeEach(function(){
    this.originalVersion = process.version;
    Object.defineProperty(process, 'version', {
      value: 'v4.0.0',
    });
  });

  afterEach(function() {
    Object.defineProperty(process, 'version', {
      value: this.originalVersion,
    });
  });

  it('should exit early if ran with outdated node version', function() {
    expect(verifyNodeVersion).to.throw('Must use node.js version >=10.0');
  });
});
