'use strict';

var vector = require('../internal/vector.js');
var k = require('../internal/knowledge.js');

/*
 * interval.value
 *
 */
module.exports = function(coord) {
  var without = vector.sub(coord,
    vector.mul(k.sharp, Math.floor((coord[1] - 2) / 7) + 1));

  var i = k.intervalFromFifth[without[1] + 5];
  var val = k.stepNumber[i] + (without[0] - k.intervals[i][0]) * 7;

  return (val > 0) ? val : val - 2;
}
