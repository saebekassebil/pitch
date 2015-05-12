'use strict';
/*
 * is
 *
 * Test types of things
 */
module.exports = {
  str: function(v) { return typeof(v) === 'string'; },
  coord: function(v) { return Array.isArray(v) && v.length == 2; }
}
