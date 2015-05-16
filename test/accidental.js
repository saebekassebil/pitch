vows = require('vows');
assert = require('assert');

N = require('./data/notes.json');
acc = require('../lib').accidental;

vows.describe("accidental method").addBatch({
  "coord accidentals": function() {
    assert.equal(acc(N['c2']), '');
    assert.equal(acc(N['c#2']), '#');
    assert.equal(acc(N['cb2']), 'b');
  }
}).export(module);
