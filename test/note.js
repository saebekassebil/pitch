vows = require('vows');
assert = require('assert');

N = require('./notes.json');
note = require('../lib/note.js');

vows.describe("note method").addBatch({
  "parse": {
    "parse note": function() {
      p = note('c2');
      assert.deepEqual(p, [-1, -3]);
    },
    "parse uppercase note": function() {
      p = note('C2');
      assert.deepEqual(p, [-1, -3]);
    }
  },
  "bypass coord": function() {
    a = note('c2');
    b = note(a);
    assert(a === b);
  }
}).export(module);
