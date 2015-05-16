'use strict';

var scientific = require('scientific-notation');
/*
 * pitch
 */
module.exports = function(value) {
  return isCoord(value) ? value : scientific(value);
}

function isCoord(value) {
  return Array.isArray(value) && value.length === 2;
}
