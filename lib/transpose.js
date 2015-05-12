'use strict';

var vector = require('./internal/vector.js');

/*
 * transpose
 *
 * Transpose two coords or return a transposer
 *
 * @param {Array} the pitch coord
 * @param {Array} the interval coord
 * @return {Array|Function} the transposed pitch coord or a transposer
 *  if only one coord is provided
 *
 * @example
 * scale(note('c2'), scales.major).map(transpose(interval('M2')));
 */
module.exports = function(pitch, interval) {
  if(arguments.length == 2) {
    return vector.add(pitch, interval);
  } else if (arguments.length == 1) {
    return function(coord) {
      return vector.add(pitch, coord);
    }
  }
}
