vows = require('vows');
assert = require('assert');

N = require('./data/notes.json');
key = require('../lib').key;

vows.describe("key method").addBatch({
  "simple note key": function() {
    assert.equal(key(N['c4']), 40);
    assert.equal(key(N['a4']), 49);
  }
}).export(module);
