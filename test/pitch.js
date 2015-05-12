vows = require('vows');
assert = require('assert');

pitch = require('../lib/pitch.js');

vows.describe("pitch method").addBatch({
  "parse pitch": function() {
    p = pitch('c2');
    assert.deepEqual(p, [-1, -3]);
  },
  "bypass coord": function() {
    a = pitch('c2');
    b = pitch(a);
    assert(a === b);
  }
}).export(module);
