vows = require('vows');
assert = require('assert');

N = require('./data/notes.json');
str = require('../lib/str.js');

vows.describe("str method").addBatch({
  "str": function() {
    assert.equal(str(N['c2']), 'c2');
  }

}).export(module);
