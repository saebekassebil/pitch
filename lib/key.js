'use strict';

/*
 * key
 *
 * @returns {Integer} the key number of the note
 */
module.exports = function(coord) {
  return coord[0] * 12 + coord[1] * 7 + 49;
}
