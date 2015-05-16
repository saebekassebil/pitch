# Pitch

Manipulate note pitchs with easy. Uses a two valued coordinated system to
represent the pitch. Play nicely with [intervalo](github.com/danigb/intervalo)

## About

This is an idea of how teoria.js can be modularized to a very granular level. Inspired by a [talk](https://github.com/saebekassebil/teoria/issues/78) with [@saebekassebil](https://github.com/saebekassebil) and the lodash library.

## Usage

```js

var pitch = require('pitch');
pitch('a4') // -> [0, 0];
pitch.str([0, 0]) // -> a4
pitch.name([0, 0]) // -> a

pitch.transpose('a2', [-1, 2]) // -> [-1, 2]

```

Also, you can require the individual methods you need:

```js
var parse = require('pitch/parse');
var transpose = require('pitch/transpose');
var str = require('pitch/str');
str(transpose(parse('c2'), [-1, 2])) // -> d2
```

## API

This is a list of the implemented methods. All of they are available
by default if you require the entrie library:

```js
var pitch = require('pitch');
```

You can load only the desired method:

```js
var transpose = require('pitch/transpose');
```

### accidental

`pich.accidental(coord) => {String}`

Returns the string symbolic of the accidental sign (x, #, b or bb)

```js
pitch.accidental(pitch('c#2')); // => '#'
```

### key(coord) -> {Number}

Returns the piano key number

```js
pitch.key(pitch('a4')); // => 49
```

### letter

Returns the name of the note, in lowercase letter.

_Note: this method is called `name` in teoria.js_
```js
pitch.letter(pitch('D#3')); // => 'd'
```

### octave

Returns the numeric value of the octave of the note

```js
pitch.octave(pitch('f#5')); // => 5
```

### parse

Returns the coord of the given string (in scientific notation). If the
param is an array of two elements, it returns the array

```js
pitch.parse('f#2');     // => [ -4, 3 ]
pitch.parse([ -4, 3 ])  // => [ -4, 3 ]
```

_Note: `pitch('c#2')` and `pitch.parse('c#2')` are equivalents._

### str | toString

Returns a string representation of the given coordinates in scientific
notation.

```js
  pitch.str([ -4, 3 ]);        // => 'f#2'
  pitch.toString([ -4, 3 ]);   // => 'f#2'
```

### transpose

Transpose the a pitch by an interval. The intervals are in coord notation (you can use [intervalo](github.com/danigb/intervalo) library.

If only one param is supplied, returns a tranposer: a function that transposes
certain interval.

For example, given a M2 (`[ -1, 2]`) interval:

```js
  pitch.transpose(pitch('e3'), [-1, 2]);      // => [-3, 3] (f#3)
  var transposer = pitch.transpose([-1, 2]);  // Function
  transposer(pitch('e3'));                    // => [-3, 3]
```


## Build dist file

Build a web ready distribution:

```bash
npm install
npm test
npm start
```

## License

MIT License
