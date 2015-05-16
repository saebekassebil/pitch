vows = require('vows');
assert = require('assert');

NOTES = require('./data/notes.json');
letter = require('../lib').letter;

vows.describe("letter method").addBatch({
  "pitch letter": function() {
    letters = 'a b c d e f g'.split(' ');
    letters.forEach(function(l) {
      assert.equal(letter(NOTES[l + '#4']), l);
    });
  }
}).export(module);
