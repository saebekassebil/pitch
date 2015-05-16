vows = require('vows');
assert = require('assert');

NOTES = require('./data/notes.json');
octave = require('../lib').octave;

vows.describe("octave method").addBatch({
  "pitch octave": function() {
    octaves = [1, 2, 3, 4];

    octaves.forEach(function(oct) {
      assert.equal(octave(NOTES['d#' + oct]), oct);
    });
  }
}).export(module);
