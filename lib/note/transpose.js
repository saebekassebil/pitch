'use strict';

var vector = require('../internal/vector.js');

/*
 * transpose
 *
 * @param {Array} the pitch coord
 * @param {Array} the interval coord
 * @return {Array} the transposed pitch coord
 */
module.exports = function(pitch, interval) {
  return vector.add(pitch, interval);
}
