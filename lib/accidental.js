'use strict';

var k = require('./internal/knowledge.js');
var accVal = require('./internal/accidental-value.js');

/*
 * accidental
 *
 * @param {Array} coord - the pitch coordinate
 * @returns {String} - the string symbolic of the accidental sign (x, #, b or bb)
 */
module.exports = function(coord) {
  return k.accidentals[accVal(coord) + 2];
}
