'use strict';

var pitch = require('./parse.js');
pitch.accidental = require('./accidental.js');
pitch.key = require('./key.js');
pitch.letter = require('./letter.js');
pitch.octave = require('./octave.js');
pitch.parse = require('./parse.js');
pitch.str = require('./str.js');
pitch.toString = pitch.str;
pitch.transpose = require('./transpose.js');

module.exports = pitch;
