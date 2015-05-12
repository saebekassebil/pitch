vows = require('vows');
assert = require('assert');

__ = require('../lib');
transpose = require('../lib/transpose.js');

vows.describe("str method").addBatch({
  "transpose": function() {
    c = __.pitch('c2');
    i = __.interval('M2');
    d = __.pitch('d2');
    assert.deepEqual(transpose(c, i), d);
  }

}).export(module);
