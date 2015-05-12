'use strict';

var k = require('../internal/knowledge.js');
var accVal = require('../internal/accidental-value.js');
var name = require('./name.js');
/*
 * octave
 */
module.exports = function(coord) {
  return coord[0] + k.A4[0] - k.notes[name(coord)][0] +
      accVal(coord) * 4;
}
