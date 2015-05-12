vows = require('vows');
assert = require('assert');

pitch = require('../lib/pitch.js');
str = require('../lib/str.js');

vows.describe("str method").addBatch({
  "str": function() {
    n = str(pitch('c2'));
    assert.equal(n, 'c2');
  }

}).export(module);
