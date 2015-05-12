'use strict';

var transpose = require('./transpose.js');
/*
 * scale
 *
 * @param {Array} base note coord
 * @param {Array} an array of interval coords
 * @return {Array} an array of note coords
 */
module.exports = function(root, intervals) {
  return intervals.map(function(interval) {
    return transpose(root, interval);
  });
}
