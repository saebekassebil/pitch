/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var pitch = __webpack_require__(8);
	if(typeof(window) !== 'undefined') window.pitch = pitch;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vector = __webpack_require__(11);

	/*
	 * transpose
	 *
	 * @param {Array} the pitch coord
	 * @param {Array} the interval coord
	 * @return {Array} the transposed pitch coord
	 */
	module.exports = function(pitch, interval) {
	  return vector.add(pitch, interval);
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var k = __webpack_require__(9);
	var accVal = __webpack_require__(10);

	/*
	 * accidental
	 */
	module.exports = function(coord) {
	  return k.accidentals[accVal(coord) + 2];
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vector = __webpack_require__(11);
	var knowledge = __webpack_require__(9);
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var k = __webpack_require__(9);
	var accVal = __webpack_require__(10);

	/*
	 * name
	 *
	 * @param {Array} the coord
	 * @return {String} the pitch name of the coord
	 */
	module.exports = function(coord) {
	  return k.fifths[coord[1] + k.A4[1] - accVal(coord) * 7 + 1];
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var k = __webpack_require__(9);
	var accVal = __webpack_require__(10);
	var name = __webpack_require__(4);
	/*
	 * octave
	 */
	module.exports = function(coord) {
	  return coord[0] + k.A4[0] - k.notes[name(coord)][0] +
	      accVal(coord) * 4;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var scientific = __webpack_require__(13);
	var is = __webpack_require__(12);
	/*
	 * pitch
	 */
	module.exports = function(value) {
	  return is.coord(value) ? value : scientific(value);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var name = __webpack_require__(4);
	var accidental = __webpack_require__(2);
	var octave = __webpack_require__(5);
	/*
	 * str
	 *
	 * @return {String} the string pitch for a coord
	 */
	module.exports = function(coord) {
	  return name(coord) + accidental(coord) + octave(coord);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  accidental: __webpack_require__(2),
	  interval: __webpack_require__(3),
	  name: __webpack_require__(4),
	  octave: __webpack_require__(5),
	  pitch: __webpack_require__(6),
	  str: __webpack_require__(7),
	  transpose: __webpack_require__(1)
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Note coordinates [octave, fifth] relative to C
	module.exports = {
	  notes: {
	    c: [0, 0],
	    d: [-1, 2],
	    e: [-2, 4],
	    f: [1, -1],
	    g: [0, 1],
	    a: [-1, 3],
	    b: [-2, 5],
	    h: [-2, 5]
	  },

	  intervals: {
	    unison: [0, 0],
	    second: [3, -5],
	    third: [2, -3],
	    fourth: [1, -1],
	    fifth: [0, 1],
	    sixth: [3, -4],
	    seventh: [2, -2],
	    octave: [1, 0]
	  },

	  intervalFromFifth: ['second', 'sixth', 'third', 'seventh', 'fourth',
	                         'unison', 'fifth'],

	  intervalsIndex: ['unison', 'second', 'third', 'fourth', 'fifth',
	                      'sixth', 'seventh', 'octave', 'ninth', 'tenth',
	                      'eleventh', 'twelfth', 'thirteenth', 'fourteenth',
	                      'fifteenth'],

	// linaer index to fifth = (2 * index + 1) % 7
	  fifths: ['f', 'c', 'g', 'd', 'a', 'e', 'b'],
	  accidentals: ['bb', 'b', '', '#', 'x'],

	  sharp: [-4, 7],
	  A4: [3, 3],

	  durations: {
	    '0.25': 'longa',
	    '0.5': 'breve',
	    '1': 'whole',
	    '2': 'half',
	    '4': 'quarter',
	    '8': 'eighth',
	    '16': 'sixteenth',
	    '32': 'thirty-second',
	    '64': 'sixty-fourth',
	    '128': 'hundred-twenty-eighth'
	  },

	  qualityLong: {
	    P: 'perfect',
	    M: 'major',
	    m: 'minor',
	    A: 'augmented',
	    AA: 'doubly augmented',
	    d: 'diminished',
	    dd: 'doubly diminished'
	  },

	  alterations: {
	    perfect: ['dd', 'd', 'P', 'A', 'AA'],
	    minor: ['dd', 'd', 'm', 'M', 'A', 'AA']
	  },

	  symbols: {
	    'min': ['m3', 'P5'],
	    'm': ['m3', 'P5'],
	    '-': ['m3', 'P5'],

	    'M': ['M3', 'P5'],
	    '': ['M3', 'P5'],

	    '+': ['M3', 'A5'],
	    'aug': ['M3', 'A5'],

	    'dim': ['m3', 'd5'],
	    'o': ['m3', 'd5'],

	    'maj': ['M3', 'P5', 'M7'],
	    'dom': ['M3', 'P5', 'm7'],
	    'ø': ['m3', 'd5', 'm7'],

	    '5': ['P5']
	  },

	  chordShort: {
	    'major': 'M',
	    'minor': 'm',
	    'augmented': 'aug',
	    'diminished': 'dim',
	    'half-diminished': '7b5',
	    'power': '5',
	    'dominant': '7'
	  },

	  stepNumber: {
	    'unison': 1,
	    'first': 1,
	    'second': 2,
	    'third': 3,
	    'fourth': 4,
	    'fifth': 5,
	    'sixth': 6,
	    'seventh': 7,
	    'octave': 8,
	    'ninth': 9,
	    'eleventh': 11,
	    'thirteenth': 13
	  },

	  // Adjusted Shearer syllables - Chromatic solfege system
	  // Some intervals are not provided for. These include:
	  // dd2 - Doubly diminished second
	  // dd3 - Doubly diminished third
	  // AA3 - Doubly augmented third
	  // dd6 - Doubly diminished sixth
	  // dd7 - Doubly diminished seventh
	  // AA7 - Doubly augmented seventh
	  intervalSolfege: {
	    'dd1': 'daw',
	    'd1': 'de',
	    'P1': 'do',
	    'A1': 'di',
	    'AA1': 'dai',
	    'd2': 'raw',
	    'm2': 'ra',
	    'M2': 're',
	    'A2': 'ri',
	    'AA2': 'rai',
	    'd3': 'maw',
	    'm3': 'me',
	    'M3': 'mi',
	    'A3': 'mai',
	    'dd4': 'faw',
	    'd4': 'fe',
	    'P4': 'fa',
	    'A4': 'fi',
	    'AA4': 'fai',
	    'dd5': 'saw',
	    'd5': 'se',
	    'P5': 'so',
	    'A5': 'si',
	    'AA5': 'sai',
	    'd6': 'law',
	    'm6': 'le',
	    'M6': 'la',
	    'A6': 'li',
	    'AA6': 'lai',
	    'd7': 'taw',
	    'm7': 'te',
	    'M7': 'ti',
	    'A7': 'tai',
	    'dd8': 'daw',
	    'd8': 'de',
	    'P8': 'do',
	    'A8': 'di',
	    'AA8': 'dai'
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var k = __webpack_require__(9);

	/*
	 * accidentalValue (internal)
	 */
	module.exports = function(coord) {
	  return Math.round((coord[1] + k.A4[1] - 2) / 7);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = {
	  add: function(note, interval) {
	    return [note[0] + interval[0], note[1] + interval[1]];
	  },

	  sub: function(note, interval) {
	    return [note[0] - interval[0], note[1] - interval[1]];
	  },

	  mul: function(note, interval) {
	    if (typeof interval === 'number')
	      return [note[0] * interval, note[1] * interval];
	    else
	      return [note[0] * interval[0], note[1] * interval[1]];
	  },

	  sum: function(coord) {
	    return coord[0] + coord[1];
	  }
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var coords = __webpack_require__(14);
	var accval = __webpack_require__(15);

	module.exports = function scientific(name) {
	  var format = /^([a-h])(x|#|bb|b?)(-?\d*)/i;

	  parser = name.match(format);
	  if (!(parser && name === parser[0] && parser[3].length)) return;

	  var noteName = parser[1];
	  var octave = +parser[3];
	  var accidental = parser[2].length ? parser[2].toLowerCase() : '';

	  var accidentalValue = accval.interval(accidental);
	  var coord = coords(noteName.toLowerCase());

	  coord[0] += octave;
	  coord[0] += accidentalValue[0] - coords.A4[0];
	  coord[1] += accidentalValue[1] - coords.A4[1];

	  return coord;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// First coord is octaves, second is fifths. Distances are relative to c
	var notes = {
	  c: [0, 0],
	  d: [-1, 2],
	  e: [-2, 4],
	  f: [1, -1],
	  g: [0, 1],
	  a: [-1, 3],
	  b: [-2, 5],
	  h: [-2, 5]
	};

	module.exports = function(name) {
	  return name in notes ? [notes[name][0], notes[name][1]] : null;
	};

	module.exports.notes = notes;
	module.exports.A4 = [3, 3]; // Relative to C0 (scientic notation, ~16.35Hz)
	module.exports.sharp = [-4, 7];


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var accidentalValues = {
	  'bb': -2,
	  'b': -1,
	  '': 0,
	  '#': 1,
	  'x': 2
	};

	module.exports = function accidentalNumber(acc) {
	  return accidentalValues[acc];
	}

	module.exports.interval = function accidentalInterval(acc) {
	  var val = accidentalValues[acc];
	  return [-4 * val, 7 * val];
	}


/***/ }
/******/ ]);