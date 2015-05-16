vows = require('vows');
assert = require('assert');

N = require('./data/notes.json');
parse = require('../lib/').parse;

vows.describe("parse method").addBatch({
  "parse": {
    "parse parse": function() {
      p = parse('c2');
      assert.deepEqual(p, [-1, -3]);
    },
    "parse uppercase parse": function() {
      p = parse('C2');
      assert.deepEqual(p, [-1, -3]);
    }
  },
  "bypass coord": function() {
    a = parse('c2');
    b = parse(a);
    assert(a === b);
  }
}).export(module);
