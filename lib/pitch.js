'use strict';

var scientific = require('scientific-notation');
var is = require('./internal/is');
/*
 * pitch
 */
module.exports = function(value) {
  return is.coord(value) ? value : scientific(value);
}
