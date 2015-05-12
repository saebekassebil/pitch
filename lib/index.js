'use strict';

var pitch = require('./pitch.js');

pitch.pitch       = pitch;
pitch.interval    = require('./interval.js');
pitch.str         = require('./str.js');
pitch.transpose   = require('./transpose.js');

module.exports = pitch;
