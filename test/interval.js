vows = require('vows');
assert = require('assert');

I = require('./intervals.json');
interval = require('../lib/interval.js');

vows.describe("interval method").addBatch({
  "parse interval": function() {
    i = interval('M2');
    assert.deepEqual(i, I['M2']);
  }
}).export(module);
