'use strict';

var k = require('./internal/knowledge.js');
var accVal = require('./internal/accidental-value.js');

/*
 * accidental
 */
module.exports = function(coord) {
  return k.accidentals[accVal(coord) + 2];
}
