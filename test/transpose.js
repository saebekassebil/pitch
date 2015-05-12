vows = require('vows');
assert = require('assert');

N = require('./notes.json');
I = require('./intervals.json');
transpose = require('../lib/transpose.js');

vows.describe("str method").addBatch({
  "transpose": function() {
    assert.deepEqual(transpose(N['c2'], I['M2']), N['d2']);
  }

}).export(module);
