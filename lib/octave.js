'use strict';

var k = require('./internal/knowledge.js');
var accVal = require('./internal/accidental-value.js');
var name = require('./letter.js');

/*
 * octave
 *
 * @param {Array} coord - The pitch in coord system
 * @returns {Integer} - The numeric value of the octave of the note
 */
module.exports = function(coord) {
  return coord[0] + k.A4[0] - k.notes[name(coord)][0] +
      accVal(coord) * 4;
}
