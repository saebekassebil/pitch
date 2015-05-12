vows = require('vows');
assert = require('assert');

N = require('./notes.json');
I = require('./intervals.json');
transpose = require('../lib/transpose.js');
str = require('../lib/note/str.js');

vows.describe("str method").addBatch({
  "transpose": function() {
    assert.deepEqual(transpose(N['c2'], I['M2']), N['d2']);
  },
  "return a transposer": function() {
    scale = "c2 d2 e2".split(' ').map(function(note) {
      return N[note];
    });

    transposed = scale.map(transpose(I['M2'])).map(str);
    assert.deepEqual(transposed, ['d2', 'e2', 'f#2']);
  }

}).export(module);
