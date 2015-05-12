'use strict';

var name = require('./name.js');
var accidental = require('./accidental.js');
var octave = require('./octave.js');
/*
 * str
 *
 * @return {String} the string pitch for a coord
 */
module.exports = function(coord) {
  return name(coord) + accidental(coord) + octave(coord);
}
