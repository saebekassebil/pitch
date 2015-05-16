'use strict';

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
 * scale(pitch('c2'), scales.major).map(transpose(interval('M2')));
 */
module.exports = function(pitch, interval) {
  if(arguments.length == 2) {
    return add(pitch, interval);
  } else if (arguments.length == 1) {
    return function(coord) {
      return add(pitch, coord);
    }
  }
}

function add(pitch, interval) {
    return [pitch[0] + interval[0], pitch[1] + interval[1]];
}
