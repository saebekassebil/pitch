vows = require('vows');
assert = require('assert');

I = require('../intervals.json');
value = require('../../lib/interval/value.js');

vows.describe("interval.value method").addBatch({
  "value": function() {
    v = value(I['P4']);
    assert.equal(v, 4);
    v = value(I['M-6']);
    assert.equal(v, -6);
    v = value(I['M13']);
    assert.equal(v, 13);
  }
}).export(module);
