vows = require('vows');
assert = require('assert');

interval = require('../lib/interval.js');

vows.describe("interval method").addBatch({
  "parse interval": function() {
    single = interval('M2');
    assert.deepEqual(single, [-1, 2]);
  }
}).export(module);
