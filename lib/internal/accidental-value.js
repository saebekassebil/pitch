'use strict';

var k = require('./knowledge.js');

/*
 * accidentalValue (internal)
 */
module.exports = function(coord) {
  return Math.round((coord[1] + k.A4[1] - 2) / 7);
}
