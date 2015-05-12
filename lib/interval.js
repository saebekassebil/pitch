'use strict';

var vector = require('./internal/vector');
var knowledge = require('./internal/knowledge');
/*
 * interval
 */
module.exports = function(name) {
  return parseInterval(name);
}

function parseInterval(simple) {
  var pattern = /^(AA|A|P|M|m|d|dd)(-?\d+)$/
    , parser, number, coord, quality, lower, octaves, base, type, alt, down;

  parser = simple.match(pattern);
  if (!parser)
    throw new Error('Invalid simple format interval: ' + simple);

  quality = parser[1];
  number = +parser[2];
  down = number < 0;
  number = down ? -number : number;

  lower = number > 8 ? ((number % 7) ? number % 7 : 7) : number;
  octaves = (number - lower) / 7;

  base = knowledge.intervals[knowledge.intervalsIndex[lower - 1]];
  coord = vector.add(base, [octaves, 0]);

  type = base[0] <= 1 ? 'perfect' : 'minor';
  if ((type === 'perfect' && (quality === 'M' || quality === 'm')) ||
      (type === 'minor' && quality === 'P')) {
    throw new Error('Invalid interval quality');
  }

  alt = knowledge.alterations[type].indexOf(quality) - 2;
  coord = vector.add(coord, vector.mul(knowledge.sharp, alt));
  coord = down ? vector.mul(coord, -1) : coord;

  return coord;
}
