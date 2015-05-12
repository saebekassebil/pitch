'use strict';

var k = require('./internal/knowledge.js');
var accVal = require('./internal/accidental-value.js');

/*
 * name
 *
 * @param {Array} the coord
 * @return {String} the pitch name of the coord
 */
module.exports = function(coord) {
  return k.fifths[coord[1] + k.A4[1] - accVal(coord) * 7 + 1];
}
