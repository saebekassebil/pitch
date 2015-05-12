vows = require('vows');
assert = require('assert');

N = require('./notes.json');
scales = require('../lib/scales/basic.js');
scale = require('../lib/scale.js');
str = require('../lib/note/str.js');

vows.describe("scale method").addBatch({
  "scale": function() {
    s = scale(N['c2'], scales.major);
    assert.deepEqual(s.map(str), ['c2', 'd2', 'e2', 'f2', 'g2', 'a2', 'b2']);
  }

}).export(module);
