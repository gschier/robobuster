var assert     = require('assert');
var RoboBuster = require('./RoboBuster');

var buster = new RoboBuster(this, 'Sample Test Suite');

var variableInScope = 'foo';

buster.add('Test1', function() {
  assert.equal(variableInScope, 'foo');
}).add('Test2', function() {
  assert.equal('bar', 'baz');
}).add('Test2', function() {
  // Tests wont make it here
  assert.equal('bar', 'bar');
});

buster.bust();
