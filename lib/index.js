'use strict';

function pitch() {

}

pitch.note = require('./note.js');
pitch.note.accidental = require('./note/accidental.js');
pitch.note.key = require('./note/key.js');
pitch.note.name = require('./note/name.js');
pitch.note.octave = require('./note/octave.js');
pitch.note.str = require('./note/str.js');

pitch.transpose = require('./transpose.js');

pitch.interval = require('./interval.js');
pitch.interval.value = require('./interval/value.js');

pitch.scale = require('./scale.js');
pitch.scales = require('./scales/basic.js');

module.exports = pitch;
